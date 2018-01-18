import React from 'react';
import PropTypes from 'prop-types';
import "./textBox.css";

const TextBox = ({title, text}) => {
    return (
        <div className="textBox">
            <div className="boxTitle">
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