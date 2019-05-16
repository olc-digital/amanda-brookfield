import React, {useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'

import Link from '../atoms/Link'
import Container from '../atoms/Container'
import H2 from '../atoms/H2'
import Img from '../atoms/Img'
import SketchButton from '../atoms/SketchButton'
import media from '../../styles/mediaQueries'
import {HTMLContent} from '../Content'

import close from '../../img/close.svg'

const BackDrop = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${({theme}) => theme.orange};
  color: ${({theme}) => theme.white};
  padding: 0;
  box-shadow: 0 -2px 4px 0 rgba(38, 40, 42, 0.25);
`

const AnnouncementContainer = styled(Container)`
  position: relative;
  padding-top: 24px;
  padding-bottom: 24px;
  /* pseudo element below is just for cms preview  */
  &:after {
    content: 'Announcement hidden';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #333;
    display: none;
    ${({isHidden}) => isHidden && 'display: flex;'}
  }
`
const StyledContent = styled(HTMLContent)`
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

export const AnnouncementTemplate = ({
  hide = () => null,
  title,
  content,
  buttonLink,
  buttonText,
  isHidden = false, //this prop is just for cms
}) => {
  return (
    <BackDrop>
      <AnnouncementContainer isHidden={isHidden}>
        <div css="position: relative;">
          <CloseIcon src={close} onClick={hide} />
          <ResponsiveWrapper>
            <div>
              <H2 css="margin-bottom: 8px;" center={false}>
                {title}
              </H2>
              <StyledContent content={content} />
            </div>
            <ButtonWrapper onClick={hide}>
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
      </AnnouncementContainer>
    </BackDrop>
  )
}

const Announcement = () => {
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

  const announcementString = JSON.stringify(announcement)
  const existingAnnouncement = sessionStorage.getItem('announcement')
  const isNewAnnouncement = announcementString !== existingAnnouncement
  sessionStorage.setItem('announcement', announcementString)

  const [isVisible, setVisible] = useState(isNewAnnouncement)

  if (!isEnabled || !isVisible) {
    return null
  }
  return (
    <AnnouncementTemplate
      hide={() => setVisible(false)}
      title={title}
      content={html}
      buttonLink={buttonLink}
      buttonText={buttonText}
    />
  )
}

export default Announcement
