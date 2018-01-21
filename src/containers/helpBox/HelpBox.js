import React from 'react';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import TextBox from '../../components/textBox/TextBox';

class HelpBox extends React.Component {
    render() {
        const helpText = (
            <div>
                <p>In this minigame you play as a bartender, or even better - a mixologist.</p>
                <p>Invite a guest, check his preferences and mix something truly awesome for him!</p>
                <p>When your guest finishes drinking he will rate what you prepared so be careful!</p>
            </div>
        );
        return (
            <div className="creditsWrapper">
                <div className="leftDecor"></div>
                <main className="creditsContainer">
                    <div className="credits">
                    <TextBox
                        title = 'How to play the game'
                        text = {helpText}
                    />
                    <NavigationLink
                        linkText = 'Back to menu'
                        destination = ''
                    />
                    </div>
                </main>
                <div className="rightDecor"></div>
            </div>
        );
    }
}

export default HelpBox;