import React from 'react';

const Input = ({
    value
}) => {
    return (
        <input
            readOnly="true"
            value={value}
        />
    );
};

export default Input;