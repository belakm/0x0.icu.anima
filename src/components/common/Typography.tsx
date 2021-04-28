import styled from 'styled-components'

export const PageTitle = styled.h1`
  font-size: 2.488rem;
  line-height: 3rem;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 0;
`

export const Title = styled.h2`
  font-size: 2.074rem;
  line-height: 1.54;
  line-height: 2.5rem;
  font-weight: 200;
  margin-bottom: 0;
  margin-top: 0;
`

export const SubTitle = styled.h3`
  font-size: 1.728rem;
  line-height: 2.25rem;
  font-weight: 200;
  margin-bottom: 0;
  margin-top: 0;
`

export const Headline = styled.h4`
  font-size: 1.44rem;
  font-style: italic;
  line-height: 2rem;
  font-weight: 100;
  margin-bottom: 0;
  margin-top: 0;
`

export const Label = styled.h5`
  font-size: 1.2em;
  font-weight: 500;
  line-height: 1.75rem;
  margin-bottom: 0;
  margin-top: 0;
`

export const Paragraph = styled.p`
  margin-top: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin-bottom: 0;

  + ${Label} {
    margin-top: 1.5rem;
  }
`

export const SmallText = styled.span`
  font-size: 0.8em;
`

interface IText {
  color?: 'primary' | 'neutral' | 'secondary' | 'tertiary'
}

export const Text = styled.span<IText>`
  color: ${({ color, theme }) => {
    return color == 'primary' ? theme.win95.materialText : 'inherit'
  }};
`

export const Code = styled.span`
  padding: 0.33em 1em;
  border-radius: 2px;
  font-size: 1rem;
  line-height: 1.6rem;
  display: block;
  unicode-bidi: embed;
  font-family: monospace;
  white-space: pre-wrap;
  background: ${({ theme }) => theme.win95.headerBackground};
  color: ${({ theme }) => theme.win95.headerText};
`

export const Article = styled.article`
  ${PageTitle} {
    margin-bottom: 0.5em;
  }
  ${Title} {
    margin-bottom: 0.75em;
  }
  ${SubTitle} {
    margin-bottom: 0.75em;
  }
  ${Headline} {
    margin-bottom: 1em;
  }
  ${Label} {
    margin-bottom: 1em;
  }
  ${Paragraph} {
    margin-bottom: 2em;
    + ${Paragraph} {
      margin-top: -1em;
    }
  }
`
