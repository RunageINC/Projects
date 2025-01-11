package com.runage.finalfantasytacticsa2.domain.item;

import com.runage.finalfantasytacticsa2.domain.JpaEntity;
import com.runage.finalfantasytacticsa2.domain.game.Game;
import com.runage.finalfantasytacticsa2.domain.quest.Quest;
import com.runage.finalfantasytacticsa2.domain.quest.Reward;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "item")
@Builder
public class Item extends JpaEntity {

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private String lore;

    @Column
    private int price;

    @Column
    private String effect;

    @Column(name = "img_url")
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game gameId;

    @ManyToMany(mappedBy = "questItemRequirement")
    private Set<Quest> requiredByQuests;

    @OneToMany(mappedBy = "itemId")
    private Set<Reward> foundInRewards;
}
