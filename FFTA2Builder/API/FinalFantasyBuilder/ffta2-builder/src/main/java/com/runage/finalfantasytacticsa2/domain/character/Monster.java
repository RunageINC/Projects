package com.runage.finalfantasytacticsa2.domain.character;

import com.runage.finalfantasytacticsa2.domain.JpaEntity;
import com.runage.finalfantasytacticsa2.domain.skills.Skill;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "character")
@Builder
public class Monster extends JpaEntity {

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private String lore;

    @Column(name = "is_undead")
    private boolean isUndead;

    @Column(name = "img_url")
    private String imageUrl;

    @Column
    private String weaknesses;

    @Column(name = "half_damage")
    private String halfDamage;

    @Column(name = "null_damage")
    private String nullDamage;

    @Column
    private String absorbs;

    @Column
    private String race;

    @Column(columnDefinition = "SMALLINT")
    private short move;

    @Column(columnDefinition = "SMALLINT")
    private String jump;

    @Column(columnDefinition = "SMALLINT")
    private String evasion;

    @Column(columnDefinition = "SMALLINT")
    private String resilience;

    @ManyToMany
    @JoinTable(name = "monster_skill",
            joinColumns = @JoinColumn(name = "monster_id"),
            inverseJoinColumns = @JoinColumn(name = "skill_id"))
    private Set<Skill> skillId;
}