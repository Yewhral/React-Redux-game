import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './navigationLink.css';

const NavigationLink = ({destination, linkText}) => {
    return(
            <Link to={`/${destination}`} className="navigationLink">
                <div className="navigationLinkDiv">{linkText}</div>
            </Link>
    );
};

NavigationLink.propTypes = {
    destination: PropTypes.string,
    linkText: PropTypes.string
};

NavigationLink.defaultProps = {
    destination: '',
    linkText: ''
};

export default NavigationLink;