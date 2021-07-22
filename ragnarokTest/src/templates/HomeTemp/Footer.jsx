import React from 'react';
import { FacebookOutlined, YoutubeOutlined, TwitterOutlined } from '@ant-design/icons';
import { Row } from 'antd';

const styleIcon = {
    fontSize: "5rem",
    color: "white"
}

const Footer = (props) => {
    return (<footer id="footer" className="footer">
        <section className="footer__content">
            <div className="footer__card">
                <FacebookOutlined style={styleIcon} /><br />
                <h3 className="footer__card__text">Subcrible to <br /> Facebook</h3>
            </div>
            <div className="footer__card">
                <YoutubeOutlined style={styleIcon} /><br />
                <h3 className="footer__card__text">Watch on<br />  Youtube</h3>
            </div>
            <div className="footer__card">
                <TwitterOutlined style={styleIcon} /><br />
                <h3 className="footer__card__text">Follow on <br /> Twitter</h3>
            </div>
        </section>
        <div className="footer__end">

            <p>2020 © Ragnarok Clone By Dinh Viet Tuan</p>

        </div>

    </footer>)
}

export default Footer;