import React from 'react';
import PropTypes from 'prop-types';

const GuestStats = ({strong, sweet, crazy, fancy}) => {
    const stats = ["strong", "sweet", "crazy", "fancy"];
    const values = [strong, sweet, crazy, fancy];

    const points = (i) => {
        return [...Array(i)].map((e,i) =>
            <span key={i}>O</span>
        );
    };

    const list = [...Array(stats.length)].map((e,i) =>
        <li key={i}>
            <span>{stats[i]}:</span> {points(values[i])}
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