import React from 'react';
import Banner from '../components/banner/Banner';
import CreditsBox from '../containers/creditsbox/CreditsBox'

const Credits = () => {
    return (
        <div className="gameWrapper">
            <Banner/>
            <CreditsBox/>
        </div>
    );
};

export default Credits;