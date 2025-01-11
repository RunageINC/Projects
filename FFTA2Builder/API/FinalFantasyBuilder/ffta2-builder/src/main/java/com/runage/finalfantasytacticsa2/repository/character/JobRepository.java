package com.runage.finalfantasytacticsa2.repository.character;

import com.runage.finalfantasytacticsa2.domain.character.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
}
