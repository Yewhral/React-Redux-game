import React from 'react';
import Menu from '../containers/menu/Menu';
import Banner from '../components/banner/Banner';
import {setScrollOnTop} from '../utils/utils';

class MainMenu extends React.Component {
    componentDidMount() {
        setScrollOnTop();
    }

    render() {
        return (
            <div className="gameWrapper">
                <Banner/>
                <Menu/>
            </div>
        );
    };
}

export default MainMenu;