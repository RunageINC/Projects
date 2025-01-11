package com.runage.finalfantasytacticsa2.domain.enums;

import lombok.Getter;

@Getter
public enum AbilityTypes {

    COMMAND("Command"),
    REACTION("Reaction"),
    PASSIVE("Passive");

    private final String value;

    AbilityTypes(String value) {
        this.value = value;
    }
}
