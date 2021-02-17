import React from 'react'
import Frame from '../Win95/Frame/Frame'
import Wrapper from '../gallery/Wrapper'
import { FlexRow } from '../common/Flex'

const Footer = () => (
  <Frame style={{ padding: '1em 0' }}>
    <Wrapper>
      <FlexRow align="center center">
        Copyright @ 2020 - Sitri (
        <a href="mailto:sitri@0x0.icu">sitri@0x0.icu</a>)
      </FlexRow>
    </Wrapper>
  </Frame>
)

export default Footer
