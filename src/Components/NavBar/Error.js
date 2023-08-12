import { Link } from "react-router-dom";



const Error =()=>{
    return(
        <div className="error">
            <img src="../img/error404.jpg" alt="imagen de pagina no encontrada"></img>
            <div>
            <Link to = '/'>
                <button className="btn btn-secondary mt-4">Volver</button>
            </Link>
            </div>
        </div>
    )
}

export default Error;