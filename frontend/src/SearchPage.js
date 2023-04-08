import {useState} from "react";
import {Link} from "react-router-dom";
import './css/SearchPage.css';

export default function SearchPage(props) {

  const [searchInput, setSearchInput] = useState("");
  const [filtro, setFiltro] = useState("");
  const [selector, setSelector] = useState("All");
 
  const filtrar = () => {
    setFiltro(searchInput);
  }

    return (<div>
    <h2 className="catalogo">Tiendas</h2>
    <input id="filtro" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} placeholder="Nombre de la tienda"></input>
    <button id="buscador" onClick={() => filtrar()}>Buscar</button>
    <div>
  <label htmlFor="category">Elige una categoría:      </label>
    <select name="categoria" id="selector" onChange={(event) => setSelector(event.target.value)}>
      <option value="All" defaultValue>All</option>
        {props.theproducts.reduce((unico, item) =>
          !unico.includes(item.category) ? [...unico, item.category] : unico, []
        ).map((item,key) => (
          <option key={key} value={item.category}>{item}</option>
        ))}
    </select>
  </div>
   <div id="productosresultados">
    <ul id="lista">
    {props.theproducts.filter(item => (selector != "All" ? (item.category.includes(selector)):(item.category.includes("")))).filter(item => (item.title.toLowerCase().includes(filtro))).map(item => (
      <li key={item.id} className="unproducto">
        <img src={item.thumbnail}></img>
        <p><b>{item.title}</b></p>  
        <p><b>{item.description}</b></p>  
        <Link to={"/products/"+ props.theproducts.indexOf(item)}><button className="boton">Ver</button></Link>  
      </li>
    ))}
  </ul>
  </div>
</div>)
}