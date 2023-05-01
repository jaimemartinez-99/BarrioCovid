package com.prueba.usersystem.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.prueba.usersystem.model.Vendedor;

@Repository
public interface VendedorRepository extends JpaRepository<Vendedor,Integer> {
    @Query("SELECT p FROM Vendedor p WHERE p.email = :email")
    Vendedor findByEmail(@Param("email") String email);
}
