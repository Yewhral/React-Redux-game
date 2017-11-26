import React from 'react';
import PropTypes from 'prop-types';
import './guestStats.css'

const GuestStats = ({strong, sweet, crazy, fancy}) => {
    const stats = [
        { label: "strong:", value: strong },
        { label: "sweet:", value: sweet },
        { label: "crazy:", value: crazy },
        { label: "fancy:", value: fancy }
    ];

    const points = (i) => {
        return [...Array(i)].map((e,i) =>
            <div className="point" key={i}></div>
        );
    };

    const list = stats.map((stat) =>
        <li key={stat.label}>
            <div className="label">{stat.label}</div> {points(stat.value)}
        </li>
    );

    return (
        <div className="stat-box">
            <ul>
                {list}
            </ul>
        </div>
    );
};

GuestStats.propTypes = {
    strong: PropTypes.number,
    sweet: PropTypes.number,
    crazy: PropTypes.number,
    fancy: PropTypes.number
};

GuestStats.defaultProps = {
    strong: 0,
    sweet: 0,
    crazy: 0,
    fancy: 0
};

export default GuestStats;