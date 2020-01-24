import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

const TITLE = 'About'


class About extends Component {


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
    );
  }
}

export default About;
