package com.runage.finalfantasytacticsa2.domain.character.dto;

public record RaceSimpleRead(
        Long id,
        String name,
        String description,
        String imageUrl,
        boolean isFlying
) {
}
