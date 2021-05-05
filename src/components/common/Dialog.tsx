import { useContext } from 'react'
import ModalContext from '../../contexts/ModalContext'
import Modal from '../common/Modal'
import Button from '../system/Button/Button'
import { WindowWrapper } from '../system/Window/Window'
import { FlexRow } from './Flex'

export interface IDialog {
  message: React.ReactNode
  handleMessage: (anwser: boolean) => void
}

const Dialog = ({ message, handleMessage }: IDialog) => {
  const modalContext = useContext(ModalContext)
  return (
    <Modal width="480" title="A DECISION AWAITS">
      <WindowWrapper>
        {message}
        <FlexRow align="end center" style={{ marginTop: '1em' }}>
          <Button
            style={{ marginRight: '.2em' }}
            onClick={() => {
              handleMessage(true)
              modalContext.closeAllModals()
            }}
          >
            OK
          </Button>
          <Button
            onClick={() => {
              handleMessage(false)
              modalContext.closeAllModals()
            }}
          >
            CANCEL
          </Button>
        </FlexRow>
      </WindowWrapper>
    </Modal>
  )
}

export default Dialog
