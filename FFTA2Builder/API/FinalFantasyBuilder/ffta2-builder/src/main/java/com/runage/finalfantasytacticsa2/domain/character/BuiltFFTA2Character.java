package com.runage.finalfantasytacticsa2.domain.character;

import com.runage.finalfantasytacticsa2.domain.game.Game;
import com.runage.finalfantasytacticsa2.domain.item.Equipment;
import com.runage.finalfantasytacticsa2.domain.skills.AbilityType;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "built_character_ffta2")
@Builder
public class BuiltFFTA2Character {

    @Id
    private String id;

    @Column
    private String name;

    @Column
    private String gender;

    @Column
    private String lore;

    @Column(name = "unlock_requirements")
    private String unlockRequirements;

    @ManyToOne
    @JoinColumn(name = "ability1")
    private AbilityType ability1;

    @ManyToOne
    @JoinColumn(name = "ability2")
    private AbilityType ability2;

    @ManyToOne
    @JoinColumn(name = "reaction_ability")
    private AbilityType reactionAbility;

    @ManyToOne
    @JoinColumn(name = "passive_ability")
    private AbilityType passiveAbility;

    @ManyToOne
    @JoinColumn(name = "clan_id")
    private Clan clanId;

    @ManyToOne
    @JoinColumn(name = "race_id")
    private Race raceId;

    @ManyToOne
    @JoinColumn(name = "job_id")
    private Job jobId;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game gameId;

    @ManyToOne
    @JoinColumn(name = "slot1")
    private Equipment slot1;

    @ManyToOne
    @JoinColumn(name = "slot2")
    private Equipment slot2;

    @ManyToOne
    @JoinColumn(name = "slot3")
    private Equipment slot3;

    @ManyToOne
    @JoinColumn(name = "slot4")
    private Equipment slot4;

    @ManyToOne
    @JoinColumn(name = "slot5")
    private Equipment slot5;

}
