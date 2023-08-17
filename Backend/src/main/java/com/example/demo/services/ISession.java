package com.example.demo.services;

import com.example.demo.entites.Session;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;
import java.util.List;

@Component
public interface ISession {
    Session addSession(Session S , Long idUser) throws MessagingException;

    List<Session> GetAllSession();
}
