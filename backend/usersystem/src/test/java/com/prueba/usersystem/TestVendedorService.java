package com.prueba.usersystem;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;

import com.prueba.usersystem.model.Vendedor;
import com.prueba.usersystem.repository.VendedorRepository;

@SpringBootTest
public class TestVendedorService {
    @Autowired
    private VendedorRepository repo;
    
    @Test
    public void testCrearVendedor() {
        
        // Crear un nuevo vendedor
        Vendedor vendedor = new Vendedor();
        vendedor.setnif(123456789);
        vendedor.setNombre("Juan Perez");
        vendedor.setEmail("juan.perez@mail.com");
        vendedor.setPass("password");
        vendedor.setTelefono(123456789);
        vendedor.setDireccion("Calle Falsa 123");
        repo.save(vendedor);
        // Verificar que se haya creado correctamente
        assertNotNull(vendedor);
        assertEquals(123456789, vendedor.getnif());
        assertEquals("Juan Perez", vendedor.getNombre());
        assertEquals("juan.perez@mail.com", vendedor.getEmail());
        assertEquals("password", vendedor.getPass());
        assertEquals(123456789, vendedor.getTelefono());
        assertEquals("Calle Falsa 123", vendedor.getDireccion());
    }

    @Test
    public void testEquals() {
        // Crear dos vendedores con el mismo NIF
        Vendedor vendedor = new Vendedor();
        vendedor.setnif(123456789);
        vendedor.setNombre("Juan Perez");
        vendedor.setEmail("juan.perez@mail.com");
        vendedor.setPass("password");
        vendedor.setTelefono(123456789);
        vendedor.setDireccion("Calle Falsa 123");
        repo.save(vendedor);

        Vendedor vendedor2 = repo.findByEmail(vendedor.getEmail());
        assertEquals(vendedor2.getEmail(), vendedor.getEmail());
        assertEquals(vendedor.getnif(), 123456789);
    }
}
