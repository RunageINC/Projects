package com.runage.finalfantasytacticsa2.domain.item;

import com.runage.finalfantasytacticsa2.domain.JpaEntity;
import com.runage.finalfantasytacticsa2.domain.character.Job;
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
@Table(name = "equipment")
@Builder
public class Equipment extends JpaEntity {

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private String lore;

    @Column
    private int price;

    @Column(columnDefinition = "TINYINT")
    private short range;

    @Column(name = "alternative_source")
    private String alternativeSource;

    @Column(columnDefinition = "SMALLINT")
    private short atk;

    @Column(columnDefinition = "SMALLINT")
    private short def;

    @Column(columnDefinition = "SMALLINT")
    private short mgk;

    @Column(columnDefinition = "SMALLINT")
    private short res;

    @Column(columnDefinition = "SMALLINT")
    private short eva;

    @Column(columnDefinition = "SMALLINT")
    private short spd;

    @Column(name = "extra_effect")
    private String extraEffect;

    @Column(name = "img_url")
    private String imageUrl;

    @Column
    private String type;

    @Column
    private String element;

    @Column
    private String category;

    @Column(name = "bazaar_rank", columnDefinition = "CHAR(1)")
    private char bazaarRank;

    @Column(name = "bazaar_category")
    private String bazaarCategory;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game gameId;

    @ManyToMany(mappedBy = "usableEquipments")
    private Set<Job> usableBy;

    @OneToMany(mappedBy = "equipmentId")
    private Set<Reward> foundInRewards;
}
