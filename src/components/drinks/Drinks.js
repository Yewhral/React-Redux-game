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
    buttonText,
    selected
}) => {
    const handleClick = (i) => {
        onClick(i);
    };

    const drinks = drink.map((drink) =>
        <div
            className={"bottle" && (selected === drink.name ? 'selected' : 'bottle')}
            key={drink.name}
            onClick={() => {handleClick(drink.name)}}
        >
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
            <div className="buttons">
                <div className="back">
                    {
                        canBack === true &&
                        <StepButton
                            buttonText="back"
                        />
                    }
                </div>
                <div className="proceed">
                    {
                        canProceed === true &&
                        <StepButton
                            buttonText={buttonText}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default Drinks;