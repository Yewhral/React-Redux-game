import React from 'react';
import './creditsList.css'

const CreditsList = ({
    source
}) => {
    const link = `http://${source}`;
    return (
        <div>
            From <a href={link} title="Flaticon" className="creditsLink">{source}</a>
            <ul className="resources">
                <li className="credit">Lime.svg by <a href="http://www.freepik.com" title="Freepik" className="creditsLink">Freepik</a></li>
                <li className="credit">Lemon.svg by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons" className="creditsLink">Smashicons</a></li>
                <li className="credit">Wagasa.svg by <a href="http://www.freepik.com" title="Freepik" className="creditsLink">Freepik</a></li>
                <li className="credit">Olives.svg by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market" className="creditsLink">Vectors Market</a></li>
            </ul>
        </div>
    );
};

export default CreditsList;
