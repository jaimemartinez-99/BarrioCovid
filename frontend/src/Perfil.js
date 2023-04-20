import { Link } from "react-router-dom";
import "./css/Perfil.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Perfil(props) {
  const nombre = localStorage.getItem("nombre");
  const direccion = localStorage.getItem("direccion");
  const telefono = JSON.parse(localStorage.getItem("telefono"));
  const voluntario = JSON.parse(localStorage.getItem("voluntario"));
  const tRecogida = JSON.parse(localStorage.getItem("tRecogida"));
  const user = JSON.parse(localStorage.getItem("usuario"));
  

  const [fechaEntrega, setFechaEntrega] = useState(null);
  const [entrega, setEntrega] = useState([]);
  const [entregasVoluntario, setEntregasVoluntario] = useState([]);

  const ahora = new Date();
  const tRecogidaNum = parseInt(tRecogida);
  ahora.setMinutes(ahora.getMinutes() + tRecogidaNum);


  useEffect(() => {
    if (tRecogida) {
      ahora.setMinutes(ahora.getMinutes() + tRecogidaNum);
      setFechaEntrega(ahora);
      localStorage.setItem("ahora", JSON.stringify(fechaEntrega));
    }
  }, [tRecogida]);

  const handleLogout = () => {
    localStorage.removeItem("nombre");
    localStorage.removeItem("direccion");
    localStorage.removeItem("telefono");
    localStorage.removeItem("ahora");
    localStorage.removeItem("tRecogida");
    localStorage.removeItem("carrito");
    localStorage.removeItem("comercio");
    localStorage.removeItem("voluntario");
    localStorage.removeItem("nif");
    localStorage.removeItem("id");
    localStorage.removeItem("usuario");
  };
  
  // Hace petición GET para recibir todas las entregas con el mismo NIF
  useEffect(() => {
    fetch(`http://localhost:8080/entrega/getAll/nif/${user.nif}`)
    .then((res) => res.json())
    .then((result) => {
      setEntrega(result);
      console.log(result)
    }); 
  }, []);


  // Hace petición GET para recibir todas las entregas que necesiten voluntario

  useEffect(() => {
    fetch(`http://localhost:8080/entrega/getAll/voluntario/true`)
    .then((res) => res.json())
    .then((result) => {
      setEntregasVoluntario(result);
      console.log(result)
    });
  }, []);

  // Hace petición DELETE para borrar una entrega que ya este acabada
   const borrarEntrega = (item) => {
    fetch(`http://localhost:8080/entrega/delete/id/${item.id}`, {
      method: "DELETE",
  }).then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    } else {
       toast.success("¡Entrega terminada! Gracias por usar BarrioCovid!", {
				position: "top-right",
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
        }, 1500);
    }
  })
}

  return ( 
    <div id="perfil">
        <h3 className="mensaje">{nombre}</h3>
        <h3 className="mensaje">{direccion}</h3>
        <h3 className="mensaje">{telefono}</h3>
        {}
        <h3> Mis pedidos </h3>
        {<ul id="lista"> 
        {entrega.length > 0 && 
         entrega.map((item, index) => (
          <li key={index} className="unproducto">
          <p id="negrita"> Dirección usuario: {item.usuario.direccion}</p>
          <p id="negrita"> Precio total:  {item.precioTotal} </p>
          {item.voluntario ? <p className="mensaje">Te llegará la entrega a las 9</p> : <p> Podrá pasar a recoger la entrega a las 9</p> }
          <button id="borrarEntrega1" onClick={() => borrarEntrega(item)}> Entrega finalizada</button>
          </li>
        ))} 
        </ul> }
        {voluntario && entregasVoluntario.length > 0 ? (  
         <div>
          <h3 className="mensaje">Entregas pendientes</h3>
         <ul id="lista">
           {entregasVoluntario.map((item, index) => (
            item.usuario.nombre!==user.nombre ?  (
             <li key={index} className="unproducto">
               <p id="negrita"> Dirección usuario: {item.usuario.direccion}</p>
               <p id="negrita"> Nombre usuario: {item.usuario.nombre}</p>
               <button id="borrarEntrega1" onClick={() => borrarEntrega(item)}> Entrega finalizada</button>
             </li> ) : null 
           ))} 
         </ul>
       </div>
     ) : null}
      <Link to="/">
        <button className="cerrarSesion" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </Link>
      {tRecogida && (
        <>
          <p id="textoRecogida">
            {" "}
            Recuerde que puede pasar a recoger su pedido a las{" "}
            {ahora?.toLocaleTimeString()}.
          </p>
        </>
      )}
      <ToastContainer />
    </div> 
  );
  
}
