package com.prueba.usersystem.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prueba.usersystem.model.Tienda;
import com.prueba.usersystem.repository.TiendaRepository;

@Service
public class TiendaServiceImpl implements TiendaService{
    @Autowired
    private TiendaRepository TiendaRepository;

    @Override
    public Tienda saveTienda(Tienda Tienda){
        return TiendaRepository.save(Tienda);

    }

    @Override
    public List<Tienda> getAllTiendas(){
        return TiendaRepository.findAll();
    }
}
