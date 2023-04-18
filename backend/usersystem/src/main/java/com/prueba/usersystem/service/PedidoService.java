package com.prueba.usersystem.service;

import java.util.List;


import com.prueba.usersystem.model.Pedido;

public interface PedidoService {
    public Pedido savePedido (Pedido Pedido);
    public List<Pedido> getAllPedidos();
    public List<Pedido> getAllPedidosByEmail(String email);

}
