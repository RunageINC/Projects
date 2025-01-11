package com.runage.finalfantasytacticsa2.domain.location;

import com.runage.finalfantasytacticsa2.domain.JpaEntity;
import com.runage.finalfantasytacticsa2.domain.character.Clan;
import com.runage.finalfantasytacticsa2.domain.character.Race;
import com.runage.finalfantasytacticsa2.domain.game.Game;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "location")
@Builder
public class Location extends JpaEntity {

    @Column
    private String name;

    @Column
    private String region;

    @Column
    private String lore;

    @Column(name = "img_url")
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "owner_clan_id")
    private Clan ownerClanId;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game gameId;

    @ManyToMany(mappedBy = "locations")
    private Set<Race> races;
}
