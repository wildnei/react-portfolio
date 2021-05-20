
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Main from './Pages/Main';

import './App.css'
import './index.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/AboutMe" component={AboutMe} />
                <Route exact path="/main" component={Main} />
              </Switch>
            </Router>
      </React.Fragment>
    );
  }
}

export default App;
