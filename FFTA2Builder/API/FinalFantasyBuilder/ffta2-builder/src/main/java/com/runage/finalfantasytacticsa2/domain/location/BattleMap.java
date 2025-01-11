package com.runage.finalfantasytacticsa2.domain.location;

import com.runage.finalfantasytacticsa2.domain.JpaEntity;
import com.runage.finalfantasytacticsa2.domain.game.Game;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "battle_map")
@Builder
public class BattleMap extends JpaEntity {

    @Column
    private String name;

    @Column
    private String lore;

    @Column(name = "img_url")
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "location_id")
    private Location locationId;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game gameId;

}
