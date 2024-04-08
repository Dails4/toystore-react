import React from 'react';
import { Link } from 'react-router-dom';
import ToyItem from './ToyItem';

const Animals = ({ toys, title, showByType, setToys}) => {
  const filteredToys = showByType ? toys.filter(toy => toy.type === title) : toys;
  
  function sortItems(sort) {
    if(sort === 'low-high') {
       setToys([...filteredToys].sort((a, b) => a.price - b.price ))  
    }
    if(sort === 'high-low') {
       setToys([...filteredToys].sort((a, b) => b.price - a.price))  
    }
  }

  return (
    <section className="animals">
        <div className="container">
            <div className="animals_header">
                <h2 className="animals_header_title">{title}</h2>
                { showByType ? <div className="animals_more"><Link to='/catalog'>See All Toys</Link></div> : (
                    <select defaultValue="" className='select_sort' name="" id="" onChange={event => sortItems(event.target.value)}>
                        <option disabled hidden value="">Sort By</option>
                        <option value="low-high">Price: Low-High</option>
                        <option value="high-low">Price: High-Low</option>
                    </select>
                )}
            </div>
            
            <div className="shop_line"></div>

            <ul className="animals_list">
                {filteredToys && filteredToys.map((toy, index) => 
                    <ToyItem toy={toy} key={index}/>
                )} 
            </ul>
        </div>
    </section>
  )
}

export default Animals;
