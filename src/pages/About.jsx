import React from 'react'
import Info from '../components/Info'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='App'>
      <div className='page_wrapper'>
        <Info />
        <Header />
        <div className='cart_wrapper'>
          <div className='cart'>
            <div className='about_page_title'>Welcome to the World of Plush Toys!</div>
            <div className='about_page_text'>
              <p className='about_page_par'>At our website, we've curated a delightful collection of both soft and wooden toys, catering to every child's playtime preferences.</p>
              <p className='about_page_par'>Soft toys offer comfort and cuddles, becoming cherished companions for children of all ages. From plush animals to whimsical characters, our soft toy collection is designed to ignite imagination and bring smiles to little faces.</p>
              <p className='about_page_par'>On the other hand, wooden toys offer timeless charm and durability. Crafted from natural materials, they encourage creativity and hands-on exploration. Whether it's classic wooden blocks, puzzles, or imaginative play sets, our wooden toy collection is sure to inspire hours of play.</p>
              <p className='about_page_par'>With our carefully selected range of soft and wooden toys, you can create a diverse play environment that nurtures your child's development and sparks their imagination. Explore our collection today and find the perfect toys to enrich your child's playtime experience.</p>
            </div>
              
          </div>
        </div>
      </div>
        <Footer />
    </div>
  )
}

export default About