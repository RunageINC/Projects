package com.runage.finalfantasytacticsa2.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ta2/ping")
public class TestApi {

    @GetMapping
    public String ping() {
        return "Pong A2!";
    }
}
