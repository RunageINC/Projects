package com.runage.ygobuilder.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public record PackCreate(
        String name,
        String[] cards,
        short cost,

        @JsonProperty("unlock")
        String unlockedBy,

        String coverCard,

        byte cardsPerPack
) {
}
