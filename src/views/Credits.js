import React from 'react';
import Banner from '../components/banner/Banner';
import CreditsBox from '../containers/creditsBox/CreditsBox'
import {setScrollOnTop} from '../utils/utils';

class Credits extends React.Component {
    componentDidMount() {
        setScrollOnTop();
    }

    render() {
        return (
            <div className="game-wrapper">
                <Banner />
                <CreditsBox />
            </div>
        );
    }
}

export default Credits;