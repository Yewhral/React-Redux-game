import React from 'react';
import ScreenTitle from '../screenTitle/ScreenTitle';
import StepNavigation from '../stepNavigation/StepNavigation';
import './decorations.css';

const Decorations = ({
    onClick,
    decorationsCheck,
    decors,
    nextOnClick,
    backOnClick,
    title,
    canProceed,
    canBack,
}) => {
    const decorations = decors.map((element, index) =>(
        <div key={element}>
            <input type="checkbox" id={element} className="checkbox" defaultChecked={decorationsCheck[index]} />
            <label htmlFor={element} className="label" onClick={() => {onClick(index)}}>
                <div className="labelHolder">
                    <div className="icon"></div>
                    <div className="labelText">{element}</div>
                </div>
            </label>
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