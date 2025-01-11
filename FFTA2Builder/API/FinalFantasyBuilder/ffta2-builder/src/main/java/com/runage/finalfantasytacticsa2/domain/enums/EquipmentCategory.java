package com.runage.finalfantasytacticsa2.domain.enums;

import lombok.Getter;

@Getter
public enum EquipmentCategory {

    EXTRA("Extra"),
    HEAD("Head"),
    ARMOR("Armor"),
    SHIELD("Shield"),
    EDGED_WEAPON("Edged Weapon"),
    BLUDGEONING_WEAPON("Bludgeoning Weapon"),
    RANGED_WEAPON("Ranged Weapon");

    private final String value;

    EquipmentCategory(String value) {
        this.value = value;
    }
}
