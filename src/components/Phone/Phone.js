import React from 'react';
import PropTypes from 'prop-types';

import './Phone.scss';

Phone.propTypes = {
    number: PropTypes.string.isRequired,
    href: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
};

function Phone(props) {
    return (
        <div className="phone">
            <a className="phone__number" href={`tel:${props.href}`}>{props.number}</a>
            <p className="phone__text">{props.text}</p>
        </div>
    )
}

export default Phone;