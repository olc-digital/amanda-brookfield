import React from 'react'
import PropTypes from 'prop-types'
import {AnnouncementTemplate} from '../../components/molecules/Announcement'

const ArticlePagePreview = ({entry, widgetFor}) => {
  return (
    <AnnouncementTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      buttonLink={entry.getIn(['data', 'buttonLink'])}
      buttonText={entry.getIn(['data', 'buttonText'])}
      isHidden={entry.getIn(['data', 'isHidden'])} //NB: the prop is not passed this way in the real application
    />
  )
}

ArticlePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArticlePagePreview
