import React from 'react'
import Window from '../components/common/Window'
import Page from '../components/skeleton/Page'
import Image from '../../public/images/glavan.jpg'
import ImageBik from '../../public/images/bik.jpg'

const Index = () => (
  <Page title='Sitri 2020' description='Sitri web shop, buy merch bro'>
    <div style={{padding: '120px', display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <Window title="Kaj mi dela ta GLAVA" icon="access_220" width={360} height='auto'>
          <img alt="" src={Image} style={{width: '100%'}} />
        </Window>
      </div>
      <div>
        <Window title="Bik 2019" icon="access_220" width={480} height='auto'>
          <img alt="" src={ImageBik} style={{width: '100%'}} />
          <hr />
          <p>Lahko noč bibike!!</p>
        </Window>
      </div>
    </div>
  </Page>
)

export default Index
