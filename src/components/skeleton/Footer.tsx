import Frame from '../system/Frame/Frame'
import Wrapper from '../common/Wrapper'
import { FlexRow } from '../common/Flex'

const Footer = () => (
  <Frame style={{ padding: '1em 0', height: 60, boxSizing: 'border-box' }}>
    <Wrapper>
      <FlexRow align="center center">
        Copyright 2020 - {new Date().getFullYear()} @ Nina Belak, Mitja Belak (
        <a href="mailto:kernel.panic@0x0.icu">kernel.panic@0x0.icu</a>)
      </FlexRow>
    </Wrapper>
  </Frame>
)

export default Footer
