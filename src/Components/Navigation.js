import React from 'react';
import { Route, Switch, NavLink, BrowserRouter as Router } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './Error';
import Home from './pages/Home';




class Navigation extends React.Component {
  render() {    
    return (
    <Router>
    <nav className="nav-main">
        <div className="main-navigation">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink exact to="/" className="navbar-brand">Drupal & React</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" activeClassName="active">Contact </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
        </Switch>
    </nav>
    </Router>
    

    )
  }
}

export default Navigation;