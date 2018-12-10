import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Img from '../components/atoms/Img'
import bannerImage1x from '../img/home-banner.jpg'
import bannerImage2x from '../img/home-banner@2x.jpg'
import bannerImage3x from '../img/home-banner@3x.jpg'

const LongContent = styled.div`
  height: 2000px;
  width: 100px;
  background: deepskyblue;
`
const BannerImage = styled(Img)`
  width: 100%;
  height: auto;
`

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <BannerImage srcSet={[bannerImage1x, bannerImage2x, bannerImage3x]} />
        </div>
        <div>
          Welcome to my official website. There’s lots to to dip into, with
          sneak-peeks at my inspirations as well as information about all my
          fifteen best-sellers, including Alice Alone, Relative Love and Life
          Begins.
        </div>
        <LongContent />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({}),
}
