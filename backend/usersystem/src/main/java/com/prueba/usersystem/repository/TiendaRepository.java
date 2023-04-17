package com.prueba.usersystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.prueba.usersystem.model.Tienda;

@Repository
public interface TiendaRepository extends JpaRepository<Tienda ,Integer> {
    @Query("SELECT p FROM Tienda p WHERE p.vendedor.nif = :vendedor_nif")
    Tienda findByNif(@Param("vendedor_nif") int vendedor_nif);
}
