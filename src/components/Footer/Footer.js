import React from 'react';

import Container from '~c/Container/Container';
import Logo from '~c/Logo/Logo';
import Phone from '~c/Phone/Phone';
import Socials from '~c/Socials/Socials';

import NewWindowIcon from "~/static/img/new-window.svg";

import './Footer.scss';

function Footer() {
    return (
        <div className="footer">
            <Container>
                <div className="footer__content">
                    <div className="footer__top">
                        <ul className="footer__top-list">
                            <li className="footer__top-item">
                                <a className="footer__top-link">С чего начать</a>
                            </li>
                            <li className="footer__top-item">
                                <a className="footer__top-link">Инструменты</a>
                            </li>
                            <li className="footer__top-item">
                                <a className="footer__top-link">Агентам и фрилансерам</a>
                            </li>
                            <li className="footer__top-item">
                                <a className="footer__top-link">
                                    <span>Помощь</span>
                                    <NewWindowIcon className="footer__top-img" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__main">
                        <Logo />
                        <Phone
                            number="8 (499) 270-27-90"
                            text="Москва"
                            href={84992702790}
                        />
                        <Phone
                            number="8 (812) 318-40-54"
                            text="Санкт-Петербург"
                            href={88123184054}
                        />
                        <Phone 
                            number="8 (800) 500-31-90"
                            text="Звонки по России"
                            href={88005003190}
                        />

                        <div className="footer__main-links">
                            <a className="footer__main-link" href="mailto:milo@elama.ru">
                                milo@elama.ru
                            </a>
                            <a className="footer__main-link" >Реквизиты</a>
                        </div>

                        <div className="footer__main-socials">
                            <Socials />
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <span className="footer__bottom-text">
                            © 2008—2018 eLama.ru. Все права защищены
                        </span>
                        <a className="footer__bottom-link" href="/">
                            Политика в отношении обработки персональных данных
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;