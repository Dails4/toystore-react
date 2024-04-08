import React from 'react'
import { Link } from 'react-router-dom'

const Hello = () => {
  return (
    <section className="hello">
        <div className="container">
            <div className="hello_wrap">
                <div className="hello_content">
                    <div className="hello_sub">Say Hello to ToyStore!</div>
                    <div className="hello_title">Free Ecommerce <br></br> Template for Webflow</div>
                    <Link className="hello_btn" to='/catalog' >Open Catalog</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hello