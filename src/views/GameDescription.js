import React from 'react';
import Banner from '../components/banner/Banner';
import HelpBox from '../containers/helpBox/HelpBox'

const GameDescription = () => {
    return (
        <div className="game-wrapper">
            <Banner />
            <HelpBox />
        </div>
    );
};

export default GameDescription;