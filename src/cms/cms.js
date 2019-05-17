import CMS from 'netlify-cms-app'
import {withLayout, withStyledSheets} from './wrappers'
import fontAwesomeCSS from '@fortawesome/fontawesome-svg-core/styles.css'

import HomePreview from './preview-templates/HomePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ArticlePreview from './preview-templates/ArticlePreview'
import BookPreview from './preview-templates/BookPreview'
import EventsPreview from './preview-templates/EventsPreview'
import AnnouncementPreview from './preview-templates/AnnouncementPreview'

CMS.registerPreviewStyle(fontAwesomeCSS)

CMS.registerPreviewTemplate('home', withLayout(HomePreview))
CMS.registerPreviewTemplate('blog', withLayout(BlogPostPreview))
CMS.registerPreviewTemplate('articles', withLayout(ArticlePreview))
CMS.registerPreviewTemplate('short-stories', withLayout(ArticlePreview))
CMS.registerPreviewTemplate('books', withLayout(BookPreview))
CMS.registerPreviewTemplate('events', withLayout(EventsPreview))
CMS.registerPreviewTemplate(
  'announcement',
  withStyledSheets(AnnouncementPreview),
)
