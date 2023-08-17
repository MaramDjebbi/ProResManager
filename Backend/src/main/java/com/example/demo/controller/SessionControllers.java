package com.example.demo.controller;
import com.example.demo.entites.Session;
import com.example.demo.services.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.util.List;

@RestController
@RequestMapping("/Session")
public class SessionControllers {

    @Autowired
    SessionService sessionControl ;

    // http://localhost:8082/Session/GetallSession
    @GetMapping("/GetallSession")
    List<Session> GetAllSession() {
        return sessionControl.GetAllSession();
    }


    // http://localhost:8082/Session/addsession
    @PostMapping("/addSession/{idUser}")
    public ResponseEntity<Session>  addSession(@RequestBody Session S, @PathVariable Long idUser){
        try {
            Session addedSession = sessionControl.addSession(S, idUser);
            return new ResponseEntity<>(addedSession, HttpStatus.CREATED);
        } catch (MessagingException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
