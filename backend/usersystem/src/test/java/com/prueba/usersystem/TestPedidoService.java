package com.prueba.usersystem;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;


import com.prueba.usersystem.model.Pedido;
import com.prueba.usersystem.model.Usuario;

import com.prueba.usersystem.repository.PedidoRepository;
import com.prueba.usersystem.repository.UsuarioRepository;


@SpringBootTest
public class TestPedidoService {
    @Autowired
    private PedidoRepository repo;

    @Autowired
    private UsuarioRepository repo2;
    

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
    // Comprueba que se devuelve la lista correcta de pedidos al dar un NIF determinado.
    @Test
    final void pedidoByNif (){
        Usuario usuario = new Usuario();
        usuario.setNombre("Juan");
        usuario.setEmail("email@mail.com");
        usuario.setnif(12341234);
        repo2.save(usuario);

        Pedido pedido = new Pedido();
        pedido.setId(44);
        pedido.setPrecio(100);
        pedido.setUsuario(usuario);
        repo.save(pedido);

        List<Pedido> pedido2 = repo.findByNif(pedido.getUsuario().getnif());
        assertEquals(pedido.getUsuario().getnif(), pedido2.get(0).getUsuario().getnif());
    }
}
