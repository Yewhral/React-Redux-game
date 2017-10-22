import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import './styles/App.css';
import mainMenu from './views/mainMenu';
import SimpleTest2 from './containers/SimpleTest2';

class Routes extends Component {
  render() {
    return (
    <Router>
        <Switch>
        <Route exact={true} path="/" component={mainMenu} />
        <Route exact={true} path="/asd" component={SimpleTest2}/>
        </Switch>
    </Router>
    );
  }
}

export default Routes;
