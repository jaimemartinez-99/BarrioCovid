package com.prueba.usersystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prueba.usersystem.model.Pedido;
import com.prueba.usersystem.repository.PedidoRepository;

@Service
public class PedidoServiceImpl implements PedidoService {
    @Autowired
    private PedidoRepository PedidoRepository;

    @Override
    public Pedido savePedido(Pedido Pedido){
        return PedidoRepository.save(Pedido);

    }

    @Override
    public List<Pedido> getAllPedidos(){
        return PedidoRepository.findAll();
    }
    @Override
    public List<Pedido> getAllPedidosByEmail(String email){
        return PedidoRepository.findByEmail(email);
    } 

    @Override
    public List<Pedido> getAllPedidosByNif(int nif){
        return PedidoRepository.findByNif(nif);
    } 

}
