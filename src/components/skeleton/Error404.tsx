import Window, { WindowWrapper } from '../system/Window/Window'

const Error404 = () => {
  return (
    <Window title="Error 404 - DOES NOT EXIST">
      <WindowWrapper>
        <p>I am so sorry, but this page does not seem to exist.</p>
      </WindowWrapper>
    </Window>
  )
}

export default Error404
