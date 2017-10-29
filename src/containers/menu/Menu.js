import React from 'react';
import NavigationLink from '../../components/navigationLink/navigationLink';
import './menu.css';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu-container">
                <NavigationLink
                    linkText = 'Start the game'
                    destination = 'help'
                />
                <NavigationLink
                    linkText = 'Scoreboard'
                    destination = 'scoreboard'
                />
                <NavigationLink
                    linkText = 'Credits'
                    destination = 'credits'
                />
            </div>
        );
    }
}

export default Menu;