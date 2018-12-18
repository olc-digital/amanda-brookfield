import React, {Component} from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

import Button from '../atoms/Button'
import Img from '../atoms/Img'
import media from '../../styles/mediaQueries'

import close from '../../img/close.svg'
import booksOutline from '../../img/books-outline.png'
import booksColour from '../../img/books-colour.png'
import eventOutline from '../../img/event-outline.png'
import eventColour from '../../img/event-colour.png'
import penOutline from '../../img/pen-outline.png'
import penColour from '../../img/pen-colour.png'
import authorOutline from '../../img/author-outline.png'
import authorColour from '../../img/author-colour.png'
import menuIcon from '../../img/menu-icon.svg'

const menuWidth = '220px'
const shiftDistance = '230px'
const Menu = styled.nav`
  position: fixed;
  top: 0;
  left: -${shiftDistance};
  display: grid;
  grid-auto-rows: min-content;
  width: ${menuWidth};
  height: 100vh;
  padding: 0 24px;
  transform: translateX(0);
  transition: transform 200ms ease-in;
  background: white;
  box-shadow: 2px 0 4px 0 rgba(38, 40, 42, 0.25);
  &.slideIn {
    transform: translateX(${shiftDistance});
  }
  ${media.abovePhone`
    transform: none !important;
    transition: transform 0ms ease-in;
    box-shadow: none;
    position: static;
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
  `}
`
const MenuLink = styled.div`
  a {
    display: block;
    font-family: 'Crimson Text';
    font-size: 20px;
    line-height: 0.7;
    letter-spacing: 1px;
    text-decoration: none;
    color: ${({theme}) => theme.black};
    /* mobile only */
    padding: 24px 0;
    border-bottom: solid ${({theme}) => theme.lightGrey} 1px;
    ${media.abovePhone`
      margin: 0 24px;
      text-align: center;
      border-bottom: 0;
      display: ${({mobileOnly}) => (mobileOnly ? 'none' : 'block')};
      background-image: url('${({outlineImage}) => outlineImage}');
      background-size: contain;
      background-repeat: no-repeat;
      background-position-y: center;
      padding: 0;
      padding-top: 100px;
      width: 75px;
      &:hover {
        background-image: url('${({colourImage}) => colourImage}');
      }
    `}
  }
`

const Hamburger = styled(Button)`
  background-image: url(${menuIcon});
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 24px;
  top: 24px;
  ${media.abovePhone`
    display: none;
  `}
`
const CloseNavButton = styled(Button)`
  width: 16px;
  height: 16px;
  margin: 24px 0 20px;
  padding: 0;
  cursor: pointer;
  ${media.abovePhone`
    display: none;
  `}
`

const BackdropClickTarget = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const NavLinks = [
  {to: '/', text: 'Home', mobileOnly: true},
  {
    to: '/books',
    outlineImage: booksOutline,
    colourImage: booksColour,
    text: 'Books',
  },
  {
    to: '/author',
    outlineImage: authorOutline,
    colourImage: authorColour,
    text: 'Author',
  },
  {
    to: '/blog',
    outlineImage: penOutline,
    colourImage: penColour,
    text: 'Blog',
  },
  {
    to: '/events',
    outlineImage: eventOutline,
    colourImage: eventColour,
    text: 'Events',
  },
]
class Nav extends Component {
  state = {isMobileNavVisible: false}
  hideMobileNav = () => this.setState({isMobileNavVisible: false})
  showMobileNav = () => this.setState({isMobileNavVisible: true})

  render() {
    const {isMobileNavVisible} = this.state
    return (
      <div>
        <Hamburger onClick={this.showMobileNav} />
        {isMobileNavVisible && (
          <BackdropClickTarget onClick={this.hideMobileNav} />
        )}
        <Menu className={isMobileNavVisible ? 'slideIn' : ''}>
          <CloseNavButton onClick={this.hideMobileNav}>
            <Img src={close} />
          </CloseNavButton>
          {NavLinks.map(item => (
            <MenuLink
              key={item.text}
              mobileOnly={item.mobileOnly}
              outlineImage={item.outlineImage}
              colourImage={item.colourImage}
            >
              <Link to={item.to} onClick={this.hideMobileNav}>
                {item.text}
              </Link>
            </MenuLink>
          ))}
        </Menu>
      </div>
    )
  }
}

export default Nav
