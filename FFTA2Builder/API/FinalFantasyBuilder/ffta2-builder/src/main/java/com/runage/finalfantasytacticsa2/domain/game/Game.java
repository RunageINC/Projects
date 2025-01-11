package com.runage.finalfantasytacticsa2.domain.game;

import com.runage.finalfantasytacticsa2.domain.JpaEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "game")
@Builder
public class Game extends JpaEntity {

    @Column
    private String name;

    @Column
    private String platform;

    @Column(name = "game_image")
    private String gameImage;

}
