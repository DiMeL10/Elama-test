import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import CloseIcon from "~/static/img/close.svg";

import './MobileMenu.scss';

class MobileMenu extends React.Component {
    static propTypes = { handleClick: PropTypes.func.isRequired };

    componentDidMount() {
        document.addEventListener('click', this.hadleClickOutside);
        document.body.classList.add('body-fixed');
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.hadleClickOutside);
        document.body.classList.remove('body-fixed');
    }

    hadleClickOutside = () => {
        const domNode = ReactDOM.findDOMNode(this);

        if (this.isNotTargetOfClick(domNode, event) || event.target.tagName === 'A') {
            this.props.handleClick();
        }
    }

    isNotTargetOfClick = (elem, event) => {
        return !elem || !elem.contains(event.target);
    }

    render () {
        return (
            <div className="mobile-menu">
                <div className="mobile-menu__header">
                    <CloseIcon className="mobile-menu__button" onClick={this.props.handleClick} />
                </div>

                <div className="mobile-menu__nav">
                    <ul className="mobile-menu__list">
                        <li className="mobile-menu__item">
                            <a className="mobile-menu__link">С чего начать</a>
                        </li>
                        <li className="mobile-menu__item">
                            <a className="mobile-menu__link">Инструменты</a>
                        </li>
                        <li className="hmobile-menu__item">
                            <a className="mobile-menu__link"  href="/">Услуги</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MobileMenu;