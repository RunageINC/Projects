package com.runage.finalfantasytacticsa2.repository.skills;

import com.runage.finalfantasytacticsa2.domain.skills.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatusRepository extends JpaRepository<Status, Long> {
}
