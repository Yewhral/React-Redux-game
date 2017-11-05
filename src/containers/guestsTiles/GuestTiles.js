import React from 'react';
import GuestTile from '../../components/guestTile/guestTile';
import ScreenTitle from '../../components/screenTitle/screenTitle';
import NavigationLink from '../../components/navigationLink/navigationLink';
import asianSmall from '../../images/asianSmall.jpg';
import './guestTiles.css'

class GuestTiles extends React.Component {
    render() {
        return (
            <div className="grid-positioning">
                <ScreenTitle
                    title="Who will be your guest?"
                />
                <div className="guests-container">
                    <GuestTile
                        guestPhoto={asianSmall}
                        guestName="Ariel"
                    />
                    <GuestTile
                        guestPhoto={asianSmall}
                        guestName="Clark"
                    />
                    <GuestTile
                     guestPhoto={asianSmall}
                     guestName="Simon"
                    />
                    <GuestTile
                        guestPhoto={asianSmall}
                        guestName="Lucy"
                    />
                </div>
                <NavigationLink
                    linkText = 'Back to menu'
                    destination = ''
                />
            </div>
        );
    }
}

export default GuestTiles;
