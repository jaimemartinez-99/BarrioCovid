import {Link, useParams} from "react-router-dom";
import "./css/Stock.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import { useState, useEffect } from "react";

export default function Producto (props) {
	const [carrito, setCarrito] = useState([]);
	const [listaProductos, setlistaProductos] = useState([]);
	const [precio,setPrecio] = useState("");
	const [ nombre, setNombre] = useState("");
	const [link_img,setlink_img] = useState("");

    let pathname = window.location.pathname;
	let new_pathname = pathname.substring(1,pathname.length-6);	
	
	useEffect(() => {
    fetch(`http://localhost:8080/producto/getAll/${new_pathname}`)
      .then((res) => res.json())
      .then((result) => {
        setlistaProductos(result);
        console.log(result);
      });
  }, []);

  const handleClick=(e)=>{
	e.preventDefault()
	const tienda = listaProductos[0].tienda;
	console.log(tienda)
	const nuevoproducto={nombre,precio,link_img,tienda}
	fetch("http://localhost:8080/producto/add",{
		method:"POST",
		headers:{ "Content-Type":"application/json"},
		body:JSON.stringify(nuevoproducto)
	}).then(() => {
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
		  setTimeout(() => {
			window.location.reload();
		  }, 3000);
	})
  }

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
      				</li> 
    ))}
  </ul>
  <p><b>¿Desea añadir algún producto?</b></p>
  <div id="inputs">
  <input id="input1" value={nombre} onChange={(event) => setNombre(event.target.value)} placeholder="Introduzca el nombre de su producto..."></input>
  <br />
  <input id="input1" value={precio} onChange={(event) => setPrecio(event.target.value)} placeholder="Introduzca el precio de su producto..."></input>
  <br />
  <input id="input1" value={link_img} onChange={(event) => setlink_img(event.target.value)} placeholder="Introduzca la imagen de su producto..."></input>
  <br />
  <button id="boton1" onClick={handleClick}	>Añadir producto</button>
  </div>
  </div>
		<Link to="/Tiendas"><button id="volver">Volver</button></Link>
		<ToastContainer />
	</div>)
}

