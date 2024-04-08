import React from 'react';
import twitter from '../img/twitter.svg';
import facebook from '../img/fb.svg';
import insta from '../img/insta.svg';
import pinterest from '../img/pinterest.svg';
import yt from '../img/yt.svg';
 


const Info = () => {
  return (
    <section className="info">
        <div className="container">
            <div className="info__content">
                <div className="info__text">
                    <div className="info__number">Call Us: +1 213 974-5898</div>
                    <div className="info__mail">Email: toystore@template.com</div>
                </div>
                <ul className="info__icons">
                    <li className="info_icon"><a href='https://twitter.com/' rel='noreferrer' target='_blank'><img src={twitter} alt="twitter" /></a></li>
                    <li className="info_icon"><a href='https://www.facebook.com/' rel='noreferrer' target='_blank'><img src={facebook} alt="facebook"/></a></li>
                    <li className="info_icon"><a href='https://www.instagram.com/' rel='noreferrer' target='_blank'><img src={insta} alt="instagram"/></a></li>
                    <li className="info_icon"><a href='https://pinterest.com/' rel='noreferrer' target='_blank'><img src={pinterest} alt="pinterest"/></a></li>
                    <li className="info_icon"><a href='https://www.youtube.com/' rel='noreferrer' target='_blank'><img src={yt} alt="youtube"/></a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Info