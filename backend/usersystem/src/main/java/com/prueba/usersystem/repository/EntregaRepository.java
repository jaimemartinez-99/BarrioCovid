package com.prueba.usersystem.repository;

import java.util.List;

//import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.prueba.usersystem.model.Entrega;


@Repository
public interface EntregaRepository extends JpaRepository<Entrega ,Integer> {
    @Query("SELECT p FROM Entrega p WHERE p.usuario.nif = :nif")
    List<Entrega> findByNif(@Param("nif") int nif);
}
