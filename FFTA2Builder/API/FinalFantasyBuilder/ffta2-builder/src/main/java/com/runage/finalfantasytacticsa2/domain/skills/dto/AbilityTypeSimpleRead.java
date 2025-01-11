package com.runage.finalfantasytacticsa2.domain.skills.dto;

import com.runage.finalfantasytacticsa2.domain.character.dto.JobSimpleRead;

import java.util.Set;

public record AbilityTypeSimpleRead(
        Long id,
        String name,
        String type,
        String description,
        Set<JobSimpleRead> usableBy
) {
}
