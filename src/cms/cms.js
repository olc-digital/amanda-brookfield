import CMS from 'netlify-cms'
import withStyledSheets from './styledSheets'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewTemplate('products', withStyledSheets(ProductPagePreview))
CMS.registerPreviewTemplate('blog', withStyledSheets(BlogPostPreview))
