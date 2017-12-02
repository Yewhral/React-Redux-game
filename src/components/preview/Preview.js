import React from 'react';
import ScreenTitle from '../screenTitle/ScreenTitle';
import NavigationLink from '../navigationLink/NavigationLink';
import "./preview.css";

const Preview = ({
    title,
    alcoholAmount,
    alcoholColor,
    softAmount,
    softColor,
    syrupColor,
}) => {
    const percentageAlcoholAmount = alcoholAmount/100;
    const percentageSoftAmount = softAmount/100;
    const alcoholStyle = {
        backgroundColor: alcoholColor,
        opacity: percentageAlcoholAmount,
    };
    const softStyle = {
        backgroundColor: softColor,
        opacity: percentageSoftAmount,
    };
    const syrupStyle = {
        backgroundColor: syrupColor
    };
    return (
        <div className="summaryContainer">
            <ScreenTitle title={title} />
            <div className="glassContainer">
                <div className="glass"></div>
                <div
                    className="liquid alcohol"
                    style={alcoholStyle}
                >
                </div>
                <div
                    className="liquid softDrink"
                    style={softStyle}
                >
                </div>
                <div
                    className="liquid syrup"
                    style={syrupStyle}
                >
                </div>
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
