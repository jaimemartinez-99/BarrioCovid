package com.prueba.usersystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.prueba.usersystem.model.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto ,Integer> {
    @Query("SELECT p FROM Producto p WHERE p.tienda.email = :email")
    List<Producto> findByEmail(@Param("email") String email);
}
