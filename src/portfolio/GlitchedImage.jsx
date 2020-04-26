import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Image = styled.div`
  display: block;
  overflow: hidden;
  position: relative;
  transition: transform .4s;
  &:hover {
    img {
      transform: translate(0);
    }
    transform: scale(1.1, 1.1);
    z-index: 50;
  }
`

const GlitchedChannel = styled.img`
  width: 100%;
  height: auto;
  ${ props => {
    return props.channel === 'b' && css`
      filter: url('#b');
    `}}
  ${ props => {
    let channelConfig = {
      rotation: 0,
      translate: 0
    }
    switch(props.channel) {
      case 'r': {
        channelConfig.translate = '5px, 2px'
        break
      }
      case 'g': {
        channelConfig.translate = '-2px, -5px'
        break
      }
      case 'b': {
        break
      }
      default: break;
    }
    return (props.channel === 'r' || props.channel === 'g') && css`
      left: 0;
      mix-blend-mode: screen;
      position: absolute;
      top: 0;
      transition: transform .4s;
      z-index: 1;
      filter: url('#${props.channel}');
      transform: translate(${channelConfig.translate});
    `
  }}
`

class GlitchedImage extends Component {
  render() {
    const channels = ['r', 'g', 'b']
    const {hires, lores, alt} = this.props.image
    return <Image>
      {
        channels.map(channel => {
          return <GlitchedChannel
            key={channel}
            srcset={`${lores} 480w, ${hires} 800w`}
            sizes="(max-width: 600px) 480px, 800px"
            src={lores}
            alt={alt}
            channel={channel} />
        })
      }
    </Image>
  }
}

export default GlitchedImage