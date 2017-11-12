import React from 'react';
import './drinks.css'

const Drinks = ({drink, onClick}) => {
    const handleClick = (i) => {
        onClick(drink[i]);
    };

    const renderDrinks = (i) => {
        return [...Array(i.length)].map((e,i) =>
            <div
                className="bottle"
                key={i}
                onClick={() => {handleClick(i)}}
            >
                <div className="label">
                    {drink[i]["name"]}
                </div>
            </div>
        );
    };

    return (
        <div className="drinks">
            {renderDrinks(drink)}
        </div>
    );
};

export default Drinks;