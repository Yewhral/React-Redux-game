import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import MainMenu from './views/MainMenu';
import Credits from './views/Credits';
import Guests from './views/Guests';

class Routes extends React.Component {
  render() {
    return (
    <Router>
        <Switch>
            <Route exact={true} path="/" component={MainMenu} />
            <Route exact={true} path="/pubmaster" component={Credits}/>
            <Route exact={true} path="/guests" component={Guests}/>
            <Route exact={true} path="/scoreboard" component={Credits}/>
            <Route exact={true} path="/credits" component={Credits}/>
        </Switch>
    </Router>
    );
  }
}

export default Routes;
