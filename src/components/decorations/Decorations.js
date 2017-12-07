import React from 'react';
import ScreenTitle from '../screenTitle/ScreenTitle';
import StepNavigation from '../stepNavigation/StepNavigation';
import './decorations.css';

const Decorations = ({
    nextOnClick,
    backOnClick,
    title,
    canProceed,
    canBack,
}) => {
    const decors = ["olive", "straw", "palm", "lemon", "mint", "flame", "cherry", "??"];
    const decorations = decors.map((element) =>(
        <div key={element}>
            <input type="checkbox" id={element} className="checkbox" />
            <label htmlFor={element} className="label"><div className="labelHolder">{element}</div></label>
        </div>
    ));
    return (
        <div className="decorationsContainer">
            <ScreenTitle title={title} />
            <div className="drinks">
                {decorations}
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