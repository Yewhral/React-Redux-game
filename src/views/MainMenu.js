import React from 'react';
import Menu from '../containers/menu/Menu';
import Banner from '../components/banner/Banner';

const MainMenu = () => {
    return (
        <div className="game-wrapper">
            <Banner/>
            <Menu/>
        </div>
    );
};

export default MainMenu;