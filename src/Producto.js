import {Link, useParams} from "react-router-dom";
import "./Producto.css"


import {useState} from "react"; 

export default function Producto (props) {
	const [carrito,setCarrito] = useState([]);
	const handleAddClick = (itemName, itemPrice) => {
		setCarrito([...carrito, {itemName,itemPrice}]);
		localStorage.setItem('carrito', JSON.stringify([...carrito, {itemName,itemPrice}]));
		console.log(carrito);
		console.log(carrito.map((e)=>e.itemName));
		console.log(carrito.map((e)=>e.itemPrice));
	  }

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
        				<button className="botonAñadir" onClick={() => handleAddClick(item[1], item[2])}>Añadir</button>
						
      </li>
    ))}
  </ul>
  </div>
		<Link to="/Tiendas"><button id="volver">Volver</button></Link>
	</div>)
}

