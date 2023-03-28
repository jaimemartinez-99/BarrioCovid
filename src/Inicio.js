import {useState} from "react";
import './Inicio.css';


export default function Inicio(props) {
    const [usuarioInput, setUsuarioInput] = useState("");
    const [passInput, setPassInput] = useState("");

    return (<div id="cabecera">
        
        <h3 className="mensaje">Bienvenido a BarrioCovid</h3>
        <h4 className="textoUser"> Si ya tiene cuenta creada identifíquese
        <div id="botonesLogin">
        <input id="usuario" value={usuarioInput} onChange={(event) => setUsuarioInput(event.target.value)} placeholder="Nombre de usuario..."></input>
        <br />
        <input id="pass" value={passInput} onChange={(event) => setPassInput(event.target.value)} placeholder="Introduzca contraseña..."></input>
        <br />
        <button className = "login" to="/Login">Login</button>
        </div>
        </h4>
    </div>)
}