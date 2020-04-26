import React, { Component } from 'react'
import styled from 'styled-components';

const JumbotronText = styled.p`
  color: white;
  font-size: 3em;
  text-shadow: 0.06rem 0 0.06rem #ea36af, -0.125rem 0 0.06rem #75fa69;
  animation-duration: 0.01s;
  animation-name: textflicker;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  text-align: center;
  text-transform: uppercase;
  padding: 1em 1em;
  white-space: pre;

  @keyframes textflicker {
    from {
      text-shadow: 1px 0 0 #ea36af, -2px 0 0 #75fa69;
    }
    to {
      text-shadow: 2px 0.5px 2px #ea36af, -1px -0.5px 2px #75fa69;
    }
  }
`

class Jumbotron extends Component {
  render() {
    return (
      <JumbotronText>
        {`Art is shit
Graphic design is shit
    All i want is revenge`}
      </JumbotronText>
    );
  }
}

export default Jumbotron