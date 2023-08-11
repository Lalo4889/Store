import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
          <div className="barra">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link to='/' className="navbar-brand"><img className ="logo" alt='imagen de logo' src="../img/Fria_Rubia1.png"></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="posicion navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to='/' className=" navegacion active"  aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/category/cervezas' className=" navegacion">Cervezas</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/category/kits' className=" navegacion">Kits</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/nosotros' className=" navegacion">Nosotros</Link>
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
