import React from 'react'
import Link from 'gatsby-link'

import inspiration from '../../assets/inspiration.jpg'
import biography from '../../assets/biography.jpg'

const Author = () => (
  <table width="100%" border="0" cellSpacing="6" cellPadding="0">
    <tbody>
      <tr>
        <td width="388" align="center">
          <Link className="authhoverfade" to="/author/inspiration">
            <img
              src={inspiration}
              alt="Amanda Brookfield Inspiration"
              width="350"
              height="242"
              border="0"
            />
          </Link>
        </td>
        <td width="388" align="center">
          <Link className="authhoverfade" to="/author/biography">
            <img
              src={biography}
              alt="Amanda Brookfield Biography"
              width="350"
              height="241"
              border="0"
            />
          </Link>
        </td>
      </tr>
      <tr>
        <td align="center">
          <a
            href="inspiration.html"
            className="generalheading authhoverfadetext"
          >
            Inspiration
          </a>
        </td>
        <td align="center">
          <a href="biography.html" className="generalheading authhoverfadetext">
            Biography
          </a>
        </td>
      </tr>
    </tbody>
  </table>
)

export default Author
