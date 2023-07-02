
const ComponenteHijo = ({imagen,titulo,descripcion})=>{
  
    return(
<div className="container text-center">

      <div className="card" width = "18rem">
        <img src={imagen} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <a href="#"  className="btn btn-secondary">Comprar</a>
        </div>
      </div>
    </div>

    )
}

export default ComponenteHijo;

