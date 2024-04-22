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
          <Route path="/toystore-react/catalog" element={<Catalog />} />
          <Route path="/toystore-react/delivery" element={<Delivery />} />
          <Route path="/toystore-react/about" element={<About />} />
          <Route path="/toystore-react/contacts" element={<Contacts />} />
          <Route path='/toystore-react/cart' element={<Cart /> } />
          <Route path="*" element={<Error />} />
        </Routes>
      
    </div>
  );
}

export default App;
