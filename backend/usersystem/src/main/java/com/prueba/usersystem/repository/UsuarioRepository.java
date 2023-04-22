package com.prueba.usersystem.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.prueba.usersystem.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario ,Integer> {
    @Query("SELECT p FROM Usuario p WHERE p.email = :email")
    Usuario findByEmail(@Param("email") String email);
}
