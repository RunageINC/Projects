package com.runage.ygobuilder.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Table(name = "pack")
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Pack {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String name;

    @ManyToMany
    @JoinTable(
            name = "pack_card",
            joinColumns = @JoinColumn(name = "pack_id"),
            inverseJoinColumns = @JoinColumn(name = "card_id"))
    private Set<Card> cards;

    @Column
    private short cost;

    @Column(name = "unlock_condition")
    private String unlockBy;

    @Column(name = "cover_card")
    private String coverCard;

    @Column(name = "cards_in_pack")
    private short cardsInPack;

    @Column(name = "cards_per_pack")
    private byte cardsPerPack;

}
