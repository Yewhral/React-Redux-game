import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import './App.css';
import mainMenu from './views/mainMenu';
import SimpleTest2 from './containers/SimpleTest2';

class App extends Component {
  render() {
    return (
    <Router>
        <Switch>
        <Route exact={true} path="/" component={mainMenu} />
        <Route exact={true} path="/asd" component={SimpleTest2}/>
        {/* routes will go here */}
        </Switch>
    </Router>
    );
  }
}

export default App;
