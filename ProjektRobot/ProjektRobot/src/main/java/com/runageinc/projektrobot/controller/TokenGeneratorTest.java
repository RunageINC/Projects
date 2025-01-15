package com.runageinc.projektrobot.controller;

import com.runageinc.projektrobot.security.JwtTokenGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/test/token")
@RequiredArgsConstructor
public class TokenGeneratorTest {

    private final JwtTokenGenerator jwtTokenGenerator;

    @GetMapping("/{username}")
    public ResponseEntity<Map<String, String>> getToken(@PathVariable String username) {
        final var map = Map.of("token", jwtTokenGenerator.generateToken(username));

        return ResponseEntity.ok(map);
    }

}
