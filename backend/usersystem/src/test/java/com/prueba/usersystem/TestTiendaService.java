package com.prueba.usersystem;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;


import com.prueba.usersystem.model.Vendedor;
import com.prueba.usersystem.model.Tienda;

import com.prueba.usersystem.repository.VendedorRepository;
import com.prueba.usersystem.repository.TiendaRepository;
@SpringBootTest
public class TestTiendaService {
    @Autowired
    private VendedorRepository repo2;

    @Autowired
    private TiendaRepository repo;

    //Comprueba que se obtienen la tienda asociada al vendedor.
    @Test
    public void dueñoTienda() {
        Vendedor vendedor = new Vendedor();
        vendedor.setEmail("asdasdasd");
        vendedor.setnif(90230032);
        repo2.save(vendedor);

        Tienda tienda = new Tienda();
        tienda.setEmail("tienda@prueba.com");
        tienda.setVendedor(vendedor);
        repo.save(tienda);

        Tienda tienda2 = repo.findByNif(tienda.getVendedor().getnif());
        assertEquals(tienda2.getEmail(), tienda.getEmail());

    }

}
