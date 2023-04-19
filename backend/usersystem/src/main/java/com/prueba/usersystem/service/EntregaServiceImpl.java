package com.prueba.usersystem.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prueba.usersystem.model.Entrega;
import com.prueba.usersystem.repository.EntregaRepository;

@Service
public class EntregaServiceImpl implements EntregaService{
    @Autowired
    private EntregaRepository EntregaRepository;

    @Override
    public Entrega saveEntrega(Entrega Entrega){
        return EntregaRepository.save(Entrega);

    }

    @Override
    public List<Entrega> getAllEntregas(){
        return EntregaRepository.findAll();
    }

    @Override
    public List<Entrega> getAllEntregasByNif(int nif){
        return EntregaRepository.findByNif(nif);
    } 
}
