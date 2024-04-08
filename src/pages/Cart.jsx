import React from 'react';
import Info from '../components/Info';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItems from '../components/CartItems';
import { useSelector } from 'react-redux';
import Shop from '../components/Shop';

const Cart = () => {
  const toys = useSelector(state => state.toys.toys);

  const hasToysInCart = toys.some(toy => toy.quantity > 0);
  
  return (
    <div className='App'>
      <div className='page_wrapper'>
        <Info />
        <Header />
        {hasToysInCart ? (
          <>
            <div className='cart_title'>Your cart</div>
            <CartItems toys={toys} />
          </>
        ) : (
          <>
            <div className='cart_title'>Your cart is empty</div>
            <Shop />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
