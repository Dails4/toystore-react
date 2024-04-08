import React, { useState } from 'react'
import Item from './Item'

const ToyItem = ({toy}) => {
  const [modalActive, setModalActive] = useState(false);  

  return (
    <li className="animals_item" onClick={() => setModalActive(!modalActive)}>
        <img src={toy.img} alt="toy" className="animals_img"/>
        <h3 className="animals_name">{toy.name}</h3>
        <div className="animals_price">$ {toy.price} USD</div>
        {modalActive && <Item toy={toy} />}
    </li>
  )
}

export default ToyItem  