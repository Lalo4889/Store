import { Link } from "react-router-dom";

const item =({item})=>{
    return(
    <div className="container text-center">
      <div className="card" width = "18rem">
        <img src={item.img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <Link to={"/item/" + item.id}  className="btn btn-secondary">Comprar</Link>
        </div>
      </div>
    </div>
    )
}

export default item;