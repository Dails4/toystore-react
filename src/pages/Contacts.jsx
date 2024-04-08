import React from 'react'
import Info from '../components/Info'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contacts = () => {
  return (
    <div className='App'>
      <div className='page_wrapper'>
        <Info />
        <Header />
        <div className='cart_wrapper'>
          <div className='contacts_title'>Our contacts</div>
          <ul className='contacts_list'>
            <li className='contacts_item'><a href="https://github.com/Dails4" target='_blank'>GitHub</a></li>
            <li className='contacts_item'><a href="https://www.linkedin.com/in/roman-zanemonets-b6980122b/" target='_blank'>LinkedIn</a></li>
            <li className='contacts_item'><a href="https://t.me/kttoyaa" target='_blank'>Telegram</a></li>
            <li className='contacts_item'><a href="tel:375293917916">+375293917916</a></li>
          </ul>
          <div className='contacts_sub'>We are always glad to see you in our store</div>
        </div>
      </div>
        <Footer />
    </div>
  )
}

export default Contacts