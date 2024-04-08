import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Toys from '../components/Toys';

const Catalog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Info />
            <Header />
            <Toys showByType={false} />
            <Footer />
        </div>
    );
}

export default Catalog;
