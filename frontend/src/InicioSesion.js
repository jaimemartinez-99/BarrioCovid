import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import './css/InicioSesion.css';
import image from "./images/barriocovid1.png"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function InicioSesion(props) {
  const [usuarioInput, setUsuarioInput] = useState("");
    const [passInput, setPassInput] = useState("");
    const [listaUsers,setlistaUsers] = useState([]);
    const [listaTiendas,setlistaTiendas] = useState([]);

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
        const { nombre, direccion, telefono, voluntario, id } = usuario;
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('direccion', direccion);
        localStorage.setItem('telefono', telefono);  
        localStorage.setItem('voluntario', voluntario); 
        localStorage.setItem('id', id);
        setTimeout(() => {
            window.location.reload();
          }, 2000);  
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
        const { nombre, direccion, telefono, nif} = usuario;
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('direccion', direccion);
        localStorage.setItem('telefono', telefono);  
        localStorage.setItem('nif', nif);

        setTimeout(() => {
            window.location.reload();
          }, 2000);
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
      <h4 className="textoUser"> INICIE SESIÓN </h4>
        <div id="inputUser">
        <input id="usuario" value={usuarioInput} onChange={(event) => setUsuarioInput(event.target.value)} placeholder="Introduzca su email..."></input>
        <br />
        <input id="pass" type="password" value={passInput} onChange={(event) => setPassInput(event.target.value)} placeholder="Introduzca contraseña..."></input>
        <br />
        </div>
      <button className = "login2" onClick={handleLogin}>Iniciar sesión como usuario </button>
      <button className = "login2" onClick={handleLoginTienda}>Iniciar sesión como tienda </button>
    <ToastContainer />
    </div>)
}
