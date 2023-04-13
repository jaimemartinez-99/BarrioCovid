package com.prueba.usersystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.prueba.usersystem.model.Tienda;

@Repository
public interface TiendaRepository extends JpaRepository<Tienda ,Integer> {
    
}
