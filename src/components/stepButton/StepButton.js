import React from 'react';
import PropTypes from 'prop-types';
import './stepButton.css';

const StepButton = ({onClick, buttonText}) => {
    return(
        <button
            className="stepButton"
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
};

StepButton.propTypes = {
    buttonText: PropTypes.string
};

StepButton.defaultProps = {
    linkText: ''
};

export default StepButton;