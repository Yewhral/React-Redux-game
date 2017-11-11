import React from 'react';
import DrinkMixing from '../containers/drinkMixing/DrinkMixing';
import Banner from '../components/banner/Banner';
import {setScrollOnTop} from '../utils/utils';

class DrinkPreparation extends React.Component {
    componentDidMount() {
        setScrollOnTop();
    }

    render() {
        return (
            <div className="game-wrapper">
                <Banner/>
                <DrinkMixing/>
            </div>
        );
    };
}

export default DrinkPreparation;