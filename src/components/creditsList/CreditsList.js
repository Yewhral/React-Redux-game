import React from 'react';
import './creditsList.css'

export default function CreditsList() {
    return (
        <div>
            From <a href="http://www.flaticon.com" title="Flaticon" className="creditsLink">www.flaticon.com</a>
            <ul className="resources">
                <li className="credit">Lime.svg by <a href="http://www.freepik.com" title="Freepik" className="creditsLink">Freepik</a></li>
                <li className="credit">Lemon.svg by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons" className="creditsLink">Smashicons</a></li>
                <li className="credit">Wagasa.svg by <a href="http://www.freepik.com" title="Freepik" className="creditsLink">Freepik</a></li>
                <li className="credit">Olives.svg by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market" className="creditsLink">Vectors Market</a></li>
            </ul>
        </div>
    );
};