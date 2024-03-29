package com.prueba.usersystem.model;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;


@Entity
public class Tienda {
    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;
    private String link_img;
    @Id
    private String email;
    private int telefono;
    private String direccion;

    

    @OneToOne
    @JoinColumn(name = "vendedor_nif", referencedColumnName = "nif")
    private Vendedor vendedor;

    @OneToMany(mappedBy = "tienda",cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<Producto> producto;

    @OneToMany(mappedBy="tienda",cascade = CascadeType.REMOVE)
    private List<Pedido> pedidos;
    

    public int getTelefono() {
        return this.telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }
    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getLink_img() {
        return this.link_img;
    }

    public void setLink_img(String link_img) {
        this.link_img = link_img;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDireccion() {
        return this.direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public Vendedor getVendedor() {
        return this.vendedor;
    }

    public void setVendedor(Vendedor vendedor) {
        this.vendedor = vendedor;
    }


}