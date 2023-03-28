import Location from './Location.js';
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
		<Link to="/Tiendas"><button id="volver">Volver</button></Link>
        <Location />
	</div>)
}