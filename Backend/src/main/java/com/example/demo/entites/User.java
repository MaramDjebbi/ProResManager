package com.example.demo.entites;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.LinkedList;
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
    private String userEmail;
    private String userFirstName;
    private String userLastName;
    private String userPassword;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "role_id")
    private Role role;

    /*@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "USER_ROLE",
            joinColumns = {
                    @JoinColumn(name = "USER_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "ROLE_ID")
            }
    )
    private Set<Role> role;*/


    // one to many with projet
    // @OneToMany( cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "user")
    @OneToMany(mappedBy = "user")
    @JsonIgnore
    @ToString.Exclude
    private List<projet> project;

    // liaison one to many avec les ressources
    //@OneToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, orphanRemoval = true , mappedBy = "user")
    @OneToMany(mappedBy = "user")
    @JsonIgnore
    @ToString.Exclude
    private List<Ressources> resources;

    // liaison avec Session One To Many
    // @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true , mappedBy = "user")
    @OneToMany(mappedBy = "user")
    @JsonIgnore
    @ToString.Exclude
    private List<Session> sessions;


}
