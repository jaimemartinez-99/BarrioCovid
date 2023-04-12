import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import './css/Inicio.css';
import image from "./images/barriocovid1.png"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Inicio(props) {
    return (
    <div id="total">
      <img src={image}/>
        <div id="cabecera">
        <Link to="/InicioSesion">
        <button className = "login1">Iniciar sesión</button>
        </Link>
        <Link to="/Registro">
        <button className = "registrarse">Registrarse</button>
        </Link>
    </div>
    <ToastContainer />
    </div>)
}
