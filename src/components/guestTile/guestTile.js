import React from 'react';
import {Link} from 'react-router-dom';
import './guestTile.css';

export default function GuestTile(props) {
    return (
        <Link to="pubmaster">
            <img src={props.guestPhoto} alt={props.guestName}/>
        </Link>
    );
};
