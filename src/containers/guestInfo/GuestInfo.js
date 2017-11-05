import React from 'react';
import NavigationLink from '../../components/navigationLink/navigationLink';
import TextBox from '../../components/textBox/TextBox';

import GuestTile from '../../components/guestTile/guestTile';
import asianSmall from '../../images/asianSmall.jpg';

import './guestInfo.css'

class GuestInfo extends React.Component {
    render() {
        return (
            <div className="guestDetails">
                <h2>Who will be your guest?</h2>
                <GuestTile
                    guestPhoto={asianSmall}
                    guestName="Ariel"
                />
                <NavigationLink
                    linkText = 'Choose this guest'
                    destination = 'pubmaster'
                />
                <NavigationLink
                    linkText = 'Go back'
                    destination = 'guests'
                />
            </div>
        );
    }
}

export default GuestInfo;