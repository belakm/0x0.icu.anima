import Frame from '../system/Frame/Frame'
import Wrapper from '../common/Wrapper'
import { FlexRow } from '../common/Flex'

const Footer = () => (
  <Frame
    style={{
      padding: '.5em 0',
      height: 'calc(41px + 1em)',
      boxSizing: 'border-box',
    }}
  >
    <Wrapper style={{ height: '100%' }}>
      <FlexRow align="center center" style={{ height: '100%' }}>
        Copyright 2020 - {new Date().getFullYear()} @ Nina Belak, Mitja Belak (
        <a href="mailto:kernel.panic@0x0.icu">kernel.panic@0x0.icu</a>)
      </FlexRow>
    </Wrapper>
  </Frame>
)

export default Footer
