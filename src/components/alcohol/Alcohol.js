import React from 'react';
import alcohol from '../../data/alcohol';
import './alcohol.css'


const Alcohol = ({onClick}) => {

    const handleClick = (i) => {
        onClick(alcohol[i]["name"]);
    };

    const alcohols = (i) => {

        console.log(i);

        return [...Array(i.length)].map((e,i) =>
            <div
                className="bottle"
                key={i}
                onClick={() => {handleClick(i)}}
            >
                {alcohol[i]["name"]}
            </div>
        );
    };

    return (
        <div className="alcohol">
            {alcohols(alcohol)}
        </div>
    );
};



export default Alcohol;