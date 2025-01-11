package com.runage.finalfantasytacticsa2.domain.character.dto;

import java.util.Set;

public record RaceRead(
        Long id,
        String name,
        String description,
        String imageUrl,
        Set<JobSimpleRead> jobsResume,
        boolean isFlying
) {
}
