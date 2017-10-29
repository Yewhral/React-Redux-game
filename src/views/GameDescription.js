import React from 'react';
import Banner from '../components/banner/Banner';
import InfoBox from '../containers/infoBox/InfoBox'

const GameDescription = () => {
    return (
        <div className="game-wrapper">
            <Banner />
            <InfoBox />
        </div>
    );
};

export default GameDescription;