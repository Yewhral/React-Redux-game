import React from 'react';
import ScreenTitle from '../screenTitle/ScreenTitle';
import ProportionButton from '../proportionButton/ProportionButton';
import StepNavigation from '../stepNavigation/StepNavigation'
import Input from '../input/Input';
import './proportions.css';

const Proportions = ({
    soft,
    alcohol,
    alcoholAmount,
    softAmount,
    alcoholIncrease,
    softIncrease,
    nextOnClick,
    backOnClick,
    buttonText,
}) => {
    return (
        <div>
            <div className="proportionsContainer">
                <ScreenTitle title="Select proportions" />
                <div className="proportions">
                    <ProportionButton
                        drink={alcohol}
                        onClick={alcoholIncrease}
                    />
                    <Input
                        className="inputs"
                        readOnly="true"
                        value={alcoholAmount}
                    />
                    <span className="separator">
                        /
                    </span>
                    <Input
                        readOnly="true"
                        value={softAmount}
                    />
                    <ProportionButton
                        drink={soft}
                        onClick={softIncrease}
                    />
                </div>
            </div>
            <StepNavigation
                canBack={true}
                canProceed={true}
                nextOnClick={nextOnClick}
                backOnClick={backOnClick}
                buttonText={buttonText}
            />
        </div>
    );
};

export default Proportions;