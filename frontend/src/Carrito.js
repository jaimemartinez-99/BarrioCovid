import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Carrito.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Carrito() {
  const [carritoFinal, setCarritoFinal] = useState([]);
 // const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [tRecogida, setTRecogida] = useState(null);
  const [estaMarcado,setEstaMarcado] = useState(false);
  const [precioFinal, setPrecioFinal] = useState(0);
  const user = JSON.parse(localStorage.getItem("usuario"));
  console.log(user.nif);
  
  useEffect(() => {
    fetch(`http://localhost:8080/pedido/getAll/nif/${user.nif}`)
      .then((res) => res.json())
      .then((result) => {
        setCarritoFinal(result);
        console.log(result);
      });
  }, []);

  useEffect(() => {
		setPrecioFinal(
		  carritoFinal.reduce((total, item) => total + item.precio, 0)
		);
	  }, [carritoFinal]);

  const procPedido = () => {
    setTRecogida(Math.floor(Math.random() * (15 - 7 + 1) + 7));
    localStorage.setItem("tRecogida", tRecogida);
  }

  const vaciarCarrito = () => {
    setCarritoFinal([]);
  }

  return (
    localStorage.getItem("nombre") ? 
    <main>
        <h2> Carrito de compras</h2>
        <div id="listaCarro">
          <ul>
            {carritoFinal.map((item, index) => (
              <li key={index}>
                {item.productos.map((item1, index) => (
                  <li key={index}>
                  <p>{item1.nombre}: {item1.precio}€</p>
                  </li>
                  ))}
                <p><b>Recibo total de {item.tienda.nombre}: {item.precio}€</b></p>
              </li>   
            ))}
            <p id="preciofinal"><b> Precio final: {precioFinal}€</b></p>
            <div id="confinado">
              <input type="checkbox" className="checkbox" checked={!estaMarcado} onChange={() => setEstaMarcado(!estaMarcado)} />
              <span id="span"> ¿Se encuentra confinado?</span>
            </div>
            <div id="botoncitos">
              <button className="vaciarCarrito" onClick={vaciarCarrito}>
                Vaciar carrito
              </button>
              <button className="procPedido" onClick={procPedido}>
                Procesar pedido
              </button>
            </div>
          </ul>

        </div>
        <ToastContainer />
      </main> 
        :
        <Link to="/">
          <button id="volverInicio"> Volver a inicio </button>
      </Link>
  );
}