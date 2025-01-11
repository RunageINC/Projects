package com.runage.finalfantasytacticsa2.domain.character.dto;

import com.runage.finalfantasytacticsa2.domain.skills.dto.AbilityTypeSimpleRead;

import java.util.Set;

public record JobRead(
        Long id,
        String name,
        String description,
        String usageRequirements,
        String unlockRequirements,
        String lore,
        short move,
        short jump,
        short unarmedAttackRaise,
        short evasion,
        char hp,
        char mp,
        char atk,
        char def,
        char mgk,
        char res,
        short spd,
        short hpGrowth,
        short mpGrowth,
        short atkGrowth,
        short defGrowth,
        short mgkGrowth,
        short resistGrowth,
        short speedGrowth,
        RaceSimpleRead foundInRace,
        String imageUrl,
        String spriteUrl,
//        Set<EquipmentSimpleRead> usableEquipmentsResume,
        Set<AbilityTypeSimpleRead> usableAbilities
) {
}
