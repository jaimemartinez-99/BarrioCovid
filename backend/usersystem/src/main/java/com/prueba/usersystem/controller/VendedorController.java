package com.prueba.usersystem.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.prueba.usersystem.model.Vendedor;
import com.prueba.usersystem.service.VendedorService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/vendedor")
@CrossOrigin
public class VendedorController {
    @Autowired
    private VendedorService vendedorService;

    @PostMapping("/add")
    public String add(@RequestBody Vendedor vendedor){
        vendedorService.saveVendedor(vendedor);
        return "New vendedor is added";
    }

    @GetMapping("/getAll")
    public List<Vendedor> getAllVendedores(){
        return vendedorService.getAllVendedores();
    } 
}
