import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [orderId, setOrderId] = useState();
    const [buyer, setBuyer] = useState({
        Nombre: "",
        Email: "",
        Confirmación_Email: "",
        Telefono: "",
        Ciudad: ""
    });

    const { cart, clear } = useContext(CartContext);
    const { Nombre, Email, Telefono, Ciudad, Confirmación_Email } = buyer;
    const isValidEmail = Email === Confirmación_Email;
    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValidEmail) {
            const total = cart.reduce((acum, unItem) => acum + (unItem.price * unItem.count), 0);
            const dia = new Date();
            const data = { buyer, cart, total, dia };
            generateOrder(data);
        }
    };

    const generateOrder = async (data) => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "Orders");
        const order = await addDoc(queryCollection, data);
        setOrderId(order.id);
    };

    return (
        <div className="container formulario">
            <h2>Formulario</h2>
            {!orderId && (
                <form className="col" onSubmit={handleSubmit}>
                    <div className="col mt-4">
                        <label>Nombre</label>
                        <input value={Nombre} name="Nombre" onChange={handleInputChange} type="text" pattern="^[^0-9]+$" minlength="3" placeholder="Nombre" required className="form-control border-1 border-dark" />
                    </div>
                    <div className="col mt-4">
                        <label>Telefono</label>
                        <input value={Telefono} name="Telefono" onChange={handleInputChange} type="number"  required min="3" className="form-control border-1 border-dark" />
                    </div>
                    <div className="col mt-4">
                        <label>Ciudad</label>
                        <input value={Ciudad} name="Ciudad" onChange={handleInputChange} type="text" pattern="^[^0-9]+$" minlength="3" required className="form-control border-1 border-dark" />
                    </div>
                    <div className="col mt-4">
                        <label>Correo Electrónico</label>
                        <input value={Email} name="Email" onChange={handleInputChange} type="email" required className="form-control border-1 border-dark" />
                    </div>
                    <div className="col mt-4">
                        <label>Confirmación de Correo Electrónico</label>
                        <input value={Confirmación_Email} name="Confirmación_Email" onChange={handleInputChange} type="email" required className="form-control border-1 border-dark" />
                    </div>
                    {isValidEmail ? (
                        <div className="col-12">
                            <button type="submit" className="btn btn-success mt-4">Confirmar Compra</button>
                        </div>
                    ) : (
                        <p style={{ color: 'red' }}>Los correos electrónicos no coinciden. Por favor, ingrésalos correctamente.</p>
                    )}
                </form>
            )}
            {orderId && (
                <div>
                    
                    <h1>Felicitaciones tu compra se realizo con exito</h1>
                    <h3>Tu ID de Compra es: {orderId}</h3>
                    <Link to='/'>
                    <button onClick={()=>clear(0)} className='btn btn-secondary mt-2' >Volver a Inicio</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Checkout;
































