import React from 'react';
import './drinks.css'

const Drinks = ({drink, onClick}) => {
    const handleClick = (i) => {
        onClick(i);
    };

    const drinks = drink.map((drink) =>
        <div
            className="bottle"
            key={drink.name}
            onClick={() => {handleClick(drink.name)}}
        >
            <div className="label">
                {drink.name}
            </div>
        </div>
    );

    return (
        <div className="drinks">
            {drinks}
        </div>
    );
};

export default Drinks;