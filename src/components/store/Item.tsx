export type TCurrency = 'EUR'
export type TCryptoCurrency = 'ADA'

export type TItemType = 'tshirt' | 'nft'

export interface IItem {
  id: number
  name: string
  description: string
  price: number
  currency: TCurrency
  cryptoPrice: number
  cryptoCurrency: TCryptoCurrency
  media: string
  mediaType: string
  type: TItemType
}
