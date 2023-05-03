package com.prueba.usersystem;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;


import com.prueba.usersystem.model.Producto;
import com.prueba.usersystem.model.Tienda;

import com.prueba.usersystem.repository.ProductoRepository;
import com.prueba.usersystem.repository.TiendaRepository;
@SpringBootTest
public class TestProductoService {
    @Autowired
    private ProductoRepository repo;

    @Autowired
    private TiendaRepository repo2;

    //Comprueba que se obtienen los productos adecuados al proporcionar un email.
    @Test
    public void productosTienda() {
        Tienda tienda = new Tienda();
        tienda.setEmail("tienda@prueba.com");
        repo2.save(tienda);
        Producto producto = new Producto();
        producto.setNombre("Producto1");
        producto.setPrecio(100);
        producto.setLink_img("www.hola.com");
        producto.setTienda(tienda);
        repo.save(producto);

        List<Producto> producto2 = repo.findByEmail(producto.getTienda().getEmail());
        assertEquals(producto2.get(0).getTienda().getEmail(), producto.getTienda().getEmail());

    }

}
