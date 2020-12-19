import React from 'react'
import styled from 'styled-components'

const StyledGalleryImage = styled.img`
  border: 10px solid #ff00ff;
  width: calc(100% - 20px);
  height: auto;
`

interface IGalleryImage {
  src: string
  title: string
}
const GalleryImage = ({ src, title }: IGalleryImage) => {
  return <StyledGalleryImage src={src} title={title} alt={title} />
}

export default GalleryImage
