package com.runageinc.projektrobot.service;

import com.runageinc.projektrobot.domain.player.Player;
import com.runageinc.projektrobot.domain.player.PlayerSession;
import com.runageinc.projektrobot.exceptions.ProjektRobotException;
import com.runageinc.projektrobot.repository.PlayerRepository;
import com.runageinc.projektrobot.exceptions.Error;
import com.runageinc.projektrobot.repository.PlayerSessionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class PlayerService {

    private final PlayerRepository playerRepository;
    private final PlayerSessionRepository playerSessionRepository;

    public Player save(Player playerCreate) {
        return playerRepository.save(playerCreate);
    }

    public Player findByUsername(String username) {
        System.out.println(username);
        return playerRepository.findByUsername(username)
                .orElseThrow(() -> ProjektRobotException.with(new Error("Account not found", HttpStatus.NOT_FOUND)));
    }

    public PlayerSession saveSession(PlayerSession playerSession) {
        return playerSessionRepository.save(playerSession);
    }

    public void finishSession(PlayerSession playerSession) {
        playerSessionRepository.delete(playerSession);
    }
}
