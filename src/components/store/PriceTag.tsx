import styled from 'styled-components'
import { FlexColumn, FlexRow } from '../containers/Flex'

export type ICurrency = 'EUR' | 'ADA'

export interface IPrice {
  price: number
  alternativePrice: number
  currency: ICurrency
  alternativeCurrency: ICurrency
}

const StyledPriceTag = styled.section`
  display: inline-block;
  background-color: ${({ theme }) => theme.system.material};
  color: ${({ theme }) => theme.status.ok};
  font-size: 2em;
  padding: 0.2em 0.5em;
  z-index: 4;
`

const StyledPrice = styled.p`
  display: inline-block;
  font-size: 0.9em;
  margin: 0;
`

const StyledAlternativePrice = styled(StyledPrice)`
  font-size: 0.7em;
`

const PriceTag = ({
  price,
  alternativePrice,
  currency,
  alternativeCurrency,
}: IPrice) => {
  return (
    <StyledPriceTag>
      <FlexColumn>
        <StyledPrice>
          {price} <small>{currency}</small>
        </StyledPrice>
        <StyledAlternativePrice>
          <small>
            {alternativePrice} <small>{alternativeCurrency}</small>
          </small>
        </StyledAlternativePrice>
      </FlexColumn>
    </StyledPriceTag>
  )
}

export default PriceTag
