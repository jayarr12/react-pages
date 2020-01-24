import React, { Component } from 'react';
import axios from "axios";
import { Helmet } from 'react-helmet';
import { Redirect, BrowserRouter } from "react-router-dom";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const TITLE = 'Drupal & React'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      load: true, 
      data: []
    };
  }

  componentDidMount() {
    axios.get(`https://widespreadtopic.com/resfulapi/v1/resume`, {
      headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(res => {
      const resume = res.data[0];
     this.setState({ data: resume});
    });
  }


  render() {
    console.log(this.state.data);
    const imgurl = "https://widespreadtopic.com/" + this.state.data.field_res_image;
    const body = this.state.data.body;

    return (
      <div>
        <BrowserRouter>
        <Redirect to="/" />
        </BrowserRouter>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <div className="container">
          <div id="main-wrapper" className="layout-main-wrapper clearfix">
            {/* <h1 className="page-title">{ TITLE }</h1> */}
            <div className="react-pic"><img src={imgurl} alt="drupal&react"/></div> 
            <h2 className="react-title">{this.state.data.title}</h2>
            <div className="react-body">{ ReactHtmlParser(body) }</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
