import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    theme: PropTypes.string,
    size: PropTypes.string,
};

Button.defaultProps = {
    theme: '',
    size: '',
};

function Button(props) {
    let className = 'button';

    switch (props.theme) {
        case 'green':
            className += ` button_theme_green`;
            break;
    }

    switch (props.size) {
        case 'm':
            className += ` button_size_m`;
            break;
    }

    return (
        <button className={className}
                type={props.type}
                onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}

export default Button;