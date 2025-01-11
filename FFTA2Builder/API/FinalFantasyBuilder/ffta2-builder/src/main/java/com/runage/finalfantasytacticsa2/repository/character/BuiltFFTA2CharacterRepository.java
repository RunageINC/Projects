package com.runage.finalfantasytacticsa2.repository.character;

import com.runage.finalfantasytacticsa2.domain.character.BuiltFFTA2Character;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuiltFFTA2CharacterRepository extends JpaRepository<BuiltFFTA2Character, String> {
}
