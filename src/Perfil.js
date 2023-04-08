import { Link } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./css/Perfil.css";
import { useState, useEffect } from "react";

export default function Perfil(props) {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const apellidos = JSON.parse(localStorage.getItem("apellidos"));
  const calle = JSON.parse(localStorage.getItem("calle"));
  const telefono = JSON.parse(localStorage.getItem("telefono"));
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
    localStorage.removeItem("usuario");
    localStorage.removeItem("ahora");
    localStorage.removeItem("apellidos");
    localStorage.removeItem("calle");
    localStorage.removeItem("telefono");
  };

  return (
    localStorage.getItem("usuario") ? 
    <div id="perfil">
      <>
        <h3 className="mensaje">{usuario}</h3>
        <h3 className="mensaje">{apellidos}</h3>
        <h3 className="mensaje">{calle}</h3>
        <h3 className="mensaje">{telefono}</h3>
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
