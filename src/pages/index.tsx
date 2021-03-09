import React from 'react'
import Page from '../components/skeleton/Page'
import Gallery from '../components/gallery/Gallery'
import { withUrqlClient } from 'next-urql';

const Index = () => (
  <Page
    metaTitle="0x0.Sitri"
    title="0w0, what is this?"
    description="Check these out!!!!!!!!"
  >
    <Gallery />
  </Page>
)

export default withUrqlClient((_ssrExchange, ctx) => ({
  // ...add your Client options here
  url: 'http://174.138.11.146:5433/graphql',
}))(Index);

/*
const client = createClient({
  url: 'http://localhost:3000/graphql',
  fetchOptions: () => {
    const token = getToken();
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  },
});
*/