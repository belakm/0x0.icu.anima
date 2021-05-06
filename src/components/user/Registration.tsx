import { Form, Formik, FormikValues } from 'formik'
import { withUrqlClient } from 'next-urql'
import { CSSProperties, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { gql, useMutation } from 'urql'
import ModalContext from '../../contexts/ModalContext'
import { FlexColumn, FlexRow } from '../common/Flex'
import Modal from '../common/Modal'
import FormField from '../form/FormField'
import Button from '../system/Button/Button'
import { API_GRAPHQL } from '../../../env/env'

const RegisterUser = gql`
  mutation AddNewUser(
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
  ) {
    registerPerson(
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
      }
    ) {
      person {
        firstName
        lastName
        id
      }
    }
  }
`

const SuccessMessage = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.status.ok};
`

const Registration = () => {
  const modalContext = useContext(ModalContext)
  const [registerUserResult, registerUser] = useMutation(RegisterUser)
  const [error, setError] = useState<string | null>(null)

  const register = (
    values: FormikValues,
    {
      /*setSubmitting*/
    },
  ) => {
    registerUser(values).then(result => {
      if (result.error) {
        console.error('Oh no!', result.error)
      }
    })
  }

  useEffect(() => {
    const { error, data } = registerUserResult
    if (error != null) {
      setError('Email already used.')
    } else if (data != null && data.registerPerson != null) {
      modalContext.openLoginModal({
        message: <SuccessMessage>Account successfully created.</SuccessMessage>,
      })
    }
  }, [registerUserResult])

  interface IDictionary<TValue> {
    [id: string]: TValue
  }

  const rowStyle: CSSProperties = {
    width: '50%',
    boxSizing: 'border-box',
  }

  return (
    <Modal width="480" title="CONNECT IN">
      <p style={{ textAlign: 'center', color: 'grey' }}>
        Use imaginary info for all i care ...
      </p>
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          passwordConfirmation: '',
        }}
        validate={values => {
          const errors: IDictionary<string> = {}
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          register(values, { setSubmitting })
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form style={{ padding: '1em' }}>
            <FormField required name="email" type="email" label="E-mail" />
            <FlexRow>
              <FormField
                required
                name="firstName"
                label="First name"
                style={{ ...rowStyle, paddingRight: '.5em' }}
              />
              <FormField
                required
                name="lastName"
                label="Last name"
                style={{ ...rowStyle, paddingLeft: '.5em' }}
              />
            </FlexRow>
            <FlexRow style={{ margin: '1em 0 2em' }}>
              <FormField
                required
                name="password"
                type="password"
                label="Password"
                style={{ ...rowStyle, paddingRight: '.5em' }}
              />
              <FormField
                required
                name="passwordConfirmation"
                type="password"
                label="Repeat password"
                style={{ ...rowStyle, paddingLeft: '.5em' }}
              />
            </FlexRow>
            <FlexColumn>
              <Button type="submit" disabled={isSubmitting}>
                REGISTER
              </Button>
            </FlexColumn>
            {error && <p color="red">{error} Try again :)</p>}
            <p>* All fields are required.</p>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default withUrqlClient((_ssrExchange, ctx) => ({
  // ...add your Client options here
  url: API_GRAPHQL,
}))(Registration)
