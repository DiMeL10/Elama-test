import React from 'react';

import VKIcon from "~/static/img/socials-vk.svg";
import FacebookIcon from "~/static/img/socials-facebook.svg";
import TwiterIcon from "~/static/img/socials-twiter.svg";
import YoutubeIcon from "~/static/img/socials-youtube.svg";
import SlackIcon from "~/static/img/socials-slack.svg";
import RSSIcon from "~/static/img/socials-rss.svg";

import './Socials.scss';

function Socials() {
    return (
        <div className="socials">
            <a className="socials__link" href="/" title="Вконтакте">
                <VKIcon />
            </a>
            <a className="socials__link" href="/" title="Facebook">
                <FacebookIcon />
            </a>
            <a className="socials__link" href="/" title="Twiter">
                <TwiterIcon />
            </a>
            <a className="socials__link" href="/" title="Youtube">
                <YoutubeIcon />
            </a>
            <a className="socials__link" href="/" title="Slack">
                <SlackIcon />
            </a>
            <a className="socials__link" href="/" title="RSS">
                <RSSIcon />
            </a>
        </div>
    )
}

export default Socials;