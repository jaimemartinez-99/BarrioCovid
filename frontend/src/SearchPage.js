import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './css/SearchPage.css';


export default function SearchPage(props) {

  const [searchInput, setSearchInput] = useState("");
  const [filtro, setFiltro] = useState("");
  const [selector, setSelector] = useState("All");
  const [listaTiendas,setlistaTiendas] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8080/tienda/getAll")
      .then((res) => res.json())
      .then((result) => {
        setlistaTiendas(result);
        console.log(result);
      });
  }, []);
  
  const filtrar = () => {
    setFiltro(searchInput);
  }

    return (
    <div>
    <h2 className="catalogo">Tiendas</h2>
    <input id="filtro" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} placeholder="Nombre de la tienda"></input>
    <button id="buscador" onClick={() => filtrar()}>Buscar</button>
    
   <div id="productosresultados">
    <ul id="lista"> 
    {listaTiendas.filter(item => (item.nombre.toLowerCase().includes(filtro))).map(item => (
      <li key={item.email} className="unproducto">
        <img src={item.link_img}></img>
        <p><b>{item.nombre}</b></p>  
        <p><b>{item.telefono}</b></p>
        <p><b>{item.direccion}</b></p>     
        <Link to={`/${item.email}`}>
          <button className="boton">Ver</button></Link>  
      </li>
    ))}
  </ul>
  </div>
  </div>
    );
}