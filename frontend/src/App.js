import './css/App.css';
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
import InicioScreen from './NavBar.js';
import Inicio from './Inicio.js';


function App() {
  const [theproducts, setTheproducts] = useState(mockdata1.products);
  const [tiendas, setTiendas] = useState(mockdata.products);

  
  return (
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
     <Route path="/Carrito" element={<Carrito/>}/>
     </Routes> 
    </div>
  );
}

export default App;
