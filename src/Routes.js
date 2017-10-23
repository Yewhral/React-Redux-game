import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import MainMenu from './views/MainMenu';
import Credits from './views/Credits';

class Routes extends Component {
  render() {
    return (
    <Router>
        <Switch>
            <Route exact={true} path="/" component={MainMenu} />
            <Route exact={true} path="/pubmaster" component={Credits}/>
            <Route exact={true} path="/guests" component={Credits}/>
            <Route exact={true} path="/scoreboard" component={Credits}/>
            <Route exact={true} path="/credits" component={Credits}/>
        </Switch>
    </Router>
    );
  }
}

export default Routes;
