import styled from 'styled-components'
import { ImageViewer } from '../../gallery/GalleryItem'

interface IShirtDisplay {
  image: string
  hue?: number
}

const BlankShirt = styled.img<{ hue?: number }>`
  width: 100%;
  height: auto;
  filter: hue-rotate(${({ hue }) => hue || 0});
`

const Motive = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
`

const ShirtDisplay = ({ image, hue = 0 }: IShirtDisplay) => {
  return (
    <div style={{ position: 'relative' }}>
      <BlankShirt hue={hue} src="/images/articles/tshirt.png" />
      <Motive src={image} />
    </div>
  )
}

export default ShirtDisplay
