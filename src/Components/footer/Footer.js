import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


const footer = () => {
    return (
  <div className="footer">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand"><img className ="logo" src="../img/Fria_Rubia1.png" alt='imagen de logo'></img></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="posicion navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className=" navegacion active"  aria-current="page"></Link>
            </li>
            <li className="nav-item">
              <Link to='/category/cervezas' className=" navegacion"></Link>
            </li>
            <li className="nav-item">
              <Link to='/category/kits' className=" navegacion"></Link>
            </li>
            <li className="nav-item">
              <Link to='/nosotros' className=" navegacion"></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
    );
  };
  
  export default footer;
  