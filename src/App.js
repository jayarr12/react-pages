import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import MainContent from './Components/MainContent';

class App extends Component {


  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
        <MainContent />
      </div>
    );
  }
}

export default App;
