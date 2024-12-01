package com.runage.ygobuilder.domain.card;

import com.fasterxml.jackson.annotation.JsonProperty;

public record CardRead(
        long id,
        String name,
        String gameName,
        String rarity,
        String[] typeline,
        String type,
        String humanReadableCardType,
        String frameType,
        String description,
        String race,
        int atk,
        int def,
        short level,
        String attribute,
        String archetype,
        String image,
        String imageCropped
){
}
