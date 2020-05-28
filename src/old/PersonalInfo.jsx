import React, { Component } from 'react'
import styled from 'styled-components'

const PersonalBit = styled.span`
  color: white;
  font-size: 1.6em;
`

const RevealingBit = styled(PersonalBit)`
  &:hover {
    background: hsl(294, 100%, 50%);
  }
`

const MaskedBit = styled(PersonalBit)`
  display: inline-block;
  background: black;
  color: black;
  padding: .1em;
  &::selection {
    color: transparent;
    background: #444;
  }
  &:hover {
    animation-duration: 0.01s;
    animation-name: skewflicker;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes skewflicker {
    0% {
      transform: skew(0);
    }
    15% {
      transform: skew(-5deg, 2deg);
    }
    20% {
      transform: skew(10deg, -2deg);
    }
    100% {
      transform: skew(-3deg, 1deg);
    }
  }
`

const PersonalInfoList = styled.ul`
  margin: 0 auto;
`
const PersonalInfoListItem = styled.li`
  margin-bottom: .4em;
  color: white;
`

const location = 'Comfy @ Ljubljana, Slovenia'
const locationHovered = '46.0662151243, 14.4620596612'

class PersonalInfo extends Component {
  state = {
    location
  }
  changeLocation(hovered) {
    if (hovered) {
      this.setState({ location: locationHovered})
    } else {
      this.setState({ location })
    }
  }
  render() {
    return <PersonalInfoList>
      <PersonalInfoListItem>
        name: <PersonalBit>Nina Kosednar</PersonalBit>
      </PersonalInfoListItem>

      <PersonalInfoListItem>
        alias: <PersonalBit>Sitri</PersonalBit>
      </PersonalInfoListItem>

      <PersonalInfoListItem>
        location: <RevealingBit
          onMouseEnter={() => { this.changeLocation(true) }}
          onMouseLeave={() => { this.changeLocation(false) }}
        >
          {this.state.location}
        </RevealingBit>
      </PersonalInfoListItem>

      <PersonalInfoListItem>
        mail: <PersonalBit>sitri@0x0.icu</PersonalBit>
      </PersonalInfoListItem>

      <PersonalInfoListItem>
        phone: <MaskedBit>Sorry, maybe not</MaskedBit>
      </PersonalInfoListItem>

      <PersonalInfoListItem>
        discord: <MaskedBit>Sorry, maybe not</MaskedBit>
      </PersonalInfoListItem>
    </PersonalInfoList>
  }
}

export default PersonalInfo