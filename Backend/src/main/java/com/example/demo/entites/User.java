package com.example.demo.entites;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;
    private String nom;
    private String prenom;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private RoleUser roleUser ;

    // one to many with projet
    @OneToMany( cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "user")
    @JsonIgnore
    @ToString.Exclude
    private List<projet> project;

   // liaison one to many avec les ressources
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true , mappedBy = "user")
    @JsonIgnore
    @ToString.Exclude
    private List<Ressources> resources;

    // liaison avec Session One To Many
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true , mappedBy = "user")
    @JsonIgnore
    @ToString.Exclude
    private List<Session> sessions;


}
