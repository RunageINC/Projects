package com.runage.finalfantasytacticsa2.domain.quest;

import com.runage.finalfantasytacticsa2.domain.JpaEntity;
import com.runage.finalfantasytacticsa2.domain.character.Job;
import com.runage.finalfantasytacticsa2.domain.game.Game;
import com.runage.finalfantasytacticsa2.domain.item.Item;
import com.runage.finalfantasytacticsa2.domain.location.Location;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "quest")
@Builder
public class Quest extends JpaEntity {

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private String type;

    @Column(columnDefinition = "TINYINT")
    private short rank;

    @Column
    private int fee;

    @Column(columnDefinition = "TINYINT")
    private short days;

    @Column
    private String lore;

    @Column(columnDefinition = "TINYINT")
    private short negotiation;

    @Column(columnDefinition = "TINYINT")
    private short aptitude;

    @Column(columnDefinition = "TINYINT")
    private short teamwork;

    @Column(columnDefinition = "TINYINT")
    private short adaptability;

    @Column(name = "can_dispatch")
    private boolean canDispatch;

    @Column(name = "can_cancel")
    private boolean canCancel;

    @Column(name = "can_repeat")
    private boolean canRepeat;

    @ManyToOne
    @JoinColumn(name = "location_id")
    private Location locationId;

    @ManyToOne
    @JoinColumn(name = "recommended_job_id")
    private Job recommendedJobId;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game gameId;

    @ManyToMany
    @JoinTable(name = "quest_item_requirement",
            joinColumns = @JoinColumn(name = "quest_id"),
            inverseJoinColumns = @JoinColumn(name = "item_id"))
    private Set<Item> questItemRequirement;

    @OneToMany(mappedBy = "questId")
    private Set<Reward> foundInRewards;
}
