package com.runage.ygobuilder.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Objects;

@Entity
@Table(name = "card")
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Card {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String name;

    @Column(name = "game_name")
    private String gameName;

    @Column
    private String rarity;

    @Column
    private String typeline;

    @Column
    private String type;

    @Column(name = "human_readable_card_type")
    private String humanReadableCardType;

    @Column(name = "frame_type")
    private String frameType;

    @Column
    private String description;

    @Column
    private String race;

    @Column
    private Integer atk;

    @Column
    private Integer def;

    @Column
    private Short level;

    @Column
    private String attribute;

    @Column
    private String archetype;

    @Column
    private String image;

    @Column(name = "image_cropped")
    private String imageCropped;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Card card = (Card) o;
        return Objects.equals(name, card.name);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(name);
    }
}
