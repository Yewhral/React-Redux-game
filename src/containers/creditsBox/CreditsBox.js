import React from 'react';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import TextBox from '../../components/textBox/TextBox';
import CreditsList from '../../components/creditsList/CreditsList';
import './creditsBox.css';

class CreditsBox extends React.Component {
    render() {
        const creditsText = 'This is a mini-game that I created to better understand React combined with Redux. ' +
            'Additionally I am trying mobile-first approach and this happened to be the most challenging part of the project.';
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
                            text = {<CreditsList source='www.flaticon.com'/>}
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