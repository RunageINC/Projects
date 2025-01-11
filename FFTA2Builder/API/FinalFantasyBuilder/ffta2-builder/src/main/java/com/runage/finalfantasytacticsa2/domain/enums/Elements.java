package com.runage.finalfantasytacticsa2.domain.enums;

import lombok.Getter;

@Getter
public enum Elements {
    FIRE("Fire"),
    WATER("Water"),
    AIR("Air"),
    EARTH("Earth"),
    THUNDER("Thunder"),
    ICE("Ice"),
    LIGHT("Light"),
    DARK("Dark"),
    NEUTRAL("Neutral");

    private final String value;

    Elements(String value) {
        this.value = value;
    }
}
