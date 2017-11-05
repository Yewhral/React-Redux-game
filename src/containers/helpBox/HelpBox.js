import React from 'react';
import NavigationLink from '../../components/navigationLink/navigationLink';
import TextBox from '../../components/textBox/TextBox';


class HelpBox extends React.Component {
    helpText = 'In this minigame ';

    render() {
        return (
            <div className="credits-container">
                <TextBox
                    title = 'How to play the game'
                    text = {this.helpText}
                />
                <NavigationLink
                    linkText = 'Back to menu'
                    destination = ''
                />
            </div>
        );
    }
}

export default HelpBox;