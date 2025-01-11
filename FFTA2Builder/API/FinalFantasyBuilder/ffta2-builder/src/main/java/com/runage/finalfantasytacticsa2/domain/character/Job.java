package com.runage.finalfantasytacticsa2.domain.character;

import com.runage.finalfantasytacticsa2.domain.JpaEntity;
import com.runage.finalfantasytacticsa2.domain.game.Game;
import com.runage.finalfantasytacticsa2.domain.item.Equipment;
import com.runage.finalfantasytacticsa2.domain.skills.AbilityType;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "job")
@Builder
public class Job extends JpaEntity {

    @Column
    private String name;

    @Column
    private String description;

    @Column(name = "usage_requirements")
    private String usageRequirements;

    @Column(name = "unlock_requirements")
    private String unlockRequirements;

    @Column
    private String lore;

    @Column(columnDefinition = "SMALLINT")
    private short move;

    @Column(columnDefinition = "SMALLINT")
    private short jump;

    @Column(name = "unarmed_attack_raise", columnDefinition = "SMALLINT")
    private short unarmedAttackRaise;

    @Column(columnDefinition = "SMALLINT")
    private short evasion;

    @Column(columnDefinition = "CHAR(1)")
    private char hp;

    @Column(columnDefinition = "CHAR(1)")
    private char mp;

    @Column(columnDefinition = "CHAR(1)")
    private char atk;

    @Column(columnDefinition = "CHAR(1)")
    private char def;

    @Column(columnDefinition = "CHAR(1)")
    private char mgk;

    @Column(columnDefinition = "CHAR(1)")
    private char res;

    @Column(columnDefinition = "TINYINT")
    private short spd;

    @Column(name = "hp_growth", columnDefinition = "TINYINT")
    private short hpGrowth;

    @Column(name = "mp_growth", columnDefinition = "TINYINT")
    private short mpGrowth;

    @Column(name = "atk_growth", columnDefinition = "TINYINT")
    private short atkGrowth;

    @Column(name = "def_growth", columnDefinition = "TINYINT")
    private short defGrowth;

    @Column(name = "mgk_growth", columnDefinition = "TINYINT")
    private short mgkGrowth;

    @Column(name = "resist_growth", columnDefinition = "TINYINT")
    private short resistGrowth;

    @Column(name = "speed_growth", columnDefinition = "TINYINT")
    private short speedGrowth;

    @ManyToOne
    @JoinColumn(name = "race_id")
    private Race raceId;

    @Column(name = "img_url")
    private String imageUrl;

    @Column(name = "sprite_url")
    private String spriteUrl;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game gameId;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "equipment_job",
            joinColumns = @JoinColumn(name = "job_id"),
            inverseJoinColumns = @JoinColumn(name = "equipment_id"))
    private Set<Equipment> usableEquipments;

    @ManyToMany
    @JoinTable(name = "job_ability_type",
            joinColumns = @JoinColumn(name = "job_id"),
            inverseJoinColumns = @JoinColumn(name = "ability_type_id"))
    private Set<AbilityType> usableAbilities;
}
