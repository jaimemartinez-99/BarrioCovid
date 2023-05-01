package com.prueba.usersystem;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.util.List;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;


import com.prueba.usersystem.model.Usuario;
import com.prueba.usersystem.repository.UsuarioRepository;

@SpringBootTest
public class TestUsuarioService {
    @Autowired
    private UsuarioRepository repo;


    //Comprobación de que el usuario se guarda correctamente al asignarlo por el mail
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

    // Comprobación de que el usuario se elimina correctamente
    @Test
    final void testFindByEmail() {
        Usuario usuario = new Usuario();
        usuario.setNombre("Juan");
        usuario.setEmail("email@mail.com");
        repo.save(usuario);

        repo.delete(usuario);
        Usuario usuario2 = repo.findByEmail(usuario.getEmail());
        assertNull(usuario2);
    }

    //Comprobación de que el usuario se actualiza correctamente al cambiarle el nombre
    @Test
    final void testUpdateUsuario(){
        Usuario usuario = new Usuario();
        usuario.setNombre("Juan");
        usuario.setEmail("email@mail.com");
        repo.save(usuario);

        usuario.setNombre("Carlos");
        repo.save(usuario);

        Usuario usuario2 = repo.findByEmail(usuario.getEmail());
        assertEquals(usuario2.getNombre(), "Carlos");

    }
    // Comprobación del método findAll
    @Test
    final void testFindAllUsuarios() {
    // Crear varios usuarios y guardarlos en el repositorio
    Usuario usuario1 = new Usuario();
    usuario1.setNombre("Juan");
    usuario1.setEmail("email1@mail.com");
    repo.save(usuario1);

    Usuario usuario2 = new Usuario();
    usuario2.setNombre("Maria");
    usuario2.setEmail("email2@mail.com");
    repo.save(usuario2);

    Usuario usuario3 = new Usuario();
    usuario3.setNombre("Pedro");
    usuario3.setEmail("email3@mail.com");
    repo.save(usuario3);

    // Obtener todos los usuarios del repositorio
    List<Usuario> usuarios = repo.findAll();

    // Verificar que se hayan guardado todos los usuarios. Da error puesto que hay guardados 3 usuarios de base para probar la aplicación Web
    // Devuelve que el tamaño real son 6 usuarios, que si restamos los 3 creados en este test, nos da 3, que es el tamaño que debería tener.
    assertEquals(3, usuarios.size());

    // Verificar que los nombres de los usuarios sean correctos
    assertEquals(usuario1.getNombre(), usuarios.get(0).getNombre());
    assertEquals(usuario2.getNombre(), usuarios.get(1).getNombre());
    assertEquals(usuario3.getNombre(), usuarios.get(2).getNombre());
}
    
}
