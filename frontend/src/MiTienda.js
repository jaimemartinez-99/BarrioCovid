import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './css/MiTienda.css';

export default function MiTienda (props) {
  const [tienda, setTienda] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/tienda/getAll/${localStorage.getItem("nif")}`)
          .then((res) => res.json())
          .then((result) => {
            setTienda(result);
            console.log(result);
          });
      }, []);


return(
<div id="pagina">
<p><b>{tienda.nombre}</b></p>
<p><b>{tienda.telefono}</b></p>
  <img className="fototienda" src={tienda.link_img}></img>
        <Link to={`/${tienda.email}/stock`}>
<button className="boton">Ver</button></Link>  
</div>

);
   
}