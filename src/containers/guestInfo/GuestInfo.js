import React from 'react';
import NavigationLink from '../../components/navigationLink/navigationLink';
import ScreenTitle from '../../components/screenTitle/screenTitle';
import GuestTile from '../../components/guestTile/guestTile';
import asianSmall from '../../images/asianSmall.jpg';
import './guestInfo.css'

class GuestInfo extends React.Component {
    render() {
        return (
            <div className="guestDetails">
                <ScreenTitle
                    title="Who will be your guest?"
                />
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