package com.prueba.usersystem.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prueba.usersystem.model.Producto;
import com.prueba.usersystem.repository.ProductoRepository;

@Service
public class ProductoServiceImpl implements ProductoService{
    @Autowired
    private ProductoRepository ProductoRepository;

    @Override
    public Producto saveProducto(Producto Producto){
        return ProductoRepository.save(Producto);

    }

    @Override
    public List<Producto> getAllProductos(){
        return ProductoRepository.findAll();
    }

    @Override
    public List<Producto> getAllProductosByEmail(String email){
        return ProductoRepository.findByEmail(email);
    }
   
}
