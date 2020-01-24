import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
// import MainContent from './Components/MainContent';
import Footer from './Components/pages/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
