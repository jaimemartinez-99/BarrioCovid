package com.prueba.usersystem.service;

import java.util.List;

import com.prueba.usersystem.model.Producto;

public interface ProductoService {
    public Producto saveProducto (Producto Producto);
    public List<Producto> getAllProductos();
    public List<Producto> getAllProductosByEmail(String email);
}
