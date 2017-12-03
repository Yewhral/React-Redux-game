import React from 'react';
import ScreenTitle from '../screenTitle/ScreenTitle';
import StepNavigation from '../stepNavigation/StepNavigation'
import './drinks.css'

const Drinks = ({
    drink,
    onClick,
    nextOnClick,
    backOnClick,
    title,
    canProceed,
    canBack,
    selected
}) => {
    const handleClick = (i) => {
        onClick(i);
    };

    const drinks = drink.map((drink) =>
        <div
            className={"bottle" && (selected === drink.name ? 'selected' : 'bottle')}
            key={drink.name}
            onClick={() => {handleClick(drink)}}
        >
            <img
                src={drink.image}
                alt={drink.name}
            />
            <div className="label">
                {drink.name}
            </div>
        </div>
    );

    return (
        <div className="drinksContainer">
            <ScreenTitle title={title} />
            <div className="drinks">
                {drinks}
            </div>
            <StepNavigation
                canBack={canBack}
                canProceed={canProceed}
                nextOnClick={nextOnClick}
                backOnClick={backOnClick}
            />
        </div>
    );
};

export default Drinks;