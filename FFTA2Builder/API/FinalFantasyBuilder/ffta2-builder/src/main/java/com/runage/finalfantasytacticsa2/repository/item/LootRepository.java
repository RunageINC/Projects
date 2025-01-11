package com.runage.finalfantasytacticsa2.repository.item;

import com.runage.finalfantasytacticsa2.domain.item.Loot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LootRepository extends JpaRepository<Loot, Long> {
}
