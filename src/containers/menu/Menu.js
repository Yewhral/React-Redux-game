import React from 'react';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import Ariel from '../../images/Ariel.jpg';
import Lucy from '../../images/Lucy.jpg';
import Clark from '../../images/Clark.jpg';
import Simon from '../../images/Simon.jpg';
import './menu.css';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu-container">
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
                <div className="temporaryPreloading">
                    <img src={Ariel} alt="Ariel" />
                    <img src={Lucy} alt="Lucy" />
                    <img src={Clark} alt="Clark" />
                    <img src={Simon} alt="Simon" />
                </div>
            </div>
        );
    }
}

export default Menu;