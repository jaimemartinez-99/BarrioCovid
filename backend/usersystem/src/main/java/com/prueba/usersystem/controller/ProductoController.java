package com.prueba.usersystem.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.prueba.usersystem.model.Producto;
import com.prueba.usersystem.service.ProductoService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/producto")
@CrossOrigin
public class ProductoController {
    @Autowired
    private ProductoService ProductoService;
    @PostMapping("/add")
    public String add(@RequestBody Producto Producto){
        ProductoService.saveProducto(Producto);
        return "New Producto is added";
        
    }

    @GetMapping("/getAll")
    public List<Producto> getAllProductos(){
        return ProductoService.getAllProductos();
    }

    @GetMapping("/getAll/{email}")
    public List<Producto> getAllProductosByEmail(@PathVariable String email){
        return ProductoService.getAllProductosByEmail(email);
    }
    @DeleteMapping("/delete/nombre/{nombre}")
    public String borrarProductoPorNombre(@PathVariable String nombre){
         ProductoService.borrarProductoPorNombre(nombre);
         return "Producto borrado";
    }
    
}
