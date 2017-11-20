import React from 'react';
import PropTypes from 'prop-types';

const GuestTile = ({
    guestPhoto,
    guestName
}) => {
    return (
        <div>
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
