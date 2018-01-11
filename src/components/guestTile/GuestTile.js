import React from 'react';
import PropTypes from 'prop-types';
import './guestTile.css';

const GuestTile = ({
    guestPhoto,
    guestName,
    onClick
}) => {
    return (
        <div
            className="guestTile"
            onClick={onClick}
        >
            <img
                src={guestPhoto}
                alt={guestName}
            />
            <div className="guestName">
                {guestName}
            </div>
        </div>
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
