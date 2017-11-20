import React from 'react';
import ScreenTitle from '../screenTitle/ScreenTitle';
import Input from '../input/Input';

const Proportions = ({
    softDrink,
    alcohol,
    alcoholAmount2,
    onClick,
}) => {
    const alcoholAmount = 40;
    return (
        <div className="proportions">
            <ScreenTitle title="Select proportions" />
            <button
                onClick={onClick}
            > More {alcohol}
            </button>
            <Input readOnly="true" value={alcoholAmount}/>
            <span>/</span>
            <input readOnly="true" value={100-alcoholAmount} />
            <button
                onClick={onClick}
            > More {softDrink}
            </button>
        </div>
    );
};

export default Proportions;