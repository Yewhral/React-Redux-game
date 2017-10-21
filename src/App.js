import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import './App.css';
import SimpleTest from './containers/SimpleTest.js';
import SimpleTest2 from './containers/SimpleTest2.js';

class App extends Component {
  render() {
    return (
    <Router>
        <Switch>
        <Route exact={true} path="/" component={SimpleTest} />
        <Route exact={true} path="/asd" component={SimpleTest2}/>
        {/* routes will go here */}
        </Switch>
    </Router>
    );
  }
}

export default App;
