import React from 'react';

import LogoIcon from "~/static/img/logo.svg";

import './Logo.scss';

function Logo() {
    return (
        <div className="logo">
            <a className="logo__link" href="/">
                <LogoIcon className="logo__icon" alt={'Elama'} />
            </a>
        </div>
    )
}

export default Logo;