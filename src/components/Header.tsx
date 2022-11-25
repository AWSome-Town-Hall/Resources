import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import Anchor from './Anchor'
import Emoji from './Emoji'
import useGatsbyIcon from '../queries/useGatsbyIcon'
import useTutorialsData from '../queries/useTutorialsData'
import { container } from '../styles'

export default function Header() {
  const icon = useGatsbyIcon()
  const [tutorialsWithDates, tutorialsWithoutDates] = useTutorialsData()
  const count = tutorialsWithDates.length + tutorialsWithoutDates.length

  return (
    <StyledHeader>
      <Inner>
        <Content>
          <Logo
            fluid={icon.childImageSharp.fluid}
            alt="GatsbyJS logo of a white 'G' on a purple circle"
          />

          <Heading>
            Learn <Bold>AWS</Bold> for <Bold>Free<Bold> {` `}
            {count}&nbsp;videos, audios and written tutorials to help you learn{' '}
            <Link href="https://awsome-town-hall.github.io/">AWS</Link>
            {`. `}
          </Heading>
        </Content>
      </Inner>
    </StyledHeader>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const StyledHeader = styled.header`
  background-color: var(--near-white);
  padding-top: var(--s6);
  padding-bottom: var(--s6);
  font-family: var(--bodyFont);
`

const Inner = styled.div`
  ${container}
  padding-top: var(--s2);
  padding-bottom: var(--s2);
`

const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 32rem;
`

const Logo = styled(Image)`
  flex: none;
  box-shadow: var(--shadow);
  border-radius: var(--r100);
  width: var(--s8);
`

const Heading = styled.h1`
  padding-left: var(--s4);
  line-height: var(--lh2);
  font-size: var(--f3);
  font-weight: 400;
`

const Bold = styled.span`
  font-weight: 700;
`

const Link = styled(Anchor)`
  font-weight: 700;
  color: var(--purple);
  transition: color 0.05s ease-in-out;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`
