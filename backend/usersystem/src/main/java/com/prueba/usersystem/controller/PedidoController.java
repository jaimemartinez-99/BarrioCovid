package com.prueba.usersystem.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.prueba.usersystem.model.Pedido;
import com.prueba.usersystem.service.PedidoService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/pedido")
@CrossOrigin
public class PedidoController {
    @Autowired
    private PedidoService PedidoService;

    @PostMapping("/add")
    public String add(@RequestBody Pedido Pedido){
        PedidoService.savePedido(Pedido);
        return "New Pedido is added";  
    }

    @GetMapping("/getAll")
    public List<Pedido> getAllPedidos(){
        return PedidoService.getAllPedidos();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getAll/{email}")
    public List<Pedido> getAllPedidosByEmail(@PathVariable String email){
        return PedidoService.getAllPedidosByEmail(email);
    }
    
    @GetMapping("/getAll/nif/{nif}")
    public List<Pedido> getAllPedidosByNif(@PathVariable int nif){
        return PedidoService.getAllPedidosByNif(nif);
    }

    @DeleteMapping("/delete/nif/{nif}")
    public String borrarPedidosPorNif(@PathVariable int nif){
         PedidoService.borrarPedidoPorNif(nif);
         return "Pedidos borrados";
    }
}
