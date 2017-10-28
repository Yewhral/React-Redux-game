import React from 'react';
import NavigationLink from '../../components/navigationLink/navigationLink';
import TextBox from '../../components/textBox/TextBox';
import "./creditsBox.css";

class CreditsBox extends React.Component {
    creditsText = 'This is a mini-game that I created to better understand React combined with Redux. ' +
        'Additionally I am trying mobile-first approach and this happened to be the most challenging part of the project.';

    render() {
        return (
            <div className="credits-container">
                <TextBox
                    title = 'About the game'
                    text = {this.creditsText}
                />
                <NavigationLink
                    linkText = 'Back to menu'
                    destination = ''
                />
            </div>
        );
    }
}

export default CreditsBox;