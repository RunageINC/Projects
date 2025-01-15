package com.runageinc.projektrobot.controller;

import com.runageinc.projektrobot.domain.player.Player;
import com.runageinc.projektrobot.domain.player.PlayerRegisterOrLogin;
import com.runageinc.projektrobot.domain.player.PlayerSession;
import com.runageinc.projektrobot.domain.player.PlayerSessionRead;
import com.runageinc.projektrobot.security.JwtTokenGenerator;
import com.runageinc.projektrobot.service.PlayerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/player")
@RequiredArgsConstructor
public class PlayerController {

    private final PlayerService playerService;
    private final PlayerMapper playerMapper;

    private final JwtTokenGenerator jwtTokenGenerator;

    @PostMapping
    public ResponseEntity<Void> registerNewPlayer(@RequestBody PlayerRegisterOrLogin playerRegisterOrLogin) {
        final var playerEntity = playerMapper.toEntity(playerRegisterOrLogin);

        playerService.save(playerEntity);

        return new ResponseEntity<>(null, HttpStatus.CREATED);
    }

    @GetMapping("/{username}")
    public ResponseEntity<Player> findByUsername(@PathVariable String username) {
        return ResponseEntity.ok(playerService.findByUsername(username));
    }

    @PostMapping("/login")
    public ResponseEntity<PlayerSessionRead> login(@RequestBody PlayerRegisterOrLogin playerRegisterOrLogin) {
        final var playerEntity = playerService.findByUsername(playerRegisterOrLogin.username());
        final var passwordIsCorrect = playerEntity.getPassword().equals(playerRegisterOrLogin.password());

        if (!passwordIsCorrect) {
            return ResponseEntity.badRequest().build();
        }

        final var token = jwtTokenGenerator.generateToken(playerEntity.getUsername());
        final var refreshToken = jwtTokenGenerator.generateRefreshToken(playerEntity.getUsername());

        final var playerSession = PlayerSession.builder().player(playerEntity).refreshToken(refreshToken).build();

        final var savedPlayerSession = playerService.saveSession(playerSession);
        final var mappedSession = playerMapper.fromSessionEntity(savedPlayerSession, token);

        return ResponseEntity.ok(mappedSession);
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(@RequestBody String refreshToken) {
        try {
            final var newAccessToken = jwtTokenGenerator.refreshExistingToken(refreshToken);

            return ResponseEntity.ok(Map.of("token", newAccessToken));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired refresh token");
        }
    }

    @DeleteMapping("/logout")
    public ResponseEntity<Void> logout(@RequestBody PlayerSession playerSession) {
        playerService.finishSession(playerSession);

        return ResponseEntity.noContent().build();
    }
}
