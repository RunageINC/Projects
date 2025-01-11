package com.runage.finalfantasytacticsa2.domain.skills;

import com.runage.finalfantasytacticsa2.domain.JpaEntity;
import com.runage.finalfantasytacticsa2.domain.character.Job;
import com.runage.finalfantasytacticsa2.domain.game.Game;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ability_type")
@Builder
public class AbilityType extends JpaEntity {

    @Column
    private String name;

    @Column
    private String type;

    @Column
    private String description;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game gameId;

    @ManyToMany(mappedBy = "usableAbilities")
    private Set<Job> usableBy;
}
