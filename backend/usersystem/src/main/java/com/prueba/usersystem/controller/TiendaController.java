package com.prueba.usersystem.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.prueba.usersystem.model.Tienda;
import com.prueba.usersystem.service.TiendaService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/tienda")
@CrossOrigin
public class TiendaController {
    @Autowired
    private TiendaService TiendaService;
    @PostMapping("/add")
    public String add(@RequestBody Tienda Tienda){
        TiendaService.saveTienda(Tienda);
        return "New Tienda is added" + Tienda.getVendedor();
        
    }

    @GetMapping("/getAll")
    public List<Tienda> getAllTiendas(){
        return TiendaService.getAllTiendas();
    }
    
}
