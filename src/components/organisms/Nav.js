import React, {Component} from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import media from '../../styles/mediaQueries'
import Button from '../atoms/Button'

const menuWidth = '220px'
const Menu = styled.nav`
  display: grid;
  grid-auto-rows: min-content;
  padding: 0 24px;
  width: ${menuWidth};
  height: 100vh;
  transform: translateX(0);
  transition: transform 300ms ease-in;
  position: fixed;
  left: -${menuWidth};
  top: 0;
  background: white;
  &.slideIn {
    transform: translateX(100%);
  }
  ${media.abovePhone`
    transform: none !important;
    transition: transform 0ms ease-in;
    position: static;
    height: auto;
    width: auto;
    display: flex;
  `}
`
const MenuItem = styled.div`
  a {
    display: block;
    padding: 24px 0;
    border-bottom: solid #eff1f3 1px;
    font-family: 'Crimson Text';
    font-size: 20px;
    line-height: 0.7;
    letter-spacing: 1px;
    text-decoration: none;
  }
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
  ${media.abovePhone`
    display: none;
  `}
`

class Nav extends Component {
  state = {mobileVisible: true}

  render() {
    const {mobileVisible} = this.state
    return (
      <div>
        <Hamburger onClick={() => this.setState({mobileVisible: true})} />
        <Menu className={mobileVisible ? 'slideIn' : ''}>
          <CloseNavButton onClick={() => this.setState({mobileVisible: false})}>
            X
          </CloseNavButton>
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/books">Books</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/author">Author</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/blog">Blog</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/events">Events</Link>
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export default Nav
