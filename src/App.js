import './App.css';
import Header from './Header.js';
import SearchPage from './SearchPage.js';
import { useEffect, useState } from 'react';
import { mockdata } from './constants/products.js';
import { mockdata1 } from './constants/tiendas.js';
import {Route, Routes} from "react-router-dom";
import Producto from './Producto.js';
import NoMatch from './NoMatch.js';
import Perfil from './Perfil.js';
import Carrito from './Carrito.js';
import CONFIG from './config/config';
import InicioScreen from './NavBar.js';
import Inicio from './Inicio.js';
import { DropdownButton, MenuItem } from 'react-bootstrap';

function App() {
  const [cargando, setCargando] = useState(true);
  const [theproducts, setTheproducts] = useState(null);

  const descargar = async () => {
		let productosDescargados;
    if(CONFIG.use_server) {
		try {
			const res = await fetch(CONFIG.server_url);
      productosDescargados= await res.json();
		} catch (e) {
			alert("No se han cargado los datos");
		}
		setTheproducts(productosDescargados.products);
	}else {
    setTheproducts(mockdata1.products);
  }
}

useEffect(() => {
  async function fetchData() {
    await descargar();
      
    setTimeout(()=>{
      setCargando(false);
    },500);		
  }

  fetchData();
}, []);
  
  return (cargando ? <img className="spinner" id="loading" src={"https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"}></img> :
    <div className="App">
      <header className="App-header">
        <Header />
        <InicioScreen></InicioScreen>
      </header>
     <Routes>
     <Route path="/" element={<Inicio />}/>
     <Route path="/Tiendas" element={<SearchPage theproducts={theproducts}/>}/>
     <Route path="/products/:productId" element={<Producto theproducts={theproducts}/>}/>
     <Route path="*" element={<NoMatch/>}/>
     <Route path="/Perfil" element={<Perfil/>}/>
     <Route path="/Carrito" element={<Carrito />}/>
     </Routes> 
    </div>
  );
}

export default App;
