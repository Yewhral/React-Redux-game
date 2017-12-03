import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Credits from './views/Credits';
import DrinkPreparation from './views/DrinkPreparation';
import GameDescription from './views/GameDescription';
import Guests from './views/Guests';
import MainMenu from './views/MainMenu';

class Routes extends React.Component {
  render() {
    return (
    <Router>
        <Switch>
            <Route exact={true} path="/" component={MainMenu} />
            <Route exact={true} path="/help" component={GameDescription} />
            <Route exact={true} path="/pubmaster" component={DrinkPreparation}/>
            <Route exact={true} path="/results" component={DrinkPreparation}/>
            <Route exact={true} path="/guests" component={Guests}/>
            <Route exact={true} path="/credits" component={Credits}/>
        </Switch>
    </Router>
    );
  }
}

export default Routes;
