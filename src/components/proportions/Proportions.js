import React from 'react';
import ScreenTitle from '../screenTitle/ScreenTitle';
import ProportionButton from '../proportionButton/ProportionButton';
import StepNavigation from '../stepNavigation/StepNavigation'
import Input from '../input/Input';

const Proportions = ({
    soft,
    alcohol,
    alcoholAmount2,
    softAmount2,
    buttonText,
    onClick,
}) => {
    const alcoholAmount = 40;
    const softAmount = 50;
    return (
        <div className="proportions">
            <ScreenTitle title="Select proportions" />
            <ProportionButton
                drink={alcohol}
                onClick={onClick}
            />
            <Input
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
                onClick={onClick}
            />
            <StepNavigation
                canBack={true}
                canProceed={true}
                buttonText={buttonText}
            />
        </div>
    );
};

export default Proportions;