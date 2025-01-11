package com.runage.finalfantasytacticsa2.service.race;

import com.runage.finalfantasytacticsa2.domain.character.Race;
import com.runage.finalfantasytacticsa2.repository.character.RaceRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@AllArgsConstructor
public class RaceService {

    private final RaceRepository raceRepository;

    public Set<Race> getAllRaces() {
        return new HashSet<>(raceRepository.findAll());
    }

    public Race getById(Long id) {
        return raceRepository.findById(id).orElse(null);
    }
}
