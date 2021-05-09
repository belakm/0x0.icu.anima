import { Article, PageTitle, Paragraph, Title } from '../typography/Typography'
import LinkButton from '../system/Button/LinkButton'
import Window, { WindowWrapper } from '../system/Window/Window'
import Featured from './Featured'
import { IItem } from './Item'
import styled from 'styled-components'
import { CSSProperties } from 'react'
import { FlexColumn, FlexRow } from '../containers/Flex'
import BorderBox from '../system/BorderBox/BorderBox'

const exampleItem: IItem = {
  id: 0,
  name: 'PERSONAL DATA PAYPIG',
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
  price: 20,
  currency: 'EUR',
  cryptoPrice: 15,
  cryptoCurrency: 'ADA',
  mediaType: 'data:png',
  media: '',
  type: 'tshirt',
}

const FeaturedArticle = styled(Article)`
  position: relative;
  height: 8.5em;
  overflow: hidden;
  margin-bottom: 2em;
  padding: 0 1em 0 0.5em;
  :after {
    position: absolute;
    background: black;
    right: 0;
    bottom: 0;
    content: '…';
  }
`

const StoreGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 40% 60%;
  grid-template-areas:
    'featured featuredDescription'
    'featured featuredSecondary';
`

const FeaturedWindowContainer = styled.div`
  height: calc(100% - 1em);
  width: 130%;
  margin-left: -30%;
`

const FeaturedGridItem = styled.div`
  grid-area: featured;
  z-index: 1;
`

const FeaturedGridItemDescription = styled.div`
  position: relative;
  grid-area: featuredDescription;
  z-index: 2;
`

const FeaturedGridItemSecondary = styled.div`
  position: relative;
  grid-area: featuredSecondary;
  z-index: 2;
  ${FeaturedWindowContainer} {
    margin-top: 1em;
  }
`

const FeaturedWindowWrapper = styled(WindowWrapper)`
  height: calc(100% - 10em);
  margin-bottom: 1em;
`

const FeaturePrice = styled.p`
  padding: 0 0.5rem;
  margin: 0;
`

const FeaturePriceNumber = styled.span`
  font-size: 1.5em;
  border-radius: 0.1em;
  padding: 0.2em;
  font-weight: bold;
  background: ${({ theme }) => theme.store.priceBackground};
  color: ${({ theme }) => theme.store.priceText};
`

const FeaturedArrow = styled.span`
  position: absolute;
  left: -65%;
  top: 3em;
  width: 35%;
  border-top: 2px dashed ${({ theme }) => theme.system.borderBoxBorderSecondary};
`

const windowStyles: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
}

const ctaStyles: CSSProperties = {
  position: 'absolute',
  bottom: '.5rem',
  left: '.5rem',
  width: 'calc(100% - 1rem)',
}

const Store = () => {
  return (
    <>
      <StoreGrid style={{ marginBottom: '2em' }}>
        <FeaturedGridItem>
          <Featured item={exampleItem} />
        </FeaturedGridItem>
        <FeaturedGridItemDescription>
          <FeaturedArrow />
          <FeaturedWindowContainer>
            <BorderBox type="secondary" style={windowStyles}>
              <FeaturedArticle>
                <Title>{exampleItem.name}</Title>
                <Paragraph>{exampleItem.description}</Paragraph>
              </FeaturedArticle>
              <FeaturePrice>
                Price:{' '}
                <FeaturePriceNumber>
                  {exampleItem.price} <small>{exampleItem.currency}</small>
                </FeaturePriceNumber>{' '}
                or{' '}
                <FeaturePriceNumber>
                  {exampleItem.cryptoPrice}{' '}
                  <small>{exampleItem.cryptoCurrency}</small>
                </FeaturePriceNumber>
              </FeaturePrice>
              <LinkButton
                style={ctaStyles}
                size="large"
                variant="primary"
                href={`/article/${exampleItem.id}`}
              >
                DETAILS AND ORDER
              </LinkButton>
            </BorderBox>
          </FeaturedWindowContainer>
        </FeaturedGridItemDescription>
        <FeaturedGridItemSecondary>
          <FeaturedWindowContainer>
            <Window title="COMING SOON" style={windowStyles}>
              <FeaturedWindowWrapper title={exampleItem.name}>
                <Article style={{ marginBottom: '1em' }}>
                  <Title>0x0_SPECIMEN</Title>
                  <FlexRow>
                    <FlexColumn style={{ width: '60%' }}>
                      <Paragraph>
                        We are proud to announce the coming of specially and
                        uniquely designed NFTs coming Q2 2021.
                      </Paragraph>
                      <Paragraph style={{ marginBottom: 0 }}>
                        In the style of 0x0 neo-cyberpunk esthetics we are
                        preparing an assortment of lovely hand-drawn
                        monster-girl NFTs for you to bolster your collection.
                      </Paragraph>
                    </FlexColumn>
                    <img
                      src="https://www.thiswaifudoesnotexist.net/example-93562.jpg"
                      style={{ width: '40%' }}
                    />
                  </FlexRow>
                </Article>
              </FeaturedWindowWrapper>
              <FeaturePrice>
                Starting at:{' '}
                <FeaturePriceNumber>
                  5 <small>ADA</small>
                </FeaturePriceNumber>
              </FeaturePrice>
              <LinkButton
                style={ctaStyles}
                size="large"
                variant="default"
                href={`/article/${exampleItem.id}`}
              >
                LEARN MORE
              </LinkButton>
            </Window>
          </FeaturedWindowContainer>
        </FeaturedGridItemSecondary>
      </StoreGrid>
      <FlexRow>
        <BorderBox style={{ width: '50%' }} type="primary">
          <Article>
            <Title>Sitri's artwork</Title>
            <Paragraph>
              If you wanna see more of Nina Belak's (alias Sitri) artwork ...{' '}
            </Paragraph>
            <Paragraph>
              <LinkButton href="/artwork">TO GALLERY</LinkButton>
            </Paragraph>
          </Article>
        </BorderBox>
        <Window title="ABOUT US" style={{ width: '50%', marginLeft: '2em' }}>
          <WindowWrapper>
            <Article>
              <PageTitle>0x0_NETWORK</PageTitle>
              <Paragraph>
                We are on a mission to spread neo-cyber-punk to whomever
                listens. This project came as a corona fever dream, and we made
                it happen.
              </Paragraph>
              <Paragraph>
                Us? Nina and Mitja Belak. We live and create from lovely
                Ljubljana in Slovenia.
              </Paragraph>
              <Paragraph>
                Wanna make sure we arent here to scam you?{' '}
                <LinkButton href="/about">LEARN MORE ABOUT US</LinkButton>
              </Paragraph>
            </Article>
          </WindowWrapper>
        </Window>
      </FlexRow>
    </>
  )
}

export default Store
