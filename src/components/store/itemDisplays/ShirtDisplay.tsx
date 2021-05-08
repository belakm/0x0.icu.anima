import { useState } from 'react'
import styled from 'styled-components'
import { Title } from '../../typography/Typography'
import { IItem } from '../Item'

const BlankShirt = styled.img<{ hue?: number }>`
  height: 100%;
  width: auto;
  filter: hue-rotate(${({ hue }) => hue || 0});
`

const Motive = styled.img`
  height: 100%;
  width: auto;
  position: absolute;
  left: 0;
  top: 0;
`

const ShirtDisplayContainer = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
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
