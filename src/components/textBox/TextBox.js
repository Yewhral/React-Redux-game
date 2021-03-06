import React from 'react';
import PropTypes from 'prop-types';
import './textBox.css';

const TextBox = ({title, text}) => {
    return (
        <section className="textBox">
            <div className="boxTitle">
                {title}
            </div>
            <div>
                {text}
            </div>
         </section>
    );
};

TextBox.propTypes = {
    title: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
};

TextBox.defaultProps = {
    title: '',
    text: ''
};

export default TextBox;