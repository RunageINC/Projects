package com.runage.finalfantasytacticsa2.domain.item;

import com.runage.finalfantasytacticsa2.domain.JpaEntity;
import com.runage.finalfantasytacticsa2.domain.game.Game;
import com.runage.finalfantasytacticsa2.domain.quest.Reward;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "loot")
@Builder
public class Loot extends JpaEntity {

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private String lore;

    @Column
    private int price;

    @Column(name = "img_url")
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game gameId;

    @ManyToMany
    @JoinTable(name = "craft",
            joinColumns = @JoinColumn(name = "loot_id"),
            inverseJoinColumns = @JoinColumn(name = "equipment_id"))
    private Set<Equipment> craft;

    @OneToMany(mappedBy = "lootId")
    private Set<Reward> foundInRewards;
}
