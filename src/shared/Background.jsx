import styled from 'styled-components'
import React, { Component } from 'react';
  
const BackgroundImage = styled.div.attrs(props => (
  {
    style: {
      background: `hsl(${props.hue}, ${props.shade}%, 23%)`
    }
  }))`
  background: hsl(266, 5%, 23%);
  width: 100%;
  height: 100%;
  position: absolute;
  transition: background-color .4s ease-in;
  z-index: -2;
`

class Background extends Component {

  state = {
    hue: 270
  }
  
  componentDidMount() {
    const min = 400
    const max = 4200
    setInterval(() => {
      setTimeout(() => {
        this.setState({ 
          hue: this.getRandomHue(),
          shade: this.getRandomShade()
        });
      }, Math.random() * (max - min) + min)
    }, 1500) 
  }

  getRandomHue() {
    const min = 266
    const max = 275
    return Math.random() * (max - min) + min;
  }

  getRandomShade() {
    const min = 0
    const max = 20
    return Math.random() * (max - min) + min;
  }

  render() {
    return <BackgroundImage hue={this.state.hue} shade={this.state.shade}></BackgroundImage>
  }
}

export default Background;