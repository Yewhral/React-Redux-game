import React from 'react';
import './input.css'

const Input = ({
    value
}) => {
    return (
        <input
            className="input"
            readOnly="true"
            value={value}
            disabled
        />
    );
};

export default Input;