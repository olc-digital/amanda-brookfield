import React, {Component} from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import media from '../../styles/mediaQueries'
import Button from '../atoms/Button'
import Img from '../atoms/Img'
import close from '../../img/close.svg'
import booksOutline from '../../img/books-outline.png'

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
  transition: transform 300ms ease-in;
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
const MenuLink = styled(Link)`
  display: block;
  padding: 24px 0;
  margin: 0 24px;
  border-bottom: solid ${({theme}) => theme.lightGrey} 1px;
  font-family: 'Crimson Text';
  font-size: 20px;
  line-height: 0.7;
  letter-spacing: 1px;
  text-decoration: none;
  color: ${({theme}) => theme.black};
  ${media.abovePhone`
    text-align: center;
    border-bottom: 0;
  `}
`

const NavImage = styled.div`
  display: none;
  ${media.abovePhone`
    background: url('${({url}) => url}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: center;
    height: 91px;
    width: 75px;
    display: block;
  `}
`
const Hamburger = styled(Button)`
  background: red;
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

class Nav extends Component {
  state = {mobileVisible: false}

  render() {
    const {mobileVisible} = this.state
    return (
      <div>
        <Hamburger onClick={() => this.setState({mobileVisible: true})} />
        <Menu className={mobileVisible ? 'slideIn' : ''}>
          <CloseNavButton onClick={() => this.setState({mobileVisible: false})}>
            <Img src={close} />
          </CloseNavButton>
          <MenuLink to="/">
            <NavImage url={booksOutline} />
            Home
          </MenuLink>
          <MenuLink to="/books">Books</MenuLink>
          <MenuLink to="/author">Author</MenuLink>
          <MenuLink to="/blog">Blog</MenuLink>
          <MenuLink to="/events">Events</MenuLink>
        </Menu>
      </div>
    )
  }
}

export default Nav
