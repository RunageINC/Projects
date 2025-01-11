package com.runage.finalfantasytacticsa2.repository.quest;

import com.runage.finalfantasytacticsa2.domain.quest.Quest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestRepository extends JpaRepository<Quest, Long> {
}
