package com.example.demo.utils;

import com.example.demo.entites.TypeSession;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Date;


@Service
public class MailService {

    @Autowired
    private JavaMailSender mailSender;
    public void sendSimpleEmail(String toEmail,
                                String subject,
                                String body)
    {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("menm4671@gmail.com");
        message.setTo(toEmail);
        message.setText(body);
        message.setSubject(subject);
        mailSender.send(message);
        System.out.println(" votre session est activée ");
    }

}