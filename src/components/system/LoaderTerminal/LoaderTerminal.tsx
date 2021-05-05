import ProgressLoader from './ProgressLoader'
import Window, { WindowWrapper } from '../Window/Window'
import styled from 'styled-components'

interface ILoaderTerminal {
  title: string
  textScriptName: string
  textProgress: string
  textSuccess?: string
  textFailed?: string
}

const StyledTextSuccess = styled.p`
  color: ${({ theme }) => theme.system.terminalTextSuccess};
`
const StyledTextFail = styled.p`
  color: ${({ theme }) => theme.system.terminalTextFail};
`

const LoaderTerminal = ({
  title = '0x0_TERM',
  textScriptName,
  textProgress,
  textSuccess,
  textFailed,
}: ILoaderTerminal) => {
  return (
    <Window isTerminal title={title}>
      <WindowWrapper>
        <p>{textScriptName}</p>
        {!textSuccess && !textFailed ? (
          <ProgressLoader width={80} text={textProgress} />
        ) : null}
        {textSuccess ? (
          <StyledTextSuccess>{textSuccess}</StyledTextSuccess>
        ) : null}
        {textFailed ? <StyledTextFail>{textFailed}</StyledTextFail> : null}
      </WindowWrapper>
    </Window>
  )
}

export default LoaderTerminal
