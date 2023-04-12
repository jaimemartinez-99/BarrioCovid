import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import './css/Registro.css';
import image from "./images/barriocovid1.png"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Registro(props) {
    const [nombre, setNombre] = useState();
    const [usuario, setUsuario] = useState();
    const [pass, setPass] = useState();
    const [nif, setnif] = useState();
    const [email, setEmail] = useState();
    const [direccion, setDireccion] = useState();
    const [telefono, setTelefono] = useState();
    const [voluntario, setVoluntario] = useState(false);

    const handleClick=(e)=>{
      e.preventDefault()
      const usuarioBBDD={nombre,usuario,direccion,email,pass,nif,telefono,voluntario};
      console.log(usuarioBBDD);
      if ((usuarioBBDD.usuario==null) ||  (usuarioBBDD.nombre==null)  || (usuarioBBDD.direccion==null) || (usuarioBBDD.email==null) || (usuarioBBDD.pass==null) || (usuarioBBDD.nif==null) || (usuarioBBDD.telefono==null) || (usuarioBBDD.voluntario==null)){
        toast.error("Faltan datos por rellenar", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
      fetch("http://localhost:8080/usuario/add",{
          method:"POST",
          headers:{ "Content-Type":"application/json"},
          body:JSON.stringify(usuarioBBDD)
      }).then(() => {
          toast.success("¡Bienvenido a BarrioCovid! Recuerde iniciar sesión", {
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
  }


    return (
    <div id="total">
        <h3 className="mensaje">REGISTRO DE USUARIO</h3>
        <div id="cabecera1">
          <div id="botonesSignin">
        <input id="inputsFormulario" value={usuario} onChange={(event) => setUsuario(event.target.value)} placeholder="Nombre de usuario..."></input>
        <br />
        <input id="inputsFormulario" type="password" value={pass} onChange={(event) => setPass(event.target.value)} placeholder="Introduzca contraseña..."></input>
        <br />
        <input id="inputsFormulario" value={nif} onChange={(event) => setnif(event.target.value)} placeholder="Introduzca su NIF..."></input>
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
        <button className = "registro" onClick={handleClick}>Registrarse</button>
        <br />
        </div>
        </div>
    <ToastContainer />
    </div> )
}