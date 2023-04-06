import { useState, useEffect } from "react";
import './Carrito.css';

export default function Carrito() {
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
		const items = JSON.parse(localStorage.getItem("carrito")) || [];
		setCarrito(items);
	  }, []);
    return (
    <div id="carrito">
        <h2>Carrito de compras</h2>
        <div id="listaCarro">
        <ul>
        {carrito.map((item, index) => (
          <li key={index}>
            <p>{item.itemName}</p> 
            <p>{item.itemPrice}€</p>
          </li>
        ))}
        <li>
        <p id="textoTotal">Total:</p>
        <p>{carrito.reduce((total, item) => total + item.itemPrice, 0)}€</p>
          </li>
        <button className="procPedido"> Procesar pedido</button>
        </ul>
      </div>
    </div>)
}
  