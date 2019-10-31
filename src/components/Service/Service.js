import React from 'react';
import PropTypes from 'prop-types';

import './Service.scss';

Service.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

function Service(props) {
    return (
        <div className="service">
           <img className="service__icon" src={props.img} alt={props.title} />
           <div className="service__description">
               <span className="service__title">{props.title}</span>
               <p className="service__text">{props.text}</p>
           </div>
        </div>
    )
}

export default Service;