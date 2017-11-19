import React from 'react';
import StepButton from '../stepButton/StepButton'
import './stepNavigation.css'

const StepNavigation = ({
    canProceed,
    canBack,
    buttonText,
}) => {
    return (
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
   );
};

export default StepNavigation;
