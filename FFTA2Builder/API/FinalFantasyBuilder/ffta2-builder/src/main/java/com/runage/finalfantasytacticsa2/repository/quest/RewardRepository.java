package com.runage.finalfantasytacticsa2.repository.quest;

import com.runage.finalfantasytacticsa2.domain.quest.Reward;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RewardRepository extends JpaRepository<Reward, Long> {
}
