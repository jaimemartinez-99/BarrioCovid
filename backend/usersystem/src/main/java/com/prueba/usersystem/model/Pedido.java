package com.prueba.usersystem.model;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Pedido{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int precio;

    @ManyToOne
    @JoinColumn(name = "Usuario", referencedColumnName = "nif")
    private Usuario usuario;

    
    @ManyToMany (cascade = CascadeType.REMOVE)
    private List<Producto> productos;
    
    @ManyToOne
    @JoinColumn(name = "Tienda", referencedColumnName = "email")
    private Tienda tienda;

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPrecio() {
        return this.precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }

    public List<Producto> getProductos() {
        return this.productos;
    }

    public void setProductos(List<Producto> productos) {
        this.productos = productos;
    }

    public Tienda getTienda() {
        return this.tienda;
    }

    public void setTienda(Tienda tienda) {
        this.tienda = tienda;
    }
    
    public Usuario getUsuario() {
        return this.usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
    public Pedido() {
    }
}