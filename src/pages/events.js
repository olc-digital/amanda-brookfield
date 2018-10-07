import React from 'react'
import Helmet from 'react-helmet'
import {metaDescriptions} from '../data'

const Events = () => (
  <div>
    <Helmet>
      <meta name="description" content={metaDescriptions.events} />
    </Helmet>
    <div className="booksheading" style={{paddingBottom: '10px'}}>
      Upcoming Events
    </div>
    <table width="100%" border="0" cellSpacing="10" cellPadding="0">
      <tbody>
        <tr>
          <td width="30%" valign="top">
            Thurs 1st November 2018
          </td>
          <td width="70%" valign="top">
            <strong>FOR THE LOVE OF A DOG</strong> PUBLICATION DAY!
          </td>
        </tr>
        <tr>
          <td width="30%" valign="top">
            Wed 7th November 2018
          </td>
          <td width="70%" valign="top">
            {"Cotswold Christmas Fair (Mabel's first public appearance)"}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Events
