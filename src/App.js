import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    fetch('https://widespreadtopic.com/resfulapi/v1/resume?_format = json')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }

  render() {
    return (
       <div className="container">
        <div className="col-xs-12">
        <h1>My Todos</h1>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Example Todo</h5>
              <h6 className="card-subtitle mb-2 text-muted">Completed</h6>
            </div>
          </div>
        </div>
       </div>
    );
  }
}

export default App;
