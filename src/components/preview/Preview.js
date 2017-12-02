import React from 'react';
import ScreenTitle from '../screenTitle/ScreenTitle';
import NavigationLink from '../navigationLink/NavigationLink';
import "./preview.css";

const Preview = ({
    title,
}) => {
    return (
        <div className="summaryContainer">
            <ScreenTitle title={title} />
            <div className="glassContainer">
                <div className="glass"></div>
                <div className="liquid alcohol"></div>
                <div className="liquid softDrink"></div>
                <div className="liquid syrup"></div>
            </div>
            <NavigationLink
                linkText = 'Serve your drink!'
                destination = ''
            />
            <NavigationLink
                linkText = 'Remake into a button'
                destination = ''
            />
        </div>
    );
};

export default Preview;
