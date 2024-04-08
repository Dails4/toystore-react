import React from 'react'
import teddy from '../img/teddy.png'
import toys from '../img/toys.png'
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <section className="shop">
        <div className="container">
            <div className="shop_content">
                <div className="shop_item">
                    <img src={teddy} alt="teddy" className="shop_img"/>
                    <div className="shop_text">
                        <h2 className="shop_title">Stuffed Animals</h2>
                        <button className="shop_btn"><Link to='/catalog'>Shop now</Link></button>
                    </div>
                </div>
                <div className="shop_item sec_item">
                    <div className="shop_text_sec">
                        <h2 className="shop_title">Wooden Toys</h2>
                        <button className="shop_btn"><Link to='/catalog'>Shop now</Link></button>
                    </div>
                    <img src={toys} alt="wooden" className="shop_img"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Shop