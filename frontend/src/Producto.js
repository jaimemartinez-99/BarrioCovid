import {Link, useParams} from "react-router-dom";
import "./css/Producto.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { useState, useEffect } from "react";

export default function Producto (props) {
	const [carrito, setCarrito] = useState([]);

  const handleAddClick = (itemName, itemPrice) => {
    const updatedCarrito = [...carrito];
    updatedCarrito.push({ itemName, itemPrice });
    setCarrito(updatedCarrito);
    localStorage.setItem('carrito', JSON.stringify(updatedCarrito));
    toast.success("Producto añadido", {
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

  useEffect(() => {
    const storedCarrito = JSON.parse(localStorage.getItem('carrito'));
    if (storedCarrito) {
      setCarrito(storedCarrito);
    }
  }, []);

    let { productId } = useParams();
	return (<div id="titulo">
			<p>
		<b><img className="logoTienda"src={props.theproducts[productId].thumbnail} alt="imagen"></img> </b> 
		</p> 
		<div id="tituloTienda">
		<p>
		<b> {props.theproducts[productId].title} </b>
		</p> 
		<p>
		<b> {props.theproducts[productId].description} </b> 
		</p> 
		</div>
		<div id="productosresultados">
    		<ul id="lista">
    			{props.theproducts[productId].images.map(item => (
      				<li key={item.id} className="unproducto">
        				<img className="fotos" src={item[0]}></img>
						<div className="textoProductos">
						<p> {item[1]}</p>
						<p> {item[2]}€/kg</p>
						</div>
        				{localStorage.getItem("nombre") && <button className="botonAñadir" onClick={() => handleAddClick(item[1], item[2])}>Añadir</button> }				
      </li>
    ))}
  </ul>
  </div>
		<Link to="/Tiendas"><button id="volver">Volver</button></Link>
		<ToastContainer />
	</div>)
}

