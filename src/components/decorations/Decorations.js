import React from 'react';
import ScreenTitle from '../screenTitle/ScreenTitle';
import StepNavigation from '../stepNavigation/StepNavigation'
import './decorations.scss'

const Decorations = ({
    nextOnClick,
    backOnClick,
    title,
    canProceed,
    canBack,
}) => {
    return (
        <div className="decorationsContainer">
            <ScreenTitle title={title} />
            <div className="drinks">

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

export default Decorations;