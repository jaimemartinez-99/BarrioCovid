package com.prueba.usersystem.repository;

import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.prueba.usersystem.model.Pedido;


@Repository
public interface PedidoRepository extends JpaRepository<Pedido ,Integer> {
    @Query("SELECT p FROM Pedido p WHERE p.tienda.email = :email")
    List<Pedido> findByEmail(@Param("email") String email);

    @Query("SELECT p FROM Pedido p WHERE p.usuario.nif = :nif")
    List<Pedido> findByNif(@Param("nif") int nif);
    
}
