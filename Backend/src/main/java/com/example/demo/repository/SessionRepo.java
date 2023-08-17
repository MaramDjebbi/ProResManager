package com.example.demo.repository;

import com.example.demo.entites.Session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface SessionRepo extends JpaRepository<Session, Long> {


}
