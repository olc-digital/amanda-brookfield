import React, {Fragment, Component} from 'react'
import Link from 'gatsby-link'

import Modal from '../../components/Modal'

import ftload from '../../assets/covers/grid/For-the-Love-of-a-Dog.jpg'
import tlc from '../../assets/covers/grid/The-Love-Child.jpg'
import biky from '../../assets/covers/grid/Before-I-Knew-You.jpg'
import lb from '../../assets/covers/grid/Life-Begins.jpg'
import tsrol from '../../assets/covers/grid/The-Simple-Rules-of-Love.jpg'
import rl from '../../assets/covers/grid/Relative-Love.jpg'
import sah from '../../assets/covers/grid/Sisters-and-Husbands.jpg'
import afm from '../../assets/covers/grid/A-Family-Man.jpg'
import tl from '../../assets/covers/grid/The-Lover.jpg'
import sl from '../../assets/covers/grid/Single-Lives.jpg'
import mg from '../../assets/covers/grid/Marriage-Games.jpg'
import tg from '../../assets/covers/grid/The-Grandmother.jpg'
import acos from '../../assets/covers/grid/A-Cast-of-Smiles.jpg'
import asa from '../../assets/covers/grid/A-Summer-Affair.jpg'
import wog from '../../assets/covers/grid/Walls-of-Glass.jpg'
import aa from '../../assets/covers/grid/Alice-Alone.jpg'

export default class BooksPage extends Component {
  state = {
    isModalActive: false,
    bookId: undefined,
  }
  openModal = (e, bookId) => {
    e.preventDefault()
    this.setState({isModalActive: true, bookId})
  }
  closeModal = () => {
    this.setState({isModalActive: false})
  }
  render() {
    return (
      <Fragment>
        <Modal
          isActive={this.state.isModalActive}
          bookId={this.state.bookId}
          closeModal={this.closeModal}
        />
        <div className="bookscontent" style={{width: '680px'}}>
          <div id="grid">
            <a href="books/for-the-love-of-a-dog.html" className="hoverfade">
              <img src={ftload} alt="For the Love of a Dog" />
            </a>
            <a href="books/the-love-child.html" className="hoverfade">
              <img src={tlc} alt="The Love Child" />
            </a>
            <a href="books/before-i-knew-you.html" className="hoverfade">
              <img src={biky} alt="Before I Knew You" />
            </a>
            <a href="books/life-begins.html" className="hoverfade">
              <img src={lb} alt="Life Begins" />
            </a>
            <a href="books/the-simple-rules-of-love.html" className="hoverfade">
              <img src={tsrol} alt="The Simple Rules of Love" />
            </a>
            <a href="books/relative-love.html" className="hoverfade">
              <img src={rl} alt="Relative Love" />
            </a>
            <a href="books/sisters-and-husbands.html" className="hoverfade">
              <img src={sah} alt="Sisters and Husbands" />
            </a>
            <a href="books/a-family-man.html" className="hoverfade">
              <img src={afm} alt="A Family Man" />
            </a>
            <a href="books/the-lover.html" className="hoverfade">
              <img src={tl} alt="The Lover" />
            </a>
            <a href="books/single-lives.html" className="hoverfade">
              <img src={sl} alt="Single Lives" />
            </a>
            <a href="books/marriage-games.html" className="hoverfade">
              <img src={mg} alt="Marriage Games" />
            </a>
            <a href="books/the-godmother.html" className="hoverfade">
              <img src={tg} alt="The Grandmother" />
            </a>
            <a href="books/a-cast-of-smiles.html" className="hoverfade">
              <img src={acos} alt="A Cast of Smiles" />
            </a>
            <a href="books/a-summer-affair.html" className="hoverfade">
              <img src={asa} alt="A Summer Affair" />
            </a>
            <a href="books/walls-of-glass.html" className="hoverfade">
              <img src={wog} alt="Walls of Glass" />
            </a>
            <a href="books/alice-alone.html" className="hoverfade">
              <img src={aa} alt="Alice Alone" />
            </a>
          </div>
        </div>
      </Fragment>
    )
  }
}
