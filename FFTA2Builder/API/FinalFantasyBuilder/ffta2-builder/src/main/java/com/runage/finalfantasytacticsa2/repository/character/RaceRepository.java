package com.runage.finalfantasytacticsa2.repository.character;

import com.runage.finalfantasytacticsa2.domain.character.Race;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RaceRepository extends JpaRepository<Race, Long> {
}
