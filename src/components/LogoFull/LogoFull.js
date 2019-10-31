import React from 'react';

import LogoFullIcon from "~/static/img/logo-full.svg";

import './LogoFull.scss';

function LogoFull() {
    return (
        <div className="logo-full">
            <a className="logo-full__link" href="/">
                <LogoFullIcon className="logo-full__icon" />
            </a>
        </div>
    )
}

export default LogoFull;