import React, { useEffect, useState } from 'react'
import cart from '../img/cart.svg'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const toys = useSelector(state => state.toys.toys);
    const [toysQuantity, setToysQuantity] = useState(0);
    
    useEffect(() => {
        let quantity = 0;
        toys.forEach(toy => {
            if (toy.quantity > 0) quantity += 1;
        });
        setToysQuantity(quantity);
        console.log(toys)
    }, [toys]);

    const [isOpen, setOpen] = useState(false);
    const items = [{value: 'Catalog', href: '/catalog'}, {value: 'Delivery', href: '/delivery'}, {value: 'About', href: '/about'}, {value: 'Contacts', href: '/contacts'}];
  return (
    <header className="header">
        <div className="container">
            <div className="header_content">
                <NavLink className="header_logo" to={'/'}>ToyStore</NavLink>
        
                    <ul className={`nav_list ${isOpen ? "active" : ""}`} onClick={() => setOpen(false)}>
                        {items.map((item, index) => 
                            <li className='header_nav' key={index}>
                                <NavLink to={item.href}>{item.value}</NavLink>
                            </li>
                        )}
                    </ul>
                <div className='mobile_header'>          
                    <NavLink to={'/cart'}>
                        <div className="header_cart">
                            <div className="cart_text">Cart</div>
                            <img src={cart} alt="cart" className="cart_img" />
                            <div className="cart_value">{toysQuantity}</div>
                        </div>
                    </NavLink>
                    <button className='header_btn' onClick={() => setOpen(!isOpen)}></button>
                </div> 
            </div>
        </div>
    </header>
  )
}

export default Header