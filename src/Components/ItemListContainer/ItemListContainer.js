

const  ItemListContainer = ({imagen, titulo, descripcion}) =>{
    return(
        <div>
        <img className="img_portada" src={imagen} alt="imagen de portada" width ="100%"/>
        <div className="texto-superpuesto">
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        </div>
        </div>
    );
}

export default ItemListContainer;