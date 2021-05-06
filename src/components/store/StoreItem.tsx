import { CSSProperties } from 'react'
import styled from 'styled-components'
import { Article, Paragraph, SmallText, Title } from '../common/Typography'
import Frame from '../system/Frame/Frame'
import Window, { WindowWrapper } from '../system/Window/Window'
import ShirtDisplay from './itemDisplays/ShirtDisplay'

interface IStoreItem {
  name: string
  price: number
  image: string
  currency: string
  description: string
  style?: CSSProperties
  type: 'shirt' | 'simple'
}

const StoreItemImage = styled.img``

const PriceTag = styled.span``

const StoreItem = ({
  name,
  price,
  image,
  description,
  currency,
  style,
  type,
}: IStoreItem) => {
  return <div style={style}></div>
}

export default StoreItem
