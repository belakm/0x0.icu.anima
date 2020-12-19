import React from 'react'
import styled from 'styled-components'
import { ThemeProvider, Panel, Icon } from '@react95/core'
import Divider from '@react95/core/Divider'
import IconButton from '../common/IconButton'

// social logos
import facebookImage from '../../../public/images/brand/facebook.svg'
import instagramImage from '../../../public/images/brand/instagram.svg'
import deviantartImage from '../../../public/images/brand/deviantart.svg'
import twitterImage from '../../../public/images/brand/twitter.svg'
import { FlexColumn, FlexRow } from '../common/Flex'

// theme is now fully typed
export const MainColor = styled.div`
  background: grey;
`

const LogoTitle = styled.h1`
  font-family: 'LinearBeam05';
  font-weight: 400;
  font-size: 10em;
  margin: 0;
  color: #c82855;
  display: inline-block;
  text-shadow: 1px 1px white;
`
const LogoSubTitle = styled.span`
  font-weight: 800;
  font-size: 4em;
  margin-left: 0.2em;
  color: #999;
  display: inline-block;
  text-shadow: 2px 1px white;
`

const currentYear = new Date().getFullYear()

const TopBar = () => (
  <ThemeProvider>
    <Panel shadow="none" padding="0px">
      <FlexRow align="start start" style={{ padding: '1em' }}>
        <FlexRow grow={1} align="start end">
          <LogoTitle>SITRI</LogoTitle>
          <LogoSubTitle>{currentYear}</LogoSubTitle>
        </FlexRow>
        <FlexColumn>
          <FlexRow>
            <IconButton href="#">
              <img
                src={facebookImage}
                alt="Facebook"
                title="Sitri's facebook"
              />
            </IconButton>
            <IconButton href="#">
              <img src={twitterImage} alt="Facebook" title="Sitri's twitter" />
            </IconButton>
            <IconButton href="#">
              <img
                src={instagramImage}
                alt="Facebook"
                title="Sitri's instagram"
              />
            </IconButton>
            <IconButton href="#">
              <img
                src={deviantartImage}
                alt="Facebook"
                title="Sitri's deviantart"
              />
            </IconButton>
          </FlexRow>
          <Divider style={{ margin: '1em 0' }} />
          <a href="mailto:sitri@0x0.icu">
            <FlexRow align="start center">
              <Icon name="mapi32_801" />
              <span style={{ fontSize: '1.5em', paddingLeft: '.4em' }}>
                sitri @ 0x0.icu
              </span>
            </FlexRow>
          </a>
        </FlexColumn>
      </FlexRow>
      <FlexRow style={{ padding: '1em' }}>
        <Panel shadow="intrude" asCanvas style={{ fontSize: '1.2em' }}>
          Hey there. ヾ( ͝° ͜ʖ͡°)ノ♪
        </Panel>
      </FlexRow>
    </Panel>
  </ThemeProvider>
)

export default TopBar
