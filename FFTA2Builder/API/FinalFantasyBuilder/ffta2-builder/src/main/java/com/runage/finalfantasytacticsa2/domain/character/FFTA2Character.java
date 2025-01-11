package com.runage.finalfantasytacticsa2.domain.character;

import com.runage.finalfantasytacticsa2.domain.JpaEntity;
import com.runage.finalfantasytacticsa2.domain.game.Game;
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
public class FFTA2Character extends JpaEntity {

    @Column
    private String name;

    @Column
    private String gender;

    @Column(name = "unlock_requirements")
    private String unlockRequirements;

    @Column
    private String lore;

    @Column(name = "img_url")
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "race_id")
    private Race raceId;

    @ManyToOne
    @JoinColumn(name = "starting_job_id")
    private Job startingJobId;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game gameId;

    @ManyToMany
    @JoinTable(name = "exclusive_jobs",
            joinColumns = @JoinColumn(name = "character_id"),
            inverseJoinColumns = @JoinColumn(name = "job_id"))
    private Set<Job> exclusiveJobs;
}
