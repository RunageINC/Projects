package com.runage.finalfantasytacticsa2.domain.skills;

import com.runage.finalfantasytacticsa2.domain.JpaEntity;
import com.runage.finalfantasytacticsa2.domain.item.Equipment;
import com.runage.finalfantasytacticsa2.domain.game.Game;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "skill")
@Builder
public class Skill extends JpaEntity {

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private String lore;

    @Column
    private String element;

    @Column(columnDefinition = "TINYINT")
    private short range;

    @Column(columnDefinition = "SMALLINT")
    private short ap;

    @Column(columnDefinition = "SMALLINT")
    private short mp;

    @Column(name = "img_url")
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "learn_by_equip_id")
    private Equipment learnByEquipId;

    @ManyToOne
    @JoinColumn(name = "ability_type_id")
    private AbilityType abilityTypeId;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status statusId;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game gameId;
}
