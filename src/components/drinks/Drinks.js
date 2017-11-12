import React from 'react';
import './drinks.css'

const Drinks = ({drink, onClick}) => {
    const handleClick = (i) => {
        onClick(drink[i]["name"]);
        onClick(drink[i]["power"]);
    };

    const renderDrinks = (i) => {
        return [...Array(i.length)].map((e,i) =>
            <div
                className="bottle"
                key={i}
                onClick={() => {handleClick(i)}}
            >
                {drink[i]["name"]}
            </div>
        );
    };

    return (
        <div className="alcohol">
            {renderDrinks(drink)}
        </div>
    );
};

export default Drinks;