import { dedupExchange, cacheExchange, fetchExchange, makeOperation } from 'urql';
import { authExchange } from '@urql/exchange-auth';
import { API_GRAPHQL } from '../../env/env'

interface IAuth {
  token: string
}

const clientOptions = {
  url: API_GRAPHQL,
  exchanges: [
    dedupExchange,
    cacheExchange,
    authExchange<IAuth>({
      getAuth: async ({ authState }) => {
        if (!authState && typeof localStorage != 'undefined') {
          const token = localStorage.getItem('token');
          const refreshToken = localStorage.getItem('refreshToken');
          if (token && refreshToken) {
            return { token, refreshToken };
          }
          return null;
        }
        return null;
      },
      addAuthToOperation: ({ authState, operation }) => {
        if (!authState || !authState.token) {
          return operation;
        }
      
        const fetchOptions =
          typeof operation.context.fetchOptions === 'function'
            ? operation.context.fetchOptions()
            : operation.context.fetchOptions || {};
      
        return makeOperation(operation.kind, operation, {
          ...operation.context,
          fetchOptions: {
            ...fetchOptions,
            headers: {
              ...fetchOptions.headers,
              Authorization: authState.token,
            },
          },
        });
      },
      didAuthError: ({ error }) => {
        console.log(error)
        return error.graphQLErrors.some(e => e.extensions?.code === 'FORBIDDEN');
      }
    }),
    fetchExchange,
  ],
};

export default clientOptions