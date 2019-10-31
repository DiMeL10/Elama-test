import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { CSSTransition } from 'react-transition-group';

import Container from '~c/Container/Container';
import LogoFull from '~c/LogoFull/LogoFull';
import Button from '~c/Button/Button';
import MobileMenu from '~c/MobileMenu/MobileMenu';
import Overlay from '~c/overlay/overlay'

import MenuIcon from "~/static/img/menu.svg";

import './Header.scss';

function Header() {
    const [isMenuShowed, switchMenu] = useState(false);

    const showMenu = () => switchMenu(true);

    const hideMenu = () => switchMenu(false);

    return (
        <div className="header">
            <Container>
                <div className="header__content">
                    <div className="header__logo">
                        <LogoFull />
                    </div>

                    <MediaQuery minDeviceWidth={768}>
                        <div className="header__nav">
                            <ul className="header__nav-list">
                                <li className="header__nav-item">
                                    <a className="header__nav-link">С чего начать</a>
                                </li>
                                <li className="header__nav-item">
                                    <a className="header__nav-link">Инструменты</a>
                                </li>
                                <li className="header__nav-item">
                                    <a
                                        className="header__nav-link header__nav-link_active"
                                        href="/"
                                    >
                                        Услуги
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="header__button">
                            <Button type="button" text="Вход" />
                        </div>
                    </MediaQuery>

                    <MediaQuery maxDeviceWidth={767}>
                        <MenuIcon className="header__menu-button" onClick={showMenu} />

                        <CSSTransition 
                            in={isMenuShowed}
                            timeout={300}
                            unmountOnExit
                            classNames="header__menu-animate"
                        >
                            <MobileMenu handleClick={hideMenu}/>
                        </CSSTransition>
                        
                        { isMenuShowed && <Overlay />}
                    </MediaQuery>
                </div>
            </Container>
        </div>
    )
}

export default Header;