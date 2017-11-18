import React from 'react';
import ScreenTitle from '../screenTitle/ScreenTitle';
import StepButton from '../stepButton/StepButton'
import './drinks.css'

const Drinks = ({
    drink,
    onClick,
    title,
    canProceed,
    canBack,
    buttonText
}) => {
    const handleClick = (i) => {
        onClick(i);
    };

    const drinks = drink.map((drink) =>
        <div
            className="bottle"
            key={drink.name}
            onClick={() => {handleClick(drink.name)}}
        >
            <div className="label">
                {drink.name}
            </div>
        </div>
    );

    return (
        <div>
            <ScreenTitle title={title} />
            <div className="drinks">
                {drinks}
            </div>
            {
                canBack === true &&
                <StepButton
                    buttonText="back"
                />
            }
            {
                canProceed === true &&
                <StepButton
                    buttonText={buttonText}
                />
            }
        </div>
    );
};

export default Drinks;