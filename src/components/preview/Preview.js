import React from 'react';
import ScreenTitle from '../screenTitle/ScreenTitle';
import NavigationLink from '../navigationLink/NavigationLink';
import StepButton from '../stepButton/StepButton';
import "./preview.css";

const Preview = ({
    title,
    alcoholAmount,
    alcoholColor,
    softAmount,
    softColor,
    syrupColor,
    backOnClick,
}) => {
    const percentageAlcoholAmount = alcoholAmount / 100;
    const percentageSoftAmount = softAmount / 100;
    const syrupGradient = `linear-gradient(0deg, ${syrupColor} 50%, transparent)`;
    const alcoholStyle = {
        backgroundColor: alcoholColor,
        opacity: percentageAlcoholAmount,
    };
    const softStyle = {
        backgroundColor: softColor,
        opacity: percentageSoftAmount,
    };
    const syrupStyle = {
        backgroundImage: syrupGradient,
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
                destination = 'results'
            />
            <StepButton
                onClick={backOnClick}
                buttonText="Back"
            />
        </div>
    );
};

export default Preview;
