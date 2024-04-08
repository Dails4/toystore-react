import React from 'react';
import twitter from '../img/twitter.svg';
import facebook from '../img/fb.svg';
import insta from '../img/insta.svg';
import pinterest from '../img/pinterest.svg';
import yt from '../img/yt.svg';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const items = [{value: 'Home', href: '/'}, {value: 'Catalog', href: '/catalog'}, {value: 'Delivery', href: '/delivery'}, {value: 'About', href: '/about'}, {value: 'Contacts', href: '/contacts'}];
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer_content">
                <div className="footer_top">
                    <div className="footer_title"><NavLink to='/'>ToyStore</NavLink></div>
                    <ul className="footer_nav">
                    {items.map((item, index) => 
                            <li className='footer_nav_item' key={index}>
                                <NavLink to={item.href}>{item.value}</NavLink>
                            </li>
                        )}
                    </ul>
                    <ul className="info__icons">
                    <li className="info_icon"><a href='https://twitter.com/' rel='noreferrer' target='_blank'><img src={twitter} alt="twitter" /></a></li>
                    <li className="info_icon"><a href='https://www.facebook.com/' rel='noreferrer' target='_blank'><img src={facebook} alt="facebook"/></a></li>
                    <li className="info_icon"><a href='https://www.instagram.com/' rel='noreferrer' target='_blank'><img src={insta} alt="instagram"/></a></li>
                    <li className="info_icon"><a href='https://pinterest.com/' rel='noreferrer' target='_blank'><img src={pinterest} alt="pinterest"/></a></li>
                    <li className="info_icon"><a href='https://www.youtube.com/' rel='noreferrer' target='_blank'><img src={yt} alt="youtube"/></a></li>
                    </ul>
                </div>
                <div className="footer_line"></div>
                <div className="footer_bottom">
                    <div className="footer_bottom_left">Created with love by  Elastic Themes</div>
                    <div className="footer_bottom_right">Powered by Webflow  Style Guide   Licensing</div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer