import React, { useState } from 'react'

const Item = ({toy}) => {
    
  const [counter, setCounter] = useState(toy.quantity);
  function increase() {
      setCounter(counter + 1)
  }
  function decrease() {
      (counter > 0) ? setCounter(counter - 1) : setCounter(0)
  }
  function addItem() {
      toy.quantity = counter
  }
return (
  <div className='item_more' onClick={(e) => e.stopPropagation()}>
      <div className='item_about'>{toy.about}</div>
      <div className='item_buy'>
          <button onClick={decrease} className='decrease_btn'>-1</button>
          <div className='item_quantity'>{counter}</div>
          <button onClick={increase} className='increase_btn'>+1</button>
      </div>
      <button className='item_add' onClick={addItem}>Add to cart</button>
  </div>
)
}

export default Item