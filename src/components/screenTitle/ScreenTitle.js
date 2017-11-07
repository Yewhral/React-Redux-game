import React from 'react';
import PropTypes from 'prop-types';
import "./screenTitle.css";

const ScreenTitle = ({title}) => {
    return (
        <h2>
            {title}
        </h2>
    );
};

ScreenTitle.propTypes = {
    title: PropTypes.string
};

ScreenTitle.defaultProps = {
    title: ''
};

export default ScreenTitle;