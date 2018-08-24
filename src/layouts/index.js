import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

import Navbar from '../components/Navbar'
import BookPageContainer from '../components/BookPageContainer'
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
    const Content = this.props.location.pathname.match(/^\/books/)
      ? BookPageContainer
      : Fragment
    return (
      <div>
        <Helmet>
          <title>{this.props.data.site.siteMetadata.title}</title>
          <link rel="shortcut icon" href={favicon} type="image/png" />
        </Helmet>
        <ContainerGrid>
          <Navbar />
          <ContentArea>
            <Content>
              <RenderDiv
                render={({hoverBookId, handleHoverBook}) => {
                  return this.props.children({
                    ...this.props,
                    openModal: this.openModal,
                    hoverBookId,
                    handleHoverBook,
                  })
                }}
              />
            </Content>
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
