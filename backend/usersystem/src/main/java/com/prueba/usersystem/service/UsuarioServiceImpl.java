package com.prueba.usersystem.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prueba.usersystem.model.Usuario;
import com.prueba.usersystem.repository.UsuarioRepository;

@Service
public class UsuarioServiceImpl implements UsuarioService{
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public Usuario saveUsuario(Usuario usuario){
        return usuarioRepository.save(usuario);
    }
    @Override
    public List<Usuario> getAllUsuarios(){
        return usuarioRepository.findAll();
    }

}
