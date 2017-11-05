import React from 'react';
import GuestInfo from '../containers/guestInfo/GuestInfo';
import Banner from '../components/banner/Banner';
import {setScrollOnTop} from '../utils/utils';

class GuestDetails extends React.Component {
    componentDidMount() {
        setScrollOnTop();
    }

    render() {
        return (
            <div className="game-wrapper">
                <Banner/>
                <GuestInfo/>
            </div>
        );
    };
}

export default GuestDetails;