package com.runage.finalfantasytacticsa2.repository.item;

import com.runage.finalfantasytacticsa2.domain.item.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment, Long> {
}
