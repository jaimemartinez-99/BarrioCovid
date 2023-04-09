import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Carrito.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Carrito() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [tRecogida, setTRecogida] = useState(null);
  const [estaMarcado,setEstaMarcado] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(items);
  }, []);

  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem("carrito");
    localStorage.removeItem("tRecogida");

  };

  const procesarPedido = () => {
    if (JSON.parse(localStorage.getItem("carrito"))) {
      const tRecogida = Math.floor(Math.random() * (15 - 7 + 1) + 7);
      localStorage.setItem("tRecogida", JSON.stringify(tRecogida));
      setTRecogida(tRecogida);
      setMostrarAlerta(true);
      toast.warn("Su pedido ha sido procesado, por favor espere " + tRecogida + ' minutos', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.warn("Su carrito está vacío.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    let alertTimeout;
    if (mostrarAlerta && tRecogida !== null) {
      alertTimeout = setTimeout(() => {
        estaMarcado ? 
        toast.success("Su pedido está listo, puede pasar a recogerlo.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }):
        toast.success("Se va a efectuar la entrega de su pedido.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }); 
        setMostrarAlerta(false);
      }, tRecogida * 60 * 1000);
    }
    return () => {
      clearTimeout(alertTimeout);
    };
  }, [mostrarAlerta, tRecogida]);

  return (
    localStorage.getItem("nombre") ? 
    <><div id="carrito">
        <h2> Carrito de compras</h2>
        <div id="listaCarro">
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>
                <p>{item.itemName}</p>
                <p>{item.itemPrice}€</p>
              </li>
            ))}
            <li>
              <p id="textoTotal">
                Total:{" "}
                {carrito
                  .reduce((total, item) => total + item.itemPrice, 0)
                  .toFixed(2)}
                €
              </p>
            </li>
            <div id="confinado">
              <input type="checkbox" className="checkbox" checked={!estaMarcado} onChange={() => setEstaMarcado(!estaMarcado)} />
              <span id="span"> ¿Se encuentra confinado?</span>
            </div>
            <div id="botoncitos">
              <button className="vaciarCarrito" onClick={vaciarCarrito}>
                Vaciar carrito
              </button>
              <button className="procPedido" onClick={procesarPedido}>
                Procesar pedido
              </button>
            </div>
          </ul>

        </div>
        <ToastContainer />
      </div> 
      
        </>
        :
        <Link to="/">
          <button id="volverInicio"> Volver a inicio </button>
      </Link>
  );
}