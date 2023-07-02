import './Components/ItemListContainer/Item.css';
import './Components/NavBar/Navbar.css';
import './Components/Productos/Productos.css';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ComponentePadre from './Components/Productos/ComponentePadre';
import ComponenteHijo from './Components/Productos/ComponenteHijo';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer imagen="../img/localpor.png" titulo="BAR AND GRILL" descripcion="La mejor cerveza artesanal!!" />
      <ComponentePadre>
        <ComponenteHijo imagen = "../img/apa.jpg" titulo ="CERVEZA" descripcion ="La mejore cerveza artesanal"/>    
        <ComponenteHijo imagen = "../img/ipa.jpg" titulo ="CERVEZA" descripcion ="La mejore cerveza artesanal"/>    
        <ComponenteHijo imagen = "../img/altbier.jpg" titulo ="CERVEZA" descripcion ="La mejore cerveza artesanal"/>    
        <ComponenteHijo imagen = "../img/porter.jpg" titulo ="CERVEZA" descripcion ="La mejore cerveza artesanal"/>    
        <ComponenteHijo imagen = "../img/pilsen-ale.jpg" titulo ="CERVEZA" descripcion ="La mejore cerveza artesanal"/>    
        <ComponenteHijo imagen = "../img/red-ale.jpg" titulo ="CERVEZA" descripcion ="La mejore cerveza artesanal"/>    
        <ComponenteHijo imagen = "../img/strong-golden-ale.jpg" titulo ="CERVEZA" descripcion ="La mejore cerveza artesanal"/>    
        <ComponenteHijo imagen = "../img/brown-ale.jpg" titulo ="CERVEZA" descripcion ="La mejore cerveza artesanal"/>    
        <ComponenteHijo imagen = "../img/cream-ale.jpg" titulo ="CERVEZA" descripcion ="La mejore cerveza artesanal"/>    
        <ComponenteHijo imagen = "../img/pale-ale.jpg" titulo ="CERVEZA" descripcion ="La mejore cerveza artesanal"/>    
        <ComponenteHijo imagen = "../img/pilsen-lager.jpg" titulo ="CERVEZA" descripcion ="La mejore cerveza artesanal"/>    
        <ComponenteHijo imagen = "../img/stout.jpg" titulo ="CERVEZA" descripcion ="La mejore cerveza artesanl"/>
      </ComponentePadre>
    </div>
  );
}

export default App;
