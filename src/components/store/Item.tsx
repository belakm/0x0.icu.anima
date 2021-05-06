export type TCurrency = 'EUR' | 'ADA'

export type TItemType = 'tshirt'

export interface IItem {
  id: number
  name: string
  description: string
  price: number
  currency: TCurrency
  media: string
  mediaType: string
  type: TItemType
}
