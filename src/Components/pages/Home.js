import React, { Component } from 'react';
import axios from "axios";
import { Helmet } from 'react-helmet';

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

    return (
      <div>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <div className="container">
          <h1>{ TITLE }</h1>
          <div className="react-pic"><img src={imgurl} alt="drupal&react"/></div> 
          <div className="react-title">{this.state.data.title}</div>
          <div className="react-body">{this.state.data.body}</div>
        </div>
      </div>
    );
  }
}

export default Home;
