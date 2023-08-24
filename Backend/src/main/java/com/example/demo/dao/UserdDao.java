package com.example.demo.dao;
import com.example.demo.entites.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
public interface UserDao extends JpaRepository<User, String >{

    Optional<User> findOneByUserFirstName(String userFirstName);

}
