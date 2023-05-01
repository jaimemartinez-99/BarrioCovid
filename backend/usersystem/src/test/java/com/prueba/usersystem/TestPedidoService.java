package com.prueba.usersystem;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.util.List;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;


import com.prueba.usersystem.model.Pedido;
import com.prueba.usersystem.repository.PedidoRepository;

@SpringBootTest
public class TestPedidoService {
    @Autowired
    private PedidoRepository repo;
    

    // Comprueba la creación correcta de los pedidos por el ID. El id está creado de tal forma que se autoconfigura 
    // en la base de datos, por lo que no se puede asignar un id en concreto y habrá que empezar en 44.
    
    @Test
    final void pedidoById (){
        Pedido pedido = new Pedido();
        pedido.setId(44);
        pedido.setPrecio(100);

        repo.save(pedido);

        Pedido pedido2 = repo.findById(pedido.getId());
        assertEquals(pedido.getId(), pedido2.getId());
    }
}
