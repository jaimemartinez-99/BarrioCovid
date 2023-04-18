import {Link, useParams} from "react-router-dom";
import "./css/Producto.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import { useState, useEffect } from "react";

export default function Producto (props) {
	const [carrito, setCarrito] = useState([]);
	const [precioTotal, setPrecioTotal] = useState(0);
	const [tienda, setTienda] = useState("");
	//const [carritoPescaderia1, setCarritoPescaderia1] = useState([]);
	//const [carritoPescaderia2, setCarritoPescaderia2] = useState([]);
	//const [carritoDrogueria, setCarritoDrogueria] = useState([]);

	const [listaProductos, setlistaProductos] = useState([]);

    let pathname = window.location.pathname;
	let new_pathname = pathname.substring(1);	

	useEffect(() => {
		fetch(`http://localhost:8080/producto/getAll/${new_pathname}`)
		  .then((res) => res.json())
		  .then((result) => {
			setlistaProductos(result);
			console.log(result);
		  });
	  }, []);

	const handleAddClick = (item) => {
		const updatedCarrito = [...carrito];
		updatedCarrito.push(item);
		setCarrito(updatedCarrito);
		setTienda(item.tienda)
		//console.log(precioTotal);
		//console.log(carrito);
		toast.success("¡Producto añadido!", {
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
		setPrecioTotal(
		  carrito.reduce((total, item) => total + item.precio, 0)
		);
	  }, [carrito]);

	const peticionPost=(e)=>{
		e.preventDefault()
		const precio= precioTotal;
		const productos = carrito;
		const usuario = JSON.parse(localStorage.getItem('usuario'));
		const pedido = {precio, tienda, productos, usuario};
		console.log(pedido);
		fetch("http://localhost:8080/pedido/add",{
          method:"POST",
          headers:{ "Content-Type":"application/json"},
          body:JSON.stringify(pedido),
		}).then(() => {
			setCarrito([]);
			setPrecioTotal(0);
			setTienda("");
			toast.success("¡Pedido realizado!.", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			  }); 
		});
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
        				{localStorage.getItem("nombre") && <button className="botonAñadir" onClick={() => handleAddClick(item)}>Añadir</button> }				
      </li>
    ))}
  </ul>
  </div>
  <div id="botonesTienda">
		<Link to="/Tiendas">		
		<button id="volver">Volver</button>
		</Link>
		<button onClick={peticionPost}id="finalizar">Finalizar compra</button>
		<ToastContainer />
		</div>
	</div>);
	 
}
