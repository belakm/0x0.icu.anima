import React, {Component} from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 0 1em;
`

class Wrapper extends Component {
  render() {
    return <StyledWrapper>
      {this.props.children}
    </StyledWrapper>
  }
}

export default Wrapper