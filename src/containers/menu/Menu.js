import React from 'react';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import './menu.css';

class Menu extends React.Component {
    render() {
        return (
            <div className="menuWrapper">
                <div className="leftDecor"></div>
                <div className="menuContainer">
                    <NavigationLink
                        linkText = 'Start the game'
                        destination = 'guests'
                    />
                    <NavigationLink
                        linkText = 'How to play'
                        destination = 'help'
                    />
                    <NavigationLink
                        linkText = 'Credits'
                        destination = 'credits'
                    />
                </div>
                <div className="rightDecor"></div>
            </div>
        );
    }
}

export default Menu;