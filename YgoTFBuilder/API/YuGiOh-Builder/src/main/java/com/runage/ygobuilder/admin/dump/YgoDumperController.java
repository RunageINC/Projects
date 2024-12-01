package com.runage.ygobuilder.admin.dump;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin/dump")
@RequiredArgsConstructor
public class YgoDumperController {

    private final YgoDumper ygoDumper;

    @PostMapping("/card")
    public ResponseEntity dumpCards() {
        return ResponseEntity.ok(ygoDumper.dumpCards());
    }

    @PostMapping("/packs")
    public ResponseEntity dumpPacks() {
        return ResponseEntity.ok(ygoDumper.dumpPacks());
    }

}
