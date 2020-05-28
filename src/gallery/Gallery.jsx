import styled from 'styled-components'
import React, { Component } from 'react';

const GalleryTape = styled.div`
  margin: 0 auto;
  width: 806px;
  text-align: center;
  background: hsl(144, 100%, 50%, 6%);
`

class Gallery extends Component {
  render() {
    return <GalleryTape>
      Gallery
    </GalleryTape>
  }
}

export default Gallery;