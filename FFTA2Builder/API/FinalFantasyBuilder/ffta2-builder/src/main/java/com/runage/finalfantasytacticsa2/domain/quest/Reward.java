package com.runage.finalfantasytacticsa2.domain.quest;

import com.runage.finalfantasytacticsa2.domain.JpaEntity;
import com.runage.finalfantasytacticsa2.domain.item.Equipment;
import com.runage.finalfantasytacticsa2.domain.item.Item;
import com.runage.finalfantasytacticsa2.domain.item.Loot;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "reward")
@Builder
public class Reward extends JpaEntity {

    @Column
    private int gil;

    @ManyToOne
    @JoinColumn(name = "quest_id")
    private Quest questId;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item itemId;

    @ManyToOne
    @JoinColumn(name = "loot_id")
    private Loot lootId;

    @ManyToOne
    @JoinColumn(name = "equipment_id")
    private Equipment equipmentId;
}
