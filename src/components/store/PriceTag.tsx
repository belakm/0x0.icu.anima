export type ICurrency = 'EUR' | 'ADA'

export interface IPrice {
  price: number
  alternativePrice: number
  currency: ICurrency
  alternativeCurrency: ICurrency
}
