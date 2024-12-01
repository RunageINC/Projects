package com.runage.ygobuilder.domain.card;

import ch.qos.logback.core.util.StringUtil;

public record CardSearchFilter(
        String name,
        String archetype,
        String rarity,
        String typeline,
        String description,
        String type,
        String frame,
        String race,
        String atk,
        String def,
        String level,
        String attribute
) {

    public boolean allIsNull() {
        return StringUtil.isNullOrEmpty(name)
                && StringUtil.isNullOrEmpty(archetype)
                && StringUtil.isNullOrEmpty(rarity)
                && StringUtil.isNullOrEmpty(typeline)
                && StringUtil.isNullOrEmpty(description)
                && StringUtil.isNullOrEmpty(type)
                && StringUtil.isNullOrEmpty(frame)
                && StringUtil.isNullOrEmpty(race)
                && StringUtil.isNullOrEmpty(atk)
                && StringUtil.isNullOrEmpty(def)
                && StringUtil.isNullOrEmpty(level)
                && StringUtil.isNullOrEmpty(attribute);
    }
}
