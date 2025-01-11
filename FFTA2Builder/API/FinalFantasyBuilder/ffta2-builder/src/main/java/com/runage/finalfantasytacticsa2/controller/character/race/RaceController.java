package com.runage.finalfantasytacticsa2.controller.character.race;

import com.runage.finalfantasytacticsa2.domain.character.Race;
import com.runage.finalfantasytacticsa2.domain.character.dto.RaceRead;
import com.runage.finalfantasytacticsa2.domain.character.dto.RaceSimpleRead;
import com.runage.finalfantasytacticsa2.service.race.RaceService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/races")
@AllArgsConstructor
@CrossOrigin("*")
public class RaceController {

    private final RaceService raceService;
    private final RaceMapper raceMapper;

    @GetMapping
    public ResponseEntity<Set<RaceSimpleRead>> getAll() {
        final var racesEntity = raceService.getAllRaces();

        final var mappedRaces = raceMapper.fromEntityToSimpleReadSet(racesEntity);

        return ResponseEntity.ok(mappedRaces);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RaceRead> getById(@PathVariable Long id) {
        final var raceEntity = raceService.getById(id);

        if (raceEntity == null) {
            return ResponseEntity.notFound().build();
        }

        final var mappedRace = raceMapper.fromEntity(raceEntity);

        return ResponseEntity.ok(mappedRace);
    }
}
