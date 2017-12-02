import React from 'react';
import ScreenTitle from '../screenTitle/ScreenTitle';
import StepNavigation from '../stepNavigation/StepNavigation'
import './syrupSelection.css'

const SyrupSelection = ({
    syrups,
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

    const syrupList = syrups.map((syrup) =>
        <li
            className={"syrup" && (selected === syrup.name ? 'selected' : 'syrup')}
            key={syrup.name}
            onClick={() => {handleClick(syrup.name)}}
        >
            <div className="colorBox" style={{backgroundColor: syrup.color}}>
            </div>
                {syrup.name}
        </li>
    );

    return (
        <div>
            <div className="syrupsContainer">
                <ScreenTitle title={title} />
                <ul className="syrups">
                    {syrupList}
                </ul>
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

export default SyrupSelection;
