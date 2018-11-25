import React, {Component} from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const SlideOutMenu = styled.nav`
  width: 220px;
  height: 100vh;
  transform: translateX(-220px);
  transition: transform 300ms ease-in;
  position: fixed;
  left: 0;
  top: 0;
  background: white;
  &.slideIn {
    transform: translateX(0);
  }
  &.slideOut {
    transform: translateX(-220px);
  }
`
const Hamburger = styled.div`
  background: red;
  width: 20px;
  height: 20px;
`

const MenuItem = styled.div``

class MobileNavbar extends Component {
  state = {visible: false}

  render() {
    return (
      <div>
        <Hamburger onClick={() => this.setState({visible: true})} />
        <SlideOutMenu className={this.state.visible ? 'slideIn' : 'slideOut'}>
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
          <div onClick={() => this.setState({visible: false})}>CLOSE</div>
        </SlideOutMenu>
      </div>
    )
  }
}

export default MobileNavbar
