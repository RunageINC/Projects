package com.runage.finalfantasytacticsa2.domain.skills;

import com.runage.finalfantasytacticsa2.domain.JpaEntity;
import com.runage.finalfantasytacticsa2.domain.game.Game;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "status")
@Builder
public class Status extends JpaEntity {

    @Column
    private String name;

    @Column
    private String description;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game gameId;
}
