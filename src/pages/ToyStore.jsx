import React, { useEffect } from 'react';
import Info from '../components/Info';
import Header from '../components/Header';
import Hello from '../components/Hello';
import Shop from '../components/Shop';
import Video from '../components/Video';
import About from '../components/About';
import Subscribe from '../components/Subscribe';
import Instagram from '../components/Instagram';
import Footer from '../components/Footer';
import Toys from '../components/Toys';

const ToyStore = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Info />
            <Header />
            <Hello />
            <Shop />
            <Toys showByType={true} />
            <Video />
            <About />
            <Subscribe />
            <Instagram />
            <Footer />
        </div>
    );
}

export default ToyStore;
