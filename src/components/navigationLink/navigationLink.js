import React from 'react';
import {Link} from 'react-router-dom';
import './navigationLink.css';

export default function NavigationLink(props) {
    return(
            <Link to={`/${props.destination}`} className="navigationLink">
                <div className="navigationLinkDiv">{props.text}</div>
            </Link>
    );
}