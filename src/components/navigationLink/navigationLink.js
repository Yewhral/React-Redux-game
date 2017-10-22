import React from 'react';
import './navigationLink.css';

export default function NavigationLink(props) {
    return(
        <div className="navigationLink">
            <a href={props.destination}>
                {props.text}
            </a>
        </div>
    );
}