package com.runageinc.projektrobot.security;

import io.jsonwebtoken.Jwts;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@RequiredArgsConstructor
public class JwtTokenGenerator {

    private final JwtKeyConfigurationSettings jwtKeyConfigurationSettings;

    public String generateToken(String username) {
        final var thirtyMinutesInMillis = 60 * 60 * 500;

        return Jwts.builder().setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + thirtyMinutesInMillis))
                .signWith(jwtKeyConfigurationSettings.getJwtKeyConfiguration())
                .compact();
    }

    public String generateRefreshToken(String username) {
        final var oneHourInMillis = 60 * 60 * 1000;
        final var oneDayExpiration = oneHourInMillis * 24;

        return Jwts.builder().setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + oneDayExpiration))
                .signWith(jwtKeyConfigurationSettings.getJwtKeyConfiguration())
                .compact();
    }

    public String refreshExistingToken(String refreshToken) {
        var claims = Jwts.parserBuilder()
                .setSigningKey(jwtKeyConfigurationSettings.getJwtKeyConfiguration())
                .build()
                .parseClaimsJws(refreshToken)
                .getBody();

        String username = claims.getSubject();

        return generateToken(username);
    }

}
