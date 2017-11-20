import React from 'react';
import PropTypes from 'prop-types';
import './proportionButton.css';

const ProportionButton = ({
    drink,
    onClick,
}) => {
    return(
        <div className="buttonContainer">
            <label className="label">{drink}</label>
        <button
            className="proportionButton"
            onClick={onClick}
        >
            More!
        </button>
        </div>
    );
};

ProportionButton.propTypes = {
    onClick: PropTypes.func,
};

ProportionButton.defaultProps = {
    onClick: {}
};

export default ProportionButton;