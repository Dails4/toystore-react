import React from 'react'
import Info from '../components/Info'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Delivery = () => {
  return (
    <div className='App'>
      <div className='page_wrapper'>
        <Info />
        <Header />
        <div className='cart_wrapper'>
          <div className='delivery_text'>We strive to ensure convenience for our customers in all aspects, including product delivery. Below you will find information about our delivery services:</div>
          <ul className='delivery_list'>
            <ul className="delivery_par">1. Delivery Methods:
              <li className="delivery_item">Courier Delivery: Our team of couriers is ready to deliver your order directly to your door at a time convenient for you.</li>
              <li className="delivery_item">Postal Delivery: For customers in remote areas, we offer postal delivery services.</li>
              <li className="delivery_item">Self-Pickup: You can also pick up your order yourself at our office or pickup point.</li>
            </ul>
            <ul className="delivery_par">2. Delivery Times:
              <li className="delivery_item">Courier Delivery: Orders are typically delivered within 14.</li>
              <li className="delivery_item">Postal Delivery: Delivery times by mail may vary depending on your location and external factors.</li>
              <li className="delivery_item">Self-Pickup: Your order will be ready for pickup within 14 after it is placed.</li>
            </ul>
            <ul className="delivery_par">3. Delivery Costs:
              <li className="delivery_item">Courier Delivery: The delivery cost depends on your location and the size of your order. Please contact our support team for more detailed information.</li>
              <li className="delivery_item">Postal Delivery: The cost of mail delivery is calculated according to the rates of the chosen postal service.</li>
              <li className="delivery_item">Self-Pickup: Self-pickup of the order is available free of charge.</li>
            </ul>
            <ul className="delivery_par">4. Order Tracking:
              <li className="delivery_item">Courier Delivery: We provide the option to track your order in real-time. Please use the tracking number to find the current status of your package.</li>
              <li className="delivery_item">Postal Delivery: Some types of postal services offer parcel tracking. We will provide you with tracking information when you place your order.</li>
              <li className="delivery_item">Self-Pickup: You can come to our office or pickup point and collect your order upon presentation of identification and the order number.</li>
            </ul>
          </ul>
        </div>
      </div>
        <Footer />
    </div>
  )
}

export default Delivery