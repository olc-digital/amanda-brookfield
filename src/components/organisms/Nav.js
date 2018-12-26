import React, {Component} from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

import Button from '../atoms/Button'
import Img from '../atoms/Img'
import Sketch from '../atoms/Sketch'
import media from '../../styles/mediaQueries'
import H2 from '../atoms/H2'

import close from '../../img/close.svg'
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

const NavLink = styled(Link)`
  text-decoration: none;
  ${media.abovePhone`
    display: ${({mobileonly}) => (mobileonly ? 'none' : 'block')};
  `}
`

const NavLinkText = styled(H2)`
  /* mobile only */
  padding: 24px 0 20px;
  border-bottom: solid ${({theme}) => theme.lightGrey} 1px;
  ${media.abovePhone`
    /* reset mobile styles */
    padding: 0;
    border-bottom: 0;
    /* own styles */
    text-align: center;
  `}
`

const NavSketch = styled(Sketch)`
  display: none;
  ${media.abovePhone`
    display: block;
  `}
`

const NavLinks = [
  {to: '/', text: 'Home', name: 'books', mobileOnly: true},
  {to: '/books', name: 'books', text: 'Books'},
  {to: '/author', name: 'author', text: 'Author'},
  {to: '/blog', name: 'blog', text: 'Blog'},
  {to: '/events', name: 'events', text: 'Events'},
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
            <NavLink
              key={item.text}
              to={item.to}
              mobileonly={item.mobileOnly}
              onClick={this.hideMobileNav}
            >
              <NavSketch type={item.name} hoverComponent={NavLink} />
              <NavLinkText>{item.text}</NavLinkText>
            </NavLink>
          ))}
        </Menu>
      </div>
    )
  }
}

export default Nav
