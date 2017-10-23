import React, { Component } from 'react';
import NavigationLink from '../components/navigationLink/navigationLink';
import './menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="menu-container">
                <NavigationLink
                    text = 'Start the game'
                    destination = 'guests'
                />
                <NavigationLink
                    text = 'Scoreboard'
                    destination = 'scoreboard'
                />
                <NavigationLink
                    text = 'Credits'
                    destination = 'credits'
                />
            </div>
        );
    }
}

export default Menu;