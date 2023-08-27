package com.example.demo.repository;

import com.example.demo.entites.Session;
import com.example.demo.entites.TypeSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SessionRepo extends JpaRepository<Session, Long> {

    Session findByTypeSession(TypeSession type);

}
