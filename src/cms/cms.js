import CMS from 'netlify-cms-app'
import {withLayout, withStyledSheets} from './wrappers'

import ProductPagePreview from './preview-templates/ProductPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ArticlePreview from './preview-templates/ArticlePreview'
import BookPreview from './preview-templates/BookPreview'
import EventsPreview from './preview-templates/EventsPreview'

CMS.registerPreviewTemplate('products', withStyledSheets(ProductPagePreview))
CMS.registerPreviewTemplate('blog', withLayout(BlogPostPreview))
CMS.registerPreviewTemplate('articles', withLayout(ArticlePreview))
CMS.registerPreviewTemplate('books', withLayout(BookPreview))
CMS.registerPreviewTemplate('events', withLayout(EventsPreview))
