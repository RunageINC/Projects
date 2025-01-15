package com.runageinc.projektrobot.domain.player;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "player")
@Builder
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String username;

    @Column
    private String password;
}
