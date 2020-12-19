import React from 'react'
import { Window, TitleBar, Panel, ThemeProvider } from '@react95/core'
import rose from '@react95/core/ThemeProvider/themes/rose'
import icons from '@react95/icons'
import { OptionItem, OptionsBox, Option } from '@react95/core/TitleBar/TitleBar'
import styled from 'styled-components'
import { FlexRow } from '../Flex'

interface IWindowWrapper {
  width: number | 'auto'
  height: number | 'auto'
}

interface IImageFrame {
  title: string
  icon: keyof typeof icons
  src: string
}

const FullscreenIcon = styled.div`
  width: 8px;
  height: 7px;
  border: 1px solid black;
  box-shadow: 0 -1px 0 0 black;
  margin-left: 2px;
`

const ImageFrame = ({
  src,
  title,
  icon,
  width = 360,
  height = 'auto',
}: IImageFrame & IWindowWrapper) => {
  const [modalOpen, setModalOpen] = React.useState(false)

  return (
    <ThemeProvider theme={rose}>
      <Window width={width} height={height} style={{ margin: '1em' }}>
        <TitleBar icon={icon} title={title}>
          <OptionsBox>
            <OptionItem>
              <Option onClick={() => setModalOpen(true)}>
                <FullscreenIcon>OPEN</FullscreenIcon>
              </Option>
            </OptionItem>
            <OptionItem>
              <Option disabled={!modalOpen} onClick={() => setModalOpen(false)}>
                <FlexRow align="center start">
                  <span style={{ marginTop: -3, marginLeft: -2 }}>✖</span>
                </FlexRow>
              </Option>
            </OptionItem>
          </OptionsBox>
        </TitleBar>
        <Panel shadow="none" style={{ padding: 0 }}>
          <Panel isScrollable={false}>
            <img src={src} alt={title} style={{ width: '100%' }} />
          </Panel>
        </Panel>
      </Window>
    </ThemeProvider>
  )
}

export default ImageFrame
