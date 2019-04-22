import React, {useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'

import Link from '../atoms/Link'
import Container from '../atoms/Container'
import H2 from '../atoms/H2'
import Img from '../atoms/Img'
import SketchButton from '../atoms/SketchButton'
import media from '../../styles/mediaQueries'

import close from '../../img/close.svg'

const BackDrop = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${({theme}) => theme.orange};
  color: ${({theme}) => theme.white};
  padding: 24px 0;
  box-shadow: 0 -2px 4px 0 rgba(38, 40, 42, 0.25);
`
const Content = styled.div`
  p {
    line-height: 1.5;
  }
  p:last-child {
    margin: 0;
  }
`

const CloseIcon = styled(Img)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  margin-top: -8px;
  margin-right: -8px;
  cursor: pointer;
`
const ResponsiveWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${media.aboveMobile`
    flex-direction: row;
  `}
`

const ButtonWrapper = styled.div`
  flex: 1 0 auto;
  align-self: center;
  margin: 16px 0 0;
  ${media.aboveMobile`
    margin: 0 32px;
  `}
`

const Announcement = () => {
  const [isVisible, setVisible] = useState(true)

  const {
    allMarkdownRemark: {
      edges: {
        [0]: {node: announcement},
      },
    },
  } = useStaticQuery(
    graphql`
      query Announcement {
        allMarkdownRemark(
          limit: 1
          filter: {fileAbsolutePath: {regex: "/(announcement)/"}}
          sort: {order: DESC, fields: [frontmatter___date]}
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                buttonLink
                buttonText
                isEnabled
              }
            }
          }
        }
      }
    `,
  )
  const {
    html,
    frontmatter: {title, buttonLink, buttonText, isEnabled},
  } = announcement

  if (!isEnabled || !isVisible) {
    return null
  }
  return (
    <BackDrop>
      <Container>
        <div css="position: relative;">
          <CloseIcon src={close} onClick={() => setVisible(false)} />
          <ResponsiveWrapper>
            <div>
              <H2 css="margin-bottom: 8px;" center={false}>
                {title}
              </H2>
              <Content dangerouslySetInnerHTML={{__html: html}} />
            </div>
            <ButtonWrapper
              onClick={() => {
                setVisible(false)
              }}
            >
              <SketchButton
                as={Link}
                to={buttonLink}
                styleType="orange"
                uppercase
              >
                {buttonText}
              </SketchButton>
            </ButtonWrapper>
          </ResponsiveWrapper>
        </div>
      </Container>
    </BackDrop>
  )
}

export default Announcement
