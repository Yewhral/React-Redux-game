import React from 'react';
import ScreenTitle from '../screenTitle/ScreenTitle';
import StepButton from '../stepButton/StepButton'
import './syrupSelection.css'

const SyrupSelection = ({
    syrups,
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
        <div className="syrupsContainer">
            <ScreenTitle title={title} />
            <ul className="syrups">
                {syrupList}
            </ul>
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

export default SyrupSelection;
