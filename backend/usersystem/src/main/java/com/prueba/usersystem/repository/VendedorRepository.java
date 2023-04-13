package com.prueba.usersystem.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.prueba.usersystem.model.Vendedor;

@Repository
public interface VendedorRepository extends JpaRepository<Vendedor,Integer> {

    Vendedor findByNif(int nif);
    
}
