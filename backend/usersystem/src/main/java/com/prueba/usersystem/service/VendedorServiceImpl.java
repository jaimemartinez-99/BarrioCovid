package com.prueba.usersystem.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prueba.usersystem.model.Vendedor;
import com.prueba.usersystem.repository.VendedorRepository;

@Service
public class VendedorServiceImpl implements VendedorService{
    @Autowired
    private VendedorRepository vendedorRepository;

    @Override
    public Vendedor saveVendedor(Vendedor vendedor){
        return vendedorRepository.save(vendedor);
    }

    @Override
    public List<Vendedor> getAllVendedores(){
        return vendedorRepository.findAll();
    }
}
