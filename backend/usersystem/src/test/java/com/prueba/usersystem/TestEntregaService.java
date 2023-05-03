package com.prueba.usersystem;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;


import com.prueba.usersystem.model.Entrega;
import com.prueba.usersystem.model.Usuario;

import com.prueba.usersystem.repository.UsuarioRepository;
import com.prueba.usersystem.repository.EntregaRepository;


@SpringBootTest
public class TestEntregaService {
    @Autowired
    private UsuarioRepository repo2;

    @Autowired
    private EntregaRepository repo;
    

    // Comprueba la creación correcta de las entregas por el ID. El id está creado de tal forma que se autoconfigura 
    // en la base de datos, por lo que no se puede asignar un id en concreto y habrá que empezar en 44.
    
    @Test
    final void entregaById (){
        Entrega entrega = new Entrega();
        entrega.setId(44);
        entrega.setPrecioTotal(100);

        repo.save(entrega);

        Entrega entrega2 = repo.findById(entrega.getId());
        assertEquals(entrega2.getId(), entrega.getId());
    }
    
    //Comprueba que se devuelve la lista de entregas asociadas a un NIF determinado.
    @Test
    final void pedidoByNif (){
        Usuario usuario = new Usuario();
        usuario.setNombre("Juan");
        usuario.setEmail("email@mail.com");
        usuario.setnif(12341234);
        repo2.save(usuario);

        Entrega entrega = new Entrega();
        entrega.setId(44);
        entrega.setPrecioTotal(100);
        entrega.setUsuario(usuario);
        repo.save(entrega);

        List<Entrega> entrega2 = repo.findByNif(entrega.getUsuario().getnif());
        assertEquals(entrega.getUsuario().getnif(), entrega2.get(0).getUsuario().getnif());
    }
    
}
