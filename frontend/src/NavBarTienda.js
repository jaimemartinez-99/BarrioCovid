import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import './css/Navbar.css';

export default function NavBarTienda(props) {
    return (
        localStorage.getItem("usuario") ?
    <div>
        <NavLink className ="nav-links" exact to="/">Inicio</NavLink>
        <NavLink className ="nav-links" to="/Perfil">Perfil</NavLink>
        <NavLink className ="nav-links" to="/MiTienda">Mi Tienda</NavLink>
        <NavLink className ="nav-links"  to="/Pedidos">Pedidos</NavLink> 
        </div>
      : 
      <div>
      <NavLink className ="nav-links" exact to="/">Inicio</NavLink>
        <NavLink className ="nav-links" to="/Tiendas">Tiendas</NavLink>
      </div> 
)
}

