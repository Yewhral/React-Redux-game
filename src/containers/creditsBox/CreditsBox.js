import React from 'react';
import NavigationLink from '../../components/navigationLink/navigationLink';

class CreditsBox extends React.Component {
    render() {
        return (
            <div className="credits-container">
                <NavigationLink
                    linkText = 'Back to menu'
                    destination = ''
                />
            </div>
        );
    }
}

export default CreditsBox;