package com.runage.finalfantasytacticsa2.domain.character;

import com.runage.finalfantasytacticsa2.domain.JpaEntity;
import com.runage.finalfantasytacticsa2.domain.game.Game;
import com.runage.finalfantasytacticsa2.domain.location.Location;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "race")
@Builder
public class Race extends JpaEntity {

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private String lore;

    @Column(name = "is_flying")
    private boolean isFlying;

    @Column(name = "img_url")
    private String imageUrl;

    @OneToMany(mappedBy = "raceId")
    private Set<Job> jobs;

    @ManyToMany
    @JoinTable(name = "race_locations",
            joinColumns = @JoinColumn(name = "race_id"),
            inverseJoinColumns = @JoinColumn(name = "location_id"))
    private Set<Location> locations;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game gameId;
}
