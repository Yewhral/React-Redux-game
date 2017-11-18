import React from 'react';
import PropTypes from 'prop-types';
import './navigationButton.css';

const NavigationButton = ({onClick, buttonText}) => {
    return(
        <div
            className="navigationButton"
            onClick={onClick}
        >
            {buttonText}
        </div>
    );
};

NavigationButton.propTypes = {
    buttonText: PropTypes.string
};

NavigationButton.defaultProps = {
    linkText: ''
};

export default NavigationButton;