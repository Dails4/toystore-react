import React from 'react';

const CartItems = ({toys}) => {
  let totalPrice = 0;
  toys.forEach(toy => {
    if (toy.quantity > 0) totalPrice += toy.price * toy.quantity
  })
  return (
    <div className='cart_wrapper'>
      <div className='cart'>
          
          <ul className='cart_list'>
            {toys.map(toy => (
              toy.quantity > 0 && (
                <li key={toy.name} className='cart_toy_item'>
                  <img src={toy.img} alt="toy" className="cart_toy_img"/>
                  <div className='cart_item_text'>
                    <div className='cart_toy_title'>{toy.name}</div>
                    <div className="animals_price"> {toy.price} $ * {toy.quantity} pcs = <span>$ {toy.price * toy.quantity} USD </span></div>
                  </div>
                </li>
              )
            ))}
          </ul>
          <div className='total_price'>
                       Total price: ${totalPrice} USD
          </div>
      </div>
    </div>
  );
};

export default CartItems;
