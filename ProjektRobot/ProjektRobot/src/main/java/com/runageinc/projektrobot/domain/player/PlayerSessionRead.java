package com.runageinc.projektrobot.domain.player;

public record PlayerSessionRead(
        Long id,
        String username,
        String token,
        String refreshToken
) {
}
