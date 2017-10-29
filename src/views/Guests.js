import React from 'react';
import GuestTiles from '../containers/guestsTiles/GuestTiles';
import Banner from '../components/banner/Banner';
import {setScrollOnTop} from '../utils/utils';

class Guests extends React.Component {
    componentDidMount() {
        setScrollOnTop();
    }

    render() {
        return (
            <div className="game-wrapper">
                <Banner/>
                <GuestTiles/>
            </div>
        );
    };
}

export default Guests;