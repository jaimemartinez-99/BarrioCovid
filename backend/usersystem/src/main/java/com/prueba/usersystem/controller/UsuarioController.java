package com.prueba.usersystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.prueba.usersystem.model.Usuario;
import com.prueba.usersystem.service.UsuarioService;


@RestController
@RequestMapping("/usuario")
@CrossOrigin
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/add")
    public String add(@RequestBody Usuario usuario){
        usuarioService.saveUsuario(usuario);
        return "New usuario is added";
    }
    @GetMapping("/getAll")
    public List<Usuario> getAllUsuarios(){
        return usuarioService.getAllUsuarios();
    }
}