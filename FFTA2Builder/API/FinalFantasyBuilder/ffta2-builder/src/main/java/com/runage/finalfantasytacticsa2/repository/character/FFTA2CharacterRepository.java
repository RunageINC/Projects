package com.runage.finalfantasytacticsa2.repository.character;

import com.runage.finalfantasytacticsa2.domain.character.FFTA2Character;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FFTA2CharacterRepository extends JpaRepository<FFTA2Character, Long> {
}
