package com.runage.finalfantasytacticsa2.repository.skills;

import com.runage.finalfantasytacticsa2.domain.skills.AbilityType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AbilityTypeRepository extends JpaRepository<AbilityType, Long> {
}
