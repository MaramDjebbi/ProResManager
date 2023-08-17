package com.example.demo.services;

import com.example.demo.entites.Session;
import com.example.demo.entites.TypeSession;
import com.example.demo.entites.User;
import com.example.demo.repository.SessionRepo;
import com.example.demo.repository.UserRepo;
import com.example.demo.utils.MailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import static java.awt.SystemColor.info;

@Service
@Slf4j
public class SessionService implements ISession{
    @Autowired
    SessionRepo sessionRepository;
    @Autowired
    UserRepo userRepository;
    @Autowired
    private MailService senderService;

    @Override
    @Transactional
    public Session addSession(Session S, Long idUser)  throws MessagingException {
        User user = userRepository.findById(idUser).orElse(null);
        S.setUser(user);
        return sessionRepository.save(S);
    }
/*
    public static void main(String[] args) {
        SpringApplication.run(SessionService.class, args);
    }
    @EventListener(ApplicationReadyEvent.class)
    public void triggerMail() throws MessagingException {
        senderService.sendSimpleEmail("toemail@gmail.com",
                "This is email body",
                "This is email subject");
    }*/

    @Override
    public List<Session> GetAllSession() {
        return sessionRepository.findAll();
    }

}
