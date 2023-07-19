import './Components/ItemListContainer/Item.css';
import './Components/NavBar/Navbar.css';
import './Components/Productos/Productos.css';
import './Components/ItemDetail/ItemDetail.css';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Error from './Components/NavBar/Error';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './Components/NavBar/Nosotros';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
