package com.runageinc.projektrobot.domain.player;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "player_session")
@Builder
public class PlayerSession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "player_id")
    private Player player;

    @Column(name = "refresh_token")
    private String refreshToken;
}
