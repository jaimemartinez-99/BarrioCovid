import {useState} from "react";
import {NavLink} from "react-router-dom";
import './Navbar.css';

export default function InicioScreen(props) {

    return (<div>

         <NavLink className ="nav-links" exact to="/">Inicio</NavLink>
         <NavLink className ="nav-links" to="/Tiendas">Tiendas</NavLink>
         <NavLink className ="nav-links" to="/Perfil">Perfil</NavLink>
         <NavLink className ="nav-links" to="/Carrito">Carrito</NavLink> 
         

</div>)
}