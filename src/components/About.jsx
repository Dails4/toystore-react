import React, { useState } from 'react';
import kids from '../img/kids.png'
import Modal from './Modal';

const About = () => {
    const [isOpen, setOpen] = useState(false)
    const modalChange = () => setOpen(!isOpen)
    return (
    <section className="about">
        <div className="container">
            <div className="about_text">
                <div className="about_sub">Made for Webflow</div>
                <div className="about_title">Simple & Colorful Ecommerce <br></br> Template for Your Business</div>
            </div>
            <div className="about_info">
                <div className="about_info_text">
                    <div className="about_info_title">Available for FREE!</div>
                    <div className="about_line"></div>
                    <div className="about_info_par">A successful marketing plan relies heavily on the pulling-power of <br></br>advertising copy. Writing result-oriented ad copy is difficult, as it <br/>must appeal to, entice, and convince consumers to take action. <br/>There is no magic formula to write perfect ad copy</div>
                    <button className="about_btn" onClick={modalChange}>GET IT NOW!</button>
                </div>
                <img src={kids} alt="kids" className="about_img"/>
            </div>
        </div>
        <Modal isOpen={isOpen} modalChange={modalChange}/>
    </section>
  )
}

export default About