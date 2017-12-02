import React from 'react';
import ScreenTitle from '../screenTitle/ScreenTitle';
import NavigationLink from '../navigationLink/NavigationLink';
import "./preview.css";

const Preview = ({

    title,
}) => {
    const alcoStyle = {
        background: "blue"
    };
    const softStyle = {
        background: "blue"
    };
    const syrupStyle = {
        background: "blue"
    };
    return (
        <div className="summaryContainer">
            <ScreenTitle title={title} />
            <div className="glassContainer">
                <div className="glass"></div>
                <div
                    className="liquid alcohol"
                    style={alcoStyle}
                >
                </div>
                <div
                    className="liquid softDrink"
                    style={softStyle}>
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
