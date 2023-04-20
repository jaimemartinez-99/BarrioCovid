package com.prueba.usersystem.service;

import java.util.List;


import com.prueba.usersystem.model.Pedido;

public interface PedidoService {
    public Pedido savePedido (Pedido Pedido);
    public List<Pedido> getAllPedidos();
    public List<Pedido> getAllPedidosByEmail(String email);
    public List<Pedido> getAllPedidosByNif(int nif);
    public String borrarPedidoPorNif (int nif);
    public String borrarPedidoPorId (int id);

}
