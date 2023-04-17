import {Link, useParams} from "react-router-dom";
import "./css/Producto.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import { useState, useEffect } from "react";

export default function Producto (props) {
	const [carrito, setCarrito] = useState([]);
	const [listaProductos, setlistaProductos] = useState([]);


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
let { email } = useParams();

	useEffect(() => {
    fetch("http://localhost:8080/producto/getAll/{email}")
      .then((res) => res.json())
      .then((result) => {
        setlistaProductos(result);
        console.log(result);
      });
  }, []);

  

  useEffect(() => {
    const storedCarrito = JSON.parse(localStorage.getItem('carrito'));
    if (storedCarrito) {
      setCarrito(storedCarrito);
    }
  }, []);

    
	return (<div id="titulo">
			<p>
		</p> 
		<div id="tituloTienda">
		<p>
		</p> 
		<p>
		</p>
		<p>
		</p> 
		</div>
		<div id="productosresultados">
    		<ul id="lista">
    			{listaProductos.map(item => (
      				<li key={item.id} className="unproducto">
        				<img className="fotos" src={item.link_img}></img>
						<div className="textoProductos">
						<p> {item.nombre}</p>
						<p> {item.precio}€/kg</p>
						</div>
        				{localStorage.getItem("nombre") && <button className="botonAñadir" onClick={() => handleAddClick(item.nombre, item.precio)}>Añadir</button> }				
      </li>
    ))}
  </ul>
  </div>
		<Link to="/Tiendas"><button id="volver">Volver</button></Link>
		<ToastContainer />
	</div>)
}

