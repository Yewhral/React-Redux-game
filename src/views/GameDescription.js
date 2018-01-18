import React from 'react';
import Banner from '../components/banner/Banner';
import HelpBox from '../containers/helpBox/HelpBox'
import {setScrollOnTop} from '../utils/utils';

class GameDescription extends React.Component {
    componentDidMount() {
        setScrollOnTop();
    }

    render() {
        return (
            <div className="gameWrapper">
                <Banner />
                <HelpBox />
            </div>
        );
    };
}

export default GameDescription;