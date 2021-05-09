import { useState } from 'react'
import styled from 'styled-components'
import { IItem } from '../Item'

const BlankShirt = styled.img<{ hue?: number }>`
  height: auto;
  width: 100%;
  filter: hue-rotate(${({ hue }) => hue || 0});
`

const Motive = styled.img`
  height: auto;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`

const ShirtDisplayContainer = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

interface IShirtDisplay {
  item: IItem
}

const ShirtDisplay = ({ item }: IShirtDisplay) => {
  const [hue, setHue] = useState<number>(0)
  return (
    <ShirtDisplayContainer>
      <BlankShirt hue={hue} src="/images/articles/tshirt.png" />
      <Motive src={/* item.media */ '/images/articles/print_paypig.png'} />
    </ShirtDisplayContainer>
  )
}

export default ShirtDisplay
