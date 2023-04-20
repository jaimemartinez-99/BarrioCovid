package com.prueba.usersystem.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.prueba.usersystem.model.Entrega;
import com.prueba.usersystem.service.EntregaService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/entrega")
@CrossOrigin
public class EntregaController {
    @Autowired
    private EntregaService EntregaService;
    @PostMapping("/add")
    public String add(@RequestBody Entrega Entrega){
        EntregaService.saveEntrega(Entrega);
        return "New Entrega is added";
        
    }

    @GetMapping("/getAll")
    public List<Entrega> getAllEntregas(){
        return EntregaService.getAllEntregas();
    }

    @GetMapping("/getAll/nif/{nif}")
    public List<Entrega> getAllEntregasByNif(@PathVariable int nif){
        return EntregaService.getAllEntregasByNif(nif);
    }

    @DeleteMapping("/delete/id/{id}")
    public String borrarEntregaPorId(@PathVariable int id){
         EntregaService.borrarEntregaPorId(id);
         return "Entrega borrada";
    }
    @GetMapping("/getAll/voluntario/{voluntario}")
    public List<Entrega> getAllEntregasByNif(@PathVariable boolean voluntario){
        return EntregaService.getAllEntregasVoluntario(voluntario);
    }
}
