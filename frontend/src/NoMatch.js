import {Link} from "react-router-dom";

export default function NoMatch(props) {
    return (<div id="info">
        <p>Ruta no encontrada</p>
        <Link to="/"><button id="volver">Volver</button></Link>
</div>)
}