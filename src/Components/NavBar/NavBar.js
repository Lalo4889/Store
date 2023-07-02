import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from './CartWidget';



const Navbar = () => {
  return (
    <div className="barra">
   <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="../img/bar_and_grill1.png"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className=" navegacion active"  aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className=" navegacion" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className=" navegacion" href="#">Contacto</a>
        </li>
      </ul>
      <CartWidget/>
    </div>
  </div>
</nav>
</div>
  );
};

export default Navbar;
