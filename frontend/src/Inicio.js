import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import './css/Inicio.css';
import image from "./images/barriocovid1.png"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Inicio(props) {
    const [usuarioInput, setUsuarioInput] = useState("");
    const [passInput, setPassInput] = useState("");
    const [nombre, setNombre] = useState();
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const [NIF, setNIF] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [voluntario, setVoluntario] = useState(false);
    const [listaUsers,setlistaUsers] = useState([]);
    const [listaTiendas,setlistaTiendas] = useState([]);

    const handleClick=(e)=>{
        e.preventDefault()
        const usuarioBBDD={nombre,usuario,direccion,email,pass,NIF,telefono,voluntario};
        console.log(usuarioBBDD);
        fetch("http://localhost:8080/usuario/add",{
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            body:JSON.stringify(usuarioBBDD)
        }).then(() => {
            toast.success("¡Bienvenido a BarrioCovid!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              setTimeout(() => {
                window.location.reload();
              }, 3000);
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/usuario/getAll")
        .then(res=> res.json())
        .then((result)=>{
            setlistaUsers(result);
            console.log(result);
        }
        )
    },[])

    useEffect(() => {
        fetch("http://localhost:8080/vendedor/getAll")
        .then(res=> res.json())
        .then((result)=>{
            setlistaTiendas(result);
            console.log(result);
        }
        )
    },[])



    const handleLogin = () => {
        if (listaUsers.some(user => user.email === usuarioInput && user.pass === passInput)) {
            toast.success("Sesión iniciada. ¡Disfrute de BarrioCovid!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            const usuario = listaUsers.find(user => user.email === usuarioInput);
            const { nombre, direccion, telefono } = usuario;
            localStorage.setItem('nombre', nombre);
            localStorage.setItem('direccion', direccion);
            localStorage.setItem('telefono', telefono);    
        } else {
            toast.error("Usuario Incorrecto.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
        }
      };

      const handleLoginTienda = () => {
        if (listaTiendas.some(user => user.email === usuarioInput && user.pass === passInput)) {
            toast.success("Sesión iniciada. ¡Disfrute de BarrioCovid!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            const usuario = listaTiendas.find(user => user.email === usuarioInput);
            const { nombre, direccion, telefono, vendedor } = usuario;
            localStorage.setItem('nombre', nombre);
            localStorage.setItem('direccion', direccion);
            localStorage.setItem('telefono', telefono);  
            localStorage.setItem('vendedor', 'true');
        } else {
            toast.error("Usuario Incorrecto.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
        }
      };


    return (
    <div id="total">
        <h3 className="mensaje">Bienvenido a BarrioCovid</h3>
        <div id="cabecera">
        
        
        <h4 className="textoUser"> Si ya tiene cuenta creada identifíquese
        <div id="inputUser">
        <input id="usuario" value={usuarioInput} onChange={(event) => setUsuarioInput(event.target.value)} placeholder="Introduzca su email..."></input>
        <br />
        <input id="pass" type="password" value={passInput} onChange={(event) => setPassInput(event.target.value)} placeholder="Introduzca contraseña..."></input>
        <br />
        </div>
        <button className = "login" onClick={handleLogin}>Iniciar sesión </button>
        <button className = "loginTienda" onClick={handleLoginTienda}>Iniciar sesión a tienda</button>
        </h4>

        <img src={image}/>
        <h4 className="textoRegistro"> Si desea crear una cuenta, rellene el formulario
        <div id="botonesSignin">
        <input id="inputsFormulario" value={usuario} onChange={(event) => setUsuario(event.target.value)} placeholder="Nombre de usuario..."></input>
        <br />
        <input id="inputsFormulario" type="password" value={pass} onChange={(event) => setPass(event.target.value)} placeholder="Introduzca contraseña..."></input>
        <br />
        <input id="inputsFormulario" value={NIF} onChange={(event) => setNIF(event.target.value)} placeholder="Introduzca su NIF..."></input>
        <br />
        <input id="inputsFormulario" value={nombre} onChange={(event) => setNombre(event.target.value)} placeholder="Introduzca su nombre..."></input>
        <br />
        <input id="inputsFormulario" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Introduzca su email..."></input>
        <br />
        <input id="inputsFormulario" value={direccion} onChange={(event) => setDireccion(event.target.value)} placeholder="Introduzca su dirección..."></input>
        <br />
        <input id="inputsFormulario" value={telefono} onChange={(event) => setTelefono(event.target.value)} placeholder="Introduzca su teléfono..."></input>
        <br />
        </div>
        <div id="voluntario">
        <input type="checkbox" className="checkbox" checked={voluntario} onChange={() => setVoluntario(!voluntario)} />
        <span id="span">¿Quieres registrarte como voluntario?</span>
        <br />
        </div>
        <button className = "registro" to="/Login" onClick={handleClick}>Registrarse</button>
        </h4>
    </div>
    <ToastContainer />
    </div>)
}
