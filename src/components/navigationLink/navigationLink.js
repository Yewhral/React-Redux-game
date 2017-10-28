import React from 'react';
import {Link} from 'react-router-dom';
import './navigationLink.css';

export default function NavigationLink({destination, linkText}) {
    return(
            <Link to={`/${destination}`} className="navigationLink">
                <div className="navigationLinkDiv">{linkText}</div>
            </Link>
    );
}