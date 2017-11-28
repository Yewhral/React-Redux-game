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
                <div className="flex">
                    <Input
                        readOnly="true"
                        value={alcoholAmount}
                    />
                    <div className="separator">
                        :
                    </div>
                    <Input
                        readOnly="true"
                        value={softAmount}
                    />
                </div>
                <div className="flex">
                    <ProportionButton
                        drink={alcohol}
                        onClick={alcoholIncrease}
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