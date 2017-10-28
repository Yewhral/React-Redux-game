import React from 'react';
import {Link} from 'react-router-dom';
import './guestTile.css';

export default function GuestTile({guestPhoto, guestName}) {
    return (
        <Link to="pubmaster">
            <img src={guestPhoto} alt={guestName}/>
        </Link>
    );
};
