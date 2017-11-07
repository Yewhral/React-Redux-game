import React from 'react';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import TextBox from '../../components/textBox/TextBox';


class HelpBox extends React.Component {
    helpText = 'In this minigame you play as a bartender, or even better - a mixologist. '+
        'Invite a guest, check his preferences and mix something truly awesome for him! ' +
        'When your guest finishes drinking he will rate what you prepared so be careful! ';

    render() {
        return (
            <div className="credits-container">
                <div className="credits">
                <TextBox
                    title = 'How to play the game'
                    text = {this.helpText}
                />
                <NavigationLink
                    linkText = 'Back to menu'
                    destination = ''
                />
                </div>
            </div>
        );
    }
}

export default HelpBox;