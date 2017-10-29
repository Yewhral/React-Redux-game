import React from 'react';
import PropTypes from 'prop-types';
import "./textBox.css";

const TextBox = ({title, text}) => {
    return (
        <div className="text-box">
            <div className="box-title">
                {title}
            </div>
            <div>
                {text}
            </div>
         </div>
    );
};

TextBox.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
};

TextBox.defaultProps = {
    title: '',
    text: ''
};

export default TextBox;