import  {useState, useEffect} from 'react';
import './css/Pedidos.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Pedidos(props){
    const [pedidos, setPedidos] = useState([]);
    const tienda = JSON.parse(localStorage.getItem("tienda" ));	
    
     useEffect (() => {
        fetch(`http://localhost:8080/pedido/getAll/${tienda.email}`)
        .then((res) => res.json())
        .then((result) => {
            setPedidos(result);
            console.log(result);
        });
    }, []); 

    const borrarPedido = (item) => {
        fetch(`http://localhost:8080/pedido/delete/id/${item.id}`, {
            method: "DELETE",
        }).then(response => {
          if (!response.ok) {
            throw new Error("HTTP error " + response.status);
          } else {
             toast.success("¡Pedido listo!", {
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
            
    //peticion get para recibir pedidos que tengan el mismo email que la tienda del dueño.
    // Hacer un map mostrando la información de los pedidos
    return(
        <div>
        <div> 
        <ul id="mapeo">
            {pedidos.map((item, index) => (
              <li key={index}>
                {item.id}
                <p>Pedido de: {item.usuario.nombre}  </p>
                <p>Dirección: {item.usuario.direccion}</p>
                {item.productos.map((item1, index1) => (
                  <li key={index1}>
                  <p>{item1.nombre}: {item1.precio}€</p>
                  </li>
                  ))}
                <p> <b> El precio final ha sido de: {item.precio}€ </b> </p>
                <button id="botonpedidos" onClick={() => borrarPedido(item)}> Pedido completado </button>
              </li>   
            ))}
  </ul>
  </div>
  <ToastContainer />
  </div>
        
    );
}
