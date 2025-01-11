package com.runage.finalfantasytacticsa2.domain.character;

import com.runage.finalfantasytacticsa2.domain.JpaEntity;
import com.runage.finalfantasytacticsa2.domain.game.Game;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "clan")
@Builder
public class Clan extends JpaEntity {

    @Column
    private String name;

    @OneToOne
    private BuiltFFTA2Character leaderId;

    @Column
    private String lore;

    @Column(columnDefinition = "TINYINT")
    private short negotiation;

    @Column(columnDefinition = "TINYINT")
    private short aptitude;

    @Column(columnDefinition = "TINYINT")
    private short teamwork;

    @Column(columnDefinition = "TINYINT")
    private short adaptability;

    @Column(name = "img_url")
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game gameId;

    @OneToMany(mappedBy = "clanId")
    private Set<BuiltFFTA2Character> members;
}
