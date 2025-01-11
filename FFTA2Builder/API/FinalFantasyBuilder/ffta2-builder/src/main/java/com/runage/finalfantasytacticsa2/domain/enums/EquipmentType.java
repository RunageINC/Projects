package com.runage.finalfantasytacticsa2.domain.enums;

import lombok.Getter;

@Getter
public enum EquipmentType {

    SHOES("Shoes"),
    GLOVES("Gloves"),
    ACCESSORY("Accessory"),
    HELM("Helm"),
    HAIR_ADORNMENT("Hair Adornment"),
    HAT("Hat"),
    HEAVY_ARMOR("Heavy Armor"),
    LIGHT_ARMOR("Light Armor"),
    ROBE("Robe"),
    SHIELD("Shield"),
    KNIFE("Knife"),
    SWORD("Sword"),
    BLADE("Blade"),
    SABER("Saber"),
    KNIGHTSWORD("Knightsword"),
    RAPIER("Rapier"),
    GREATSWORD("Greatsword"),
    BROADSWORD("Broadsword"),
    KATANA("Katana"),
    DAGGER("Dagger"),
    AXE("Axe"),
    STAFF("Staff"),
    ROD("Rod"),
    KNUCKLE("Knuckle"),
    INSTRUMENT("Instrument"),
    HAND_CANNON("Hand-cannon"),
    BOOK("Book"),
    BOW("Bow"),
    SPEAR("Spear"),
    POLE("Pole"),
    GREATBOW("Greatbow"),
    CARD("Card"),
    GUN("Gun"),
    HAMMER("Hammer"),
    MACE("Mace");

    private final String value;

    EquipmentType(String value) {
        this.value = value;
    }
}

