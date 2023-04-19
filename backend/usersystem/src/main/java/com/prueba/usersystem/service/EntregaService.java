package com.prueba.usersystem.service;
import java.util.List;

import com.prueba.usersystem.model.Entrega;

public interface EntregaService {
    public Entrega saveEntrega (Entrega Entrega);
    public List<Entrega> getAllEntregas();
    public List<Entrega> getAllEntregasByNif(int nif);

}
