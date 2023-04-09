package com.prueba.usersystem.service;

import java.util.List;

import com.prueba.usersystem.model.Usuario;

public interface UsuarioService {
    public Usuario saveUsuario (Usuario Usuario);
    public List<Usuario> getAllUsuarios();
}
