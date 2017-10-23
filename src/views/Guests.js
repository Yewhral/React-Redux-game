import React from 'react';
import GuestTiles from '../containers/guestsTiles/GuestTiles';
import Banner from '../components/banner/Banner';

const Guests = () => {
    return (
        <div className="game-wrapper">
            <Banner/>
            <GuestTiles/>
        </div>
    );
};

export default Guests;