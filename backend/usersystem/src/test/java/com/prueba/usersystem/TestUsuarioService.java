package com.prueba.usersystem;
import static org.junit.jupiter.api.Assertions.assertEquals;




import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;


import com.prueba.usersystem.model.Usuario;
import com.prueba.usersystem.repository.UsuarioRepository;

@SpringBootTest
public class TestUsuarioService {
    @Autowired
    private UsuarioRepository repo;

    @Test
    final void testSaveUsuario() {
        Usuario usuario = new Usuario();
        usuario.setNombre("Juan");
        usuario.setEmail("email@mail.com");
        repo.save(usuario);

        Usuario usuario2 = repo.findByEmail(usuario.getEmail());
        assertEquals(usuario.getEmail(), usuario2.getEmail());
        assertEquals(usuario2.getNombre(), "Juan");
    }
}
