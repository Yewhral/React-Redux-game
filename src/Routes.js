import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import MainMenu from './views/MainMenu';

class Routes extends Component {
  render() {
    return (
    <Router>
        <Switch>
        <Route exact={true} path="/" component={MainMenu} />
        <Route exact={true} path="/pubmaster" component={MainMenu}/>
        <Route exact={true} path="/guests" component={MainMenu}/>
        <Route exact={true} path="/scoreboard" component={MainMenu}/>
        <Route exact={true} path="/credits" component={MainMenu}/>
        </Switch>
    </Router>
    );
  }
}

export default Routes;
