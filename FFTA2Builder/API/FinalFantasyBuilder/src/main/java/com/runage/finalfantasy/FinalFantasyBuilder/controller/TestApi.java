package com.runage.finalfantasy.FinalFantasyBuilder.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ping")
public class TestApi {

    @GetMapping
    public String ping() {
        return "Pong!";
    }
}
