import React from 'react';
import GuestTile from '../../components/guestTile/guestTile';
import asianSmall from '../../images/asianSmall.jpg';
import './guestTiles.css'

class GuestTiles extends React.Component {
    render() {
        return (
            <div className="guests-container">
                <GuestTile
                    guestPhoto={asianSmall}
                    guestName="Ariel"
                />
                <GuestTile
                    guestPhoto={asianSmall}
                    guestName="Ariel"
                />
                <GuestTile
                    guestPhoto={asianSmall}
                    guestName="Ariel"
                />
                <GuestTile
                    guestPhoto={asianSmall}
                    guestName="Ariel"
                />
            </div>
        );
    }
}

export default GuestTiles;
