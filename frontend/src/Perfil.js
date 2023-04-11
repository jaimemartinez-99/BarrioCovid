import { Link } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./css/Perfil.css";
import { useState, useEffect } from "react";

export default function Perfil(props) {
  const nombre = localStorage.getItem("nombre");
  const direccion = localStorage.getItem("direccion");
  const telefono = JSON.parse(localStorage.getItem("telefono"));
  const voluntario = JSON.parse(localStorage.getItem("voluntario"));
  const tRecogida = JSON.parse(localStorage.getItem("tRecogida"));

  const [fechaEntrega, setFechaEntrega] = useState(null);

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
  };

  return (
    localStorage.getItem("nombre") ? 
    <div id="perfil">
      <>
        <h3 className="mensaje">{nombre}</h3>
        <h3 className="mensaje">{direccion}</h3>
        <h3 className="mensaje">{telefono}</h3>
        {voluntario ? <h3 className="mensaje">Soy voluntario</h3> : null }
      </>

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
    </div> : 
    <Link to="/">
    <button id="volverInicio"> Volver a inicio </button>
    </Link>
  );
}
