import React from 'react';
import StepButton from '../stepButton/StepButton'
import './stepNavigation.css'

const StepNavigation = ({
    nextOnClick,
    backOnClick,
    canProceed,
    canBack,
}) => {
    return (
        <div className="buttons">
            <div className="back">
                {
                    canBack === true &&
                    <StepButton
                        onClick={backOnClick}
                        buttonText="back"
                    />
                }
            </div>
            <div className="proceed">
                {
                    canProceed === true &&
                    <StepButton
                        onClick={nextOnClick}
                        buttonText="next"
                    />
                }
            </div>
        </div>
   );
};

export default StepNavigation;
