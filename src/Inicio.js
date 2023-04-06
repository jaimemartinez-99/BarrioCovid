import {useState} from "react";
import './Inicio.css';
import image from "./barriocovid.png"


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

    return (<div id="total">
        <h3 className="mensaje">Bienvenido a BarrioCovid</h3>
        <div id="cabecera">
        
        
        <h4 className="textoUser"> Si ya tiene cuenta creada identifíquese
        <div id="botonesLogin">
        <input id="usuario" value={usuarioInput} onChange={(event) => setUsuarioInput(event.target.value)} placeholder="Nombre de usuario..."></input>
        <br />
        <input id="pass" type="password" value={passInput} onChange={(event) => setPassInput(event.target.value)} placeholder="Introduzca contraseña..."></input>
        <br />
        <button className = "login" to="/Login">Login</button>
        </div>
        </h4>

        <img src={image}/>
        <h4 className="textoRegistro"> Si desea crear una cuenta, rellene el formulario
        <div id="botonesSignin">
        <input id="user" value={usuarioInput1} onChange={(event) => setUsuarioInput1(event.target.value)} placeholder="Nombre de usuario..."></input>
        <br />
        <input id="contraseña" type="password" value={passInput1} onChange={(event) => setPassInput1(event.target.value)} placeholder="Introduzca contraseña..."></input>
        <br />
        <input id="NIF" value={NIFInput} onChange={(event) => setNIFInput(event.target.value)} placeholder="Introduzca su NIF..."></input>
        <br />
        <input id="email" value={EmailInput} onChange={(event) => setEmailInput(event.target.value)} placeholder="Introduzca su email..."></input>
        <br />
        <input id="nombre" value={NombreInput} onChange={(event) => setNombreInput(event.target.value)} placeholder="Introduzca su nombre..."></input>
        <br />
        <input id="direccion" value={DireccionInput} onChange={(event) => setDireccionInput(event.target.value)} placeholder="Introduzca su dirección..."></input>
        <br />
        <input id="telefono" value={TelefonoInput} onChange={(event) => setTelefonoInput(event.target.value)} placeholder="Introduzca su teléfono..."></input>
        <br />
        <input id="telefono" value={TelefonoInput} onChange={(event) => setTelefonoInput(event.target.value)} placeholder="Introduzca su teléfono..."></input>
        <br />
        <div id="voluntario">
        <input type="checkbox" checked={estaMarcado} onChange={() => setEstaMarcado(!estaMarcado)} />
        <span>¿Quieres registrarte como voluntario?</span>
        <br />
        </div>
        <button className = "registro" to="/Login">Registrarse</button>
        </div>
        </h4>
    </div>
    </div>)
}

//nif, nombre, direccion, contraseña, email, tlfno