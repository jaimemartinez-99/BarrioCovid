import {Link, useParams} from "react-router-dom";
export default function Producto (props) {

    let { productId } = useParams();

	return (<div id="titulo">
			<p>
		<b><img src={props.theproducts[productId].thumbnail} alt="imagen"></img> </b> 
		</p> 
		<p>
		<b> {props.theproducts[productId].title} </b> 
		</p> 
		<p>
		<b> {props.theproducts[productId].description} </b> 
		</p> 
		<div id="productosresultados">
    		<ul id="lista">
    			{props.theproducts[productId].images.map(item => (
      				<li key={item.id} className="unproducto">
						<div className="fotos">
        				<img src={item[0]}></img>
						</div>
						<p> {item[1]}</p>
        					<button className="boton" onClick={e => funcion()}>Añadir </button> 
      </li>
    ))}
  </ul>
  </div>
		<Link to="/Tiendas"><button id="volver">Volver</button></Link>
	</div>)
}