import React from 'react';
import './styles/Reset.scss';
import './styles/App.scss';
import './styles/Media.scss'
import { Route, Routes } from 'react-router-dom';
import ToyStore from './pages/ToyStore';
import Catalog from './pages/Catalog';
import Error from './pages/Error';
import Delivery from './pages/Delivery';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Cart from './pages/Cart';
 

function App() {
  
  return (
    <div className="App">
     
        <Routes>
          <Route path='/toystore-react/' element={<ToyStore />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path='/cart' element={<Cart /> } />
          <Route path="*" element={<Error />} />
        </Routes>
      
    </div>
  );
}

export default App;
