import './Components/ItemListContainer/Item.css';
import './Components/NavBar/Navbar.css';
import './Components/ItemDetail/ItemDetail.css';
import './App.css';
import './Components/footer/footer.css'
import './Components/Checkout/formulario.css'

import { BrowserRouter, Routes,Route } from 'react-router-dom';


import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Error from './Components/NavBar/Error';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './Components/NavBar/Nosotros';
import Footer from './Components/footer/Footer';
import CartContext from './Components/context/cartContext';
import Checkout from './Components/Checkout/Checkout';
import CartProvider from './Components/context/cartContext';
import Cart from './Components/Cart/Cart';





function App() {
  return (
    <div className="App">
    <CartProvider >
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;
