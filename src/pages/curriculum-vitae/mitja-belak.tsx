import Page from '../../components/skeleton/Page'
import { withUrqlClient } from 'next-urql'
import clientOptions from '../../urql/client'
import Window, { WindowWrapper } from '../../components/system/Window/Window'
import {
  Article,
  PageTitle,
  Paragraph,
  SmallText,
  Text,
  Title,
} from '../../components/common/Typography'
import { FlexColumn, FlexRow } from '../../components/common/Flex'
import Frame from '../../components/system/Frame/Frame'
import styled from 'styled-components'

const PortfolioImage = styled.img`
  object-fit: cover;
  object-position: 0 -30px;
  filter: hue-rotate(325deg);
  height: 254px;
`

const ChangelogSection = styled.section`
  margin-bottom: 2em;
  &:last-child {
    margin-bottom: 0;
  }
  > *:last-child {
    margin-bottom: 0;
  }
`

const MitjaBelak = () => (
  <Page
    metaTitle="Mitja Belak"
    title="Mitja Belak"
    description="Curriculum vitae of Mitja Belak"
  >
    <FlexRow style={{ width: 1440, margin: '0 auto' }}>
      <FlexColumn style={{ marginRight: '2em' }}>
        <Window style={{ width: 1020, marginBottom: '2em' }}>
          <WindowWrapper>
            <Article>
              <Title>Doing my best to produce that GOOD STUFF</Title>
              <Paragraph style={{ color: 'white' }}>
                I am mostly self-taught and good at that. I get excited at
                interesting people-oriented or cyber-rich projects. I love
                creating and I hate unnecessary bureaucracy. Been at it for a
                decade and I'm just growing stronger.
              </Paragraph>
              <Paragraph style={{ color: 'white' }}>
                Also: a good husband (quoted: my wife) and a loving owner of
                ferrets.
              </Paragraph>
            </Article>
          </WindowWrapper>
        </Window>
        <Window style={{ width: 1020 }} isTerminal>
          <WindowWrapper>
            <Article>
              <Paragraph>{`>`} cat ./CHANGELOG.md</Paragraph>
              <Paragraph>
                <Text color="primary"># CHANGELOG</Text>
              </Paragraph>
              <ChangelogSection>
                <Paragraph>
                  <Text color="primary">
                    ## [2.1.0] - 2021-01 (Smartis d.o.o. - Front-end Lead)
                  </Text>
                </Paragraph>
                <Paragraph style={{ fontWeight: 'bold' }}>
                  Envisioned and lead the ZOIS project which consists of: - a
                  Storybook.js lib for maintenance and creation of reusable web
                  components. - boilerplate project for quick-starting projects.
                </Paragraph>
                <Paragraph>
                  Based on:{' '}
                  <Text color="secondary">
                    Typescript React, styled-components, FluentUI and Next.js
                  </Text>
                </Paragraph>
              </ChangelogSection>

              <ChangelogSection>
                <Paragraph>
                  <Text color="primary">
                    ## [2.0.0] - 2020-08 (Smartis d.o.o. - Front-end Lead)
                  </Text>
                </Paragraph>
                <Paragraph style={{ fontWeight: 'bold' }}>
                  Started building a new stack to be used in future Smartis
                  d.o.o. projects.
                </Paragraph>
                <Paragraph>
                  <Text color="secondary">
                    Introduced Typescript, React and GraphQL as main technology
                    directions for development purposes.
                  </Text>
                </Paragraph>
              </ChangelogSection>

              <ChangelogSection>
                <Paragraph>
                  <Text color="primary">
                    ## [1.2.1] - 2017-03 (Smartis d.o.o. - Front-end Lead)
                  </Text>
                </Paragraph>
                <Paragraph style={{ fontWeight: 'bold' }}>
                  Component sandbox and library for advanced Tango platform
                  components, a Storybook.js-like project. (Finished)
                </Paragraph>
                <Paragraph>
                  <Text color="secondary">
                    Most of the work revolved around development of
                    visualization tools for charting of data with Highcharts.js
                    and agGrid.js
                  </Text>
                </Paragraph>
              </ChangelogSection>

              <ChangelogSection>
                <Paragraph>
                  <Text color="primary">
                    ## [1.2.0] - 2016-06 (Smartis d.o.o. - Front-end Lead)
                  </Text>
                </Paragraph>
                <Paragraph style={{ fontWeight: 'bold' }}>
                  Leading a front-end team in designing and implementing
                  frontend of{' '}
                  <a href="https://www.petrol.eu/companies-and-services/business-solutions/solutions/technical-information-system-tango">
                    Tango platform for Petrol d.o.o.
                  </a>{' '}
                  (Finished)
                </Paragraph>
                <Paragraph>
                  The platform gathers data from millions of data points from
                  Petrol facilities all over Slovenia and Balkan countries.
                </Paragraph>
                <Paragraph>
                  Its services include: - Data gathering - Data Processing -
                  Data visualization - Advanced data analytics and reporting -
                  Assets and locations management - Alarming and subsequent
                  standard operation procedures - Employee time management
                </Paragraph>
                <Paragraph>
                  Based on:{' '}
                  <Text color="secondary">
                    AngularJS, Nodejs, Webpack, HighchartsJS
                  </Text>
                </Paragraph>
              </ChangelogSection>
              <ChangelogSection>
                <Paragraph>
                  <Text color="primary">
                    ## [1.1.0] - 2015-10 (Smartis d.o.o. - Developer)
                  </Text>
                </Paragraph>
                <Paragraph style={{ fontWeight: 'bold' }}>
                  Developing a front-end for SmartIS SmartCity Platform
                  (Discontinued)
                </Paragraph>
                <Paragraph>
                  The platform focused on connecting data sources from publicly
                  accessible sources, congregating data in KPIs, offering
                  dynamically generated APIs to stored data and data
                  visualisation. Implemented in some Slovene municipalities for
                  a limited duration.
                </Paragraph>
                <Paragraph>
                  Based on:{' '}
                  <Text color="secondary">
                    AngularJS, Nodejs, GruntJS, HighchartsJS
                  </Text>
                </Paragraph>
              </ChangelogSection>
              <ChangelogSection>
                <Paragraph>
                  <Text color="primary">
                    ## [1.0.0] - 2015-02 (Kralj Interneta, Mitja Belak s.p. -
                    Developer)
                  </Text>
                </Paragraph>
                <Paragraph>
                  - Collaboration with Plenum IT d.o.o., maintenance and
                  creation of custom-made web pages/apps (3 large titles + some
                  smaller)
                  <br />
                  - Back-end and Front-end of a web market for pets (Živalnik)
                  based on ProcessWire CMS and custom graphical template.
                  <br />- Several other smaller web-based projects.
                </Paragraph>
                <Paragraph>
                  Based on: <Text color="secondary">jQuery, PHP</Text>
                </Paragraph>
              </ChangelogSection>
              <ChangelogSection>
                <Paragraph>
                  <Text color="primary">
                    ## [0.0.2] - 2014-05 (Plenum IT d.o.o. - Developer)
                  </Text>
                </Paragraph>
                <Paragraph>
                  - Creation, slicing and maintenance of custom-made
                  web-app/page designs (6 large titles + smaller projects)
                  <br />
                  - Javascript implementation.
                  <br />
                  - Server-side (PHP) implementation and occasional database
                  maintenance.
                  <br />- Web-store maintenance
                </Paragraph>
                <Paragraph>
                  Based on: <Text color="secondary">jQuery, PHP</Text>
                </Paragraph>
              </ChangelogSection>
              <ChangelogSection>
                <Paragraph>
                  <Text color="primary">
                    ## [0.0.1] - 2013-10 (Simbiont d.o.o. - Developer)
                  </Text>
                </Paragraph>
                <Paragraph>
                  - 3D modeling and 3D printing,
                  <br />
                  - Geostik enhancement: Development of geoStik Okolje service,
                  Remaking of geoStik graphical interface,
                  <br />
                  - Posredovalnica web marketplace, Local famer's web store, and
                  work or creation of other smaller pages or services
                  <br />
                </Paragraph>
                <Paragraph>
                  Based on:{' '}
                  <Text color="secondary">jQuery, Wordpress, PHP</Text>
                </Paragraph>
              </ChangelogSection>
            </Article>
          </WindowWrapper>
        </Window>
      </FlexColumn>
      <FlexColumn grow={1}>
        <Window style={{ marginBottom: '2em' }}>
          <WindowWrapper>
            <Article>
              <PageTitle
                style={{
                  color: '#ff0094',
                  letterSpacing: 11,
                  fontWeight: 'bold',
                }}
              >
                MITJA BELAK
              </PageTitle>
              <Frame intrusion="intrude" style={{ margin: '0 0 1em 0' }}>
                <PortfolioImage src="/images/art/mitjice.png" />
              </Frame>
              <Paragraph>
                28, Ljubljana, Slovenia
                <br />
                <a href="mailto:mico@0x0.icu">mico@0x0.icu</a>
                <br />
                <a href="https://github.com/belakm" target="blank">
                  https://github.com/belakm
                </a>
              </Paragraph>
            </Article>
          </WindowWrapper>
        </Window>
        <Window style={{ marginBottom: '2em' }}>
          <WindowWrapper>
            <Article>
              <SmallText>Sun, 2. May 2021</SmallText>
              <Title>CURRENT PASSION</Title>
              <Paragraph style={{ marginBottom: 0 }}>
                Creating a personal platform for me and my wife Nina based on{' '}
                <a
                  href="https://github.com/belakm/0x0.icu.anima"
                  target="blank"
                >
                  Next.js, Typescript React, styled-components as front-end
                </a>{' '}
                and a{' '}
                <a
                  href="https://github.com/belakm/0x0.icu.emporium"
                  target="blank"
                >
                  Postgraphile GraphQL backend
                </a>
                , deployed with Dockers.
              </Paragraph>
            </Article>
          </WindowWrapper>
        </Window>
        <Window style={{ marginBottom: '2em' }}>
          <WindowWrapper>
            <Article>
              <Title>MY STRONGEST POINTS AND ASPIRATIONS</Title>
              <Paragraph>
                I'm particularly good at making custom components, I like to
                prepare them so they have a good feel to them.{' '}
              </Paragraph>
              <Paragraph>
                <SmallText>
                  (For example; this document you are reading is done with React
                  Typescript and styled-components)
                </SmallText>
              </Paragraph>
              <Paragraph>
                I've also been getting into back-end stuff recently and plan to
                develop that part of my knowledge deeper as I think experience
                width is important.
              </Paragraph>
            </Article>
          </WindowWrapper>
        </Window>
        <Window style={{ marginBottom: '2em' }}>
          <WindowWrapper>
            <Article>
              <Title>OTHER GIGS</Title>
              <Paragraph>
                I've spent a month and a half in 2020 pimping out{' '}
                <a href="https://github.com/React95/React95">React95</a>{' '}
                project.
              </Paragraph>
              <Paragraph>
                I also like to play games and make them. I have been working
                with Unity3D for some years and later switched to Godot Engine
                for video game production.
              </Paragraph>
              <Paragraph>
                I am planning a production and release of ADA Cardano NFTs in
                partnership with my wife in near future.
              </Paragraph>
            </Article>
          </WindowWrapper>
        </Window>
        <Window>
          <WindowWrapper>
            <Article>
              <Title>FORMAL EDUCATION</Title>
              <Paragraph>
                Univerza v Ljubljani
                <br />
                Faculty of Mathematics and Physics - Applied Mathematics (1
                year)
              </Paragraph>
              <Paragraph>
                Univerza v Ljubljani
                <br />
                Faculty of Mathematics and Physics - Mathematics and Computer
                science (1 year)
              </Paragraph>
              <Paragraph>Gimnazija Poljane (2007 - 2011)</Paragraph>
            </Article>
          </WindowWrapper>
        </Window>
      </FlexColumn>
    </FlexRow>
  </Page>
)

export default withUrqlClient((_ssrExchange, ctx) => clientOptions)(MitjaBelak)
