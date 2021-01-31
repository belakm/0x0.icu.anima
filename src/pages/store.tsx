import React from 'react'
import Page from '../components/skeleton/Page'
import Store from '../components/store/Store'

const Index = () => (
  <Page
    title="My merch"
    description="no touching"
    meta-title="Sitri store"
    meta-description="Sitri's store shirts and art for sale"
  >
    <Store />
  </Page>
)

export default Index
