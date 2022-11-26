import React from 'react'
import styled from 'styled-components'

import Anchor from './Anchor'
import { container } from '../styles'

export default function Footer() {
  return (
    <StyledFooter>
      <Inner>
        <Paragraph>
          Missing a tutorial?{' '}
          <Link href="https://github.com/AWSome-Town-Hall/AWSome-Town-Hall.github.io#how-do-i-add-a-tutorial">
            Add it to the directory
          </Link>
          .
        </Paragraph>
        
        <Paragraph>
          Join our  {' '}
          <Link href="https://github.com/AWSome-Town-Hall/AWSome-Town-Hall-Support/issues/new?assignees=&labels=invite+me&template=invitation.md&title=Please+invite+me+to+the+GitHub+Community+Organization">
            GitHub Organization
          </Link>
          .
        </Paragraph>

        <Paragraph>
          Built by{` `}
          <Link href="https://github.com/adilshehzad786">Adil Shehzad</Link>.
        </Paragraph>
      </Inner>
    </StyledFooter>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const StyledFooter = styled.footer`
  background-color: var(--near-white);
  padding-top: var(--s4);
  padding-bottom: var(--s4);
  line-height: var(--lh2);
  font-family: var(--bodyFont);
`

const Inner = styled.div`
  ${container}
`

const Paragraph = styled.p`
  margin-top: var(--s4);
  margin-bottom: var(--s4);
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
