import React from 'react';
import "./textBox.css";

export default function TextBox({title, text}) {
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