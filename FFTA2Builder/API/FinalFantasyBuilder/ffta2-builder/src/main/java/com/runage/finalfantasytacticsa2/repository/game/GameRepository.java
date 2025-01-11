package com.runage.finalfantasytacticsa2.repository.game;

import com.runage.finalfantasytacticsa2.domain.game.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
}
