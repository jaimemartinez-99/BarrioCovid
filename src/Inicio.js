import {useState} from "react";
import { Link } from 'react-router-dom';
import './css/Inicio.css';
import image from "./images/barriocovid.png"


export default function Inicio(props) {
    const [usuarioInput, setUsuarioInput] = useState("");
    const [passInput, setPassInput] = useState("");
    const [usuarioInput1, setUsuarioInput1] = useState("");
    const [passInput1, setPassInput1] = useState("");
    const [NIFInput, setNIFInput] = useState("");
    const [EmailInput, setEmailInput] = useState("");
    const [NombreInput, setNombreInput] = useState("");
    const [DireccionInput, setDireccionInput] = useState("");
    const [TelefonoInput, setTelefonoInput] = useState("");
    const [estaMarcado, setEstaMarcado] = useState(false);

    const crearTexto = () => {
        localStorage.setItem("usuario", JSON.stringify(usuarioInput))
        localStorage.setItem("apellidos", JSON.stringify("López Ibáñez"))
        localStorage.setItem("calle", JSON.stringify("C/Cantueso,20"))
        localStorage.setItem("telefono", JSON.stringify("676738042"))
      };

    return (<div id="total">
        <h3 className="mensaje">Bienvenido a BarrioCovid</h3>
        <div id="cabecera">
        
        
        <h4 className="textoUser"> Si ya tiene cuenta creada identifíquese
        <div id="botonesLogin">
        <input id="usuario" value={usuarioInput} onChange={(event) => setUsuarioInput(event.target.value)} placeholder="Nombre de usuario..."></input>
        <br />
        <input id="pass" type="password" value={passInput} onChange={(event) => setPassInput(event.target.value)} placeholder="Introduzca contraseña..."></input>
        <br />
        <Link to="/Perfil">
            <button className = "login" onClick={crearTexto}>Login</button>
        </Link>
        </div>
        </h4>

        <img src={image}/>
        <h4 className="textoRegistro"> Si desea crear una cuenta, rellene el formulario
        <div id="botonesSignin">
        <input id="inputsFormulario" value={usuarioInput1} onChange={(event) => setUsuarioInput1(event.target.value)} placeholder="Nombre de usuario..."></input>
        <br />
        <input id="inputsFormulario" type="password" value={passInput1} onChange={(event) => setPassInput1(event.target.value)} placeholder="Introduzca contraseña..."></input>
        <br />
        <input id="inputsFormulario" value={NIFInput} onChange={(event) => setNIFInput(event.target.value)} placeholder="Introduzca su NIF..."></input>
        <br />
        <input id="inputsFormulario" value={EmailInput} onChange={(event) => setEmailInput(event.target.value)} placeholder="Introduzca su email..."></input>
        <br />
        <input id="inputsFormulario" value={NombreInput} onChange={(event) => setNombreInput(event.target.value)} placeholder="Introduzca su nombre..."></input>
        <br />
        <input id="inputsFormulario" value={DireccionInput} onChange={(event) => setDireccionInput(event.target.value)} placeholder="Introduzca su dirección..."></input>
        <br />
        <input id="inputsFormulario" value={TelefonoInput} onChange={(event) => setTelefonoInput(event.target.value)} placeholder="Introduzca su teléfono..."></input>
        <br />
        </div>
        <div id="voluntario">
        <input type="checkbox" className="checkbox" checked={estaMarcado} onChange={() => setEstaMarcado(!estaMarcado)} />
        <span id="span">¿Quieres registrarte como voluntario?</span>
        <br />
        </div>
        <button className = "registro" to="/Login">Registrarse</button>
        </h4>
    </div>
    </div>)
}

//nif, nombre, direccion, contraseña, email, tlfno