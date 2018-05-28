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
            <Link to="/books/for-the-love-of-dog" className="hoverfade">
              <img src={ftload} alt="For the Love of a Dog" />
            </Link>
            <Link to="/books/the-love-child" className="hoverfade">
              <img src={tlc} alt="The Love Child" />
            </Link>
            <Link to="/books/before-i-knew-you" className="hoverfade">
              <img src={biky} alt="Before I Knew You" />
            </Link>
            <Link to="/books/life-begins" className="hoverfade">
              <img src={lb} alt="Life Begins" />
            </Link>
            <Link to="/books/the-simple-rules-of-love" className="hoverfade">
              <img src={tsrol} alt="The Simple Rules of Love" />
            </Link>
            <Link to="/books/relative-love" className="hoverfade">
              <img src={rl} alt="Relative Love" />
            </Link>
            <Link to="/books/sisters-and-husbands" className="hoverfade">
              <img src={sah} alt="Sisters and Husbands" />
            </Link>
            <Link to="/books/a-family-man" className="hoverfade">
              <img src={afm} alt="A Family Man" />
            </Link>
            <Link to="/books/the-lover" className="hoverfade">
              <img src={tl} alt="The Lover" />
            </Link>
            <Link to="/books/single-lives" className="hoverfade">
              <img src={sl} alt="Single Lives" />
            </Link>
            <Link to="/books/marriage-games" className="hoverfade">
              <img src={mg} alt="Marriage Games" />
            </Link>
            <Link to="/books/the-godmother" className="hoverfade">
              <img src={tg} alt="The Grandmother" />
            </Link>
            <Link to="/books/a-cast-of-smiles" className="hoverfade">
              <img src={acos} alt="A Cast of Smiles" />
            </Link>
            <Link to="/books/a-summer-affair" className="hoverfade">
              <img src={asa} alt="A Summer Affair" />
            </Link>
            <Link to="/books/walls-of-glass" className="hoverfade">
              <img src={wog} alt="Walls of Glass" />
            </Link>
            <Link to="/books/alice-alone" className="hoverfade">
              <img src={aa} alt="Alice Alone" />
            </Link>
          </div>
        </div>
      </Fragment>
    )
  }
}
