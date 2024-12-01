package com.runage.ygobuilder.controller;

import com.runage.ygobuilder.service.PackService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/packs")
@CrossOrigin(origins = "*")
@AllArgsConstructor
public class PackController {

    private final PackService packService;

    @GetMapping
    public ResponseEntity findAll() {
        return ResponseEntity.ok(packService.findAll());
    }

}
