import React from 'react';
import { Helmet } from 'react-helmet';

const TITLE = 'Contact Us'


class Contact extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <div className="container">
          <h1 className="page-title">{ TITLE }</h1>
        </div>
      </div>
    )
  }
}

export default Contact;