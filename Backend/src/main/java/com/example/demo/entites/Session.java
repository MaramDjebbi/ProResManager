package com.example.demo.entites;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor

public class Session implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idsession;
    private Date dateDebutSession;
    private Date dateFinSession;
    private String duréeprojet ;
    @Enumerated(EnumType.STRING)
    private TypeSession typeSession ;

    // liaison avec projet one to many
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true , mappedBy = "session")
    @JsonIgnore
    @ToString.Exclude
    private List<projet> projets;


    // liaison avec ressource one to many
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true , mappedBy = "session")
    @JsonIgnore
    @ToString.Exclude
    private List<Ressources> ressources;

    // liaison avec user Many To One

    @ManyToOne(fetch = FetchType.LAZY,cascade =CascadeType.ALL)
    @JsonIgnore
    @JoinColumn(name = "idUser")
    private User user;

}
