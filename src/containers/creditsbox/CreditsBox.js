import React, { Component } from 'react';
import NavigationLink from '../../components/navigationLink/navigationLink';

class CreditsBox extends Component {
    render() {
        return (
            <div className="credits-container">
                <NavigationLink
                    text = 'Back to menu'
                    destination = ''
                />
            </div>
        );
    }
}

export default CreditsBox;