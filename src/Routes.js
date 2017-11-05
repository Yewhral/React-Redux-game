import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import MainMenu from './views/MainMenu';
import GameDescription from './views/GameDescription';
import Credits from './views/Credits';
import Guests from './views/Guests';
import GuestDetails from './views/GuestDetails';

class Routes extends React.Component {
  render() {
    return (
    <Router>
        <Switch>
            <Route exact={true} path="/" component={MainMenu} />
            <Route exact={true} path="/help" component={GameDescription} />
            <Route exact={true} path="/pubmaster" component={Credits}/>
            <Route exact={true} path="/guests" component={Guests}/>
            <Route exact={true} path="/guestDetails" component={GuestDetails}/>
            <Route exact={true} path="/scoreboard" component={Credits}/>
            <Route exact={true} path="/credits" component={Credits}/>
        </Switch>
    </Router>
    );
  }
}

export default Routes;
