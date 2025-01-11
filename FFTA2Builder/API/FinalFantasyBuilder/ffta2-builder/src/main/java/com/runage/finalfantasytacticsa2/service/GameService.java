package com.runage.finalfantasytacticsa2.service;

import com.runage.finalfantasytacticsa2.domain.game.Game;
import com.runage.finalfantasytacticsa2.repository.game.GameRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class GameService {

    private final GameRepository gameRepository;

    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }
}
