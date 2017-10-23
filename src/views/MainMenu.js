import React from 'react';
import Menu from '../containers/menu/Menu';
import Banner from '../components/banner/Banner';

const MainMenu = () => {
    return (
        <div className="gameWrapper">
            <Banner/>
            <Menu/>
        </div>
    );
};

export default MainMenu;