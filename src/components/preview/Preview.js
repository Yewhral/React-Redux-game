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
            <div className="glass">
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
