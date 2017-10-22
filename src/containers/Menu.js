import React, { Component } from 'react';
import NavigationLink from '../components/navigationLink/navigationLink';

class Menu extends Component {
    render() {
        return (
            <div className="menuContainer">
                <NavigationLink
                    text = 'Start the game'
                />
                <NavigationLink
                    text = 'Scoreboard'
                />
                <NavigationLink
                    text = 'Credits'
                />
            </div>
        );
    }
}

export default Menu;