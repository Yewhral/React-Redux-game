import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './guestTile.css';

const GuestTile = ({
    guestPhoto,
    guestName,
    onClick
}) => {
    return (
        <Link
            onClick={onClick}
            to="guestDetails"
        >
            <img
                src={guestPhoto}
                alt={guestName}/>
            <div className="guestName">
                {guestName}
            </div>
        </Link>
    );
};

GuestTile.propTypes = {
    guestPhoto: PropTypes.string,
    guestName: PropTypes.string
};

GuestTile.defaultProps = {
    guestPhoto: '',
    guestName: ''
};

export default GuestTile;
