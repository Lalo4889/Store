import { Link } from "react-router-dom";

const item =({item})=>{
    return(
    <div className="container text-center">
      <div className="card" width = "18rem">
        <img src={item.img} className="card-img-top" alt="imagen del producto"/>
        <div className="card-body">
          <h5>{item.quantity} $ {item.price}</h5>
          <Link to={"/item/" + item.id}  className="btn btn-secondary">Ver mas</Link>
        </div>
      </div>
    </div>
    )
}

export default item;