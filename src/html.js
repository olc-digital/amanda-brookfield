import React from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  render() {
    const [crimsonText400] = JSON.stringify(this.props.headComponents).match(
      /static\/crimson-text-latin-400-.{6,50}\.woff2/,
    )
    if (!crimsonText400) throw 'Couldnt find font to preload'
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="preload"
            href={`${crimsonText400}`}
            as="font"
            type="font/woff2"
            //eslint-disable-next-line
            crossorigin="anonymous"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
