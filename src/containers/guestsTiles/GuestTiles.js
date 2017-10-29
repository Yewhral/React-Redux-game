import React from 'react';
import GuestTile from '../../components/guestTile/guestTile';
import asianSmall from '../../images/asianSmall.jpg';
import './guestTiles.css'

class GuestTiles extends React.Component {
    render() {
        return (
            <div className="grid-positioning">
                <h2>Who will be your guest?</h2>
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
            </div>
        );
    }
}

export default GuestTiles;
