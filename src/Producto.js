import {Link, useParams} from "react-router-dom";
import "./Producto.css"
export default function Producto (props) {

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
        				<button className="botonAñadir"> Añadir </button> 
						
      </li>
    ))}
  </ul>
  </div>
		<Link to="/Tiendas"><button id="volver">Volver</button></Link>
	</div>)
}