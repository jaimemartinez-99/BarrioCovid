package com.prueba.usersystem.service;

import java.util.List;

import com.prueba.usersystem.model.Vendedor;

public interface VendedorService {
    public Vendedor saveVendedor (Vendedor vendedor);
    public List<Vendedor> getAllVendedores();
    public Vendedor findByEmail(String email);

}
