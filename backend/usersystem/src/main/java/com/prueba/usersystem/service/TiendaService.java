package com.prueba.usersystem.service;

import java.util.List;

import com.prueba.usersystem.model.Tienda;

public interface TiendaService {
    public Tienda saveTienda (Tienda tienda);
    public List<Tienda> getAllTiendas();
    public Tienda getAllTiendasByNif(int vendedor_nif);

}
