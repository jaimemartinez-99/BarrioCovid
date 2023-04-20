import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './css/MiTienda.css';

export default function MiTienda (props) {
  const [tienda, setTienda] = useState([]);
  localStorage.setItem("tienda", JSON.stringify(tienda))

  useEffect(() => {
    const fetchTienda = async () => {
      try {
        const response = await fetch(`http://localhost:8080/tienda/getAll/${localStorage.getItem("nif")}`);
        const data = await response.json();
        setTienda(data);
        localStorage.setItem("tienda", JSON.stringify(data));
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchTienda();
  }, []);


return(
<div id="pagina">
<p><b>{tienda.nombre}</b></p>
<p><b>{tienda.direccion}</b></p>
<p><b>{tienda.telefono}</b></p>
  <img className="fototienda" src={tienda.link_img}></img>
        <Link to={`/${tienda.email}/stock`}>
<button className="boton">Ver</button></Link>  
</div>

);
   
}