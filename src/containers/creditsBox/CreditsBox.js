import React from 'react';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import TextBox from '../../components/textBox/TextBox';
import CreditsList from '../../components/creditsList/CreditsList';
import './creditsBox.css';

class CreditsBox extends React.Component {
    render() {
        const creditsText = (
            <div>
                <p>This is a mini-game that I created to better understand React combined with Redux.</p>
                <p>Additionally I am trying mobile-first approach and this happened to be the most challenging part of the project.</p>
                <p>For simple unit testing I picked Jest.</p>
            </div>
        );
        return (
            <div className="creditsWrapper">
                <div className="leftDecor"></div>
                <main className="creditsContainer">
                    <div className="credits">
                        <TextBox
                            title = 'About the game'
                            text = {creditsText}
                        />
                        <TextBox
                            title = 'Resources'
                            text = {<CreditsList />}
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

export default CreditsBox;