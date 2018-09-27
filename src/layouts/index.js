import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

import Navbar from '../components/Navbar'
import BookPageLayout from '../components/BookPageLayout'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import './style.css'
import favicon from '../assets/favicon.png'
import RenderDiv from '../components/RenderDiv'

const ContainerGrid = styled('div')`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-rows: auto 1fr auto;
  width: 900px;
  padding: 0 20px;
  margin: 0 auto;
  min-height: 100vh;
`

const ContentArea = styled('div')`
  grid-area: content;
`

export default class MainLayout extends Component {
  state = {
    isModalActive: false,
    modalBookId: undefined,
  }
  openModal = (e, modalBookId) => {
    e.preventDefault()
    this.setState({isModalActive: true, modalBookId})
  }
  closeModal = () => {
    this.setState({isModalActive: false})
  }

  render() {
    const ContentLayout = this.props.location.pathname.match(/^\/books/)
      ? BookPageLayout
      : RenderDiv
    return (
      <div>
        <Helmet>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <title>{this.props.data.site.siteMetadata.title}</title>
          <link rel="shortcut icon" href={favicon} type="image/png" />
        </Helmet>
        <ContainerGrid>
          <Navbar />
          <ContentArea>
            <ContentLayout
              render={({hoverBookId, handleHoverBook}) => {
                return this.props.children({
                  ...this.props,
                  openModal: this.openModal,
                  hoverBookId,
                  handleHoverBook,
                })
              }}
            />
          </ContentArea>
          <Footer />
        </ContainerGrid>
        <Modal
          isActive={this.state.isModalActive}
          bookId={this.state.modalBookId}
          closeModal={this.closeModal}
        />
      </div>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.func,
}

export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
