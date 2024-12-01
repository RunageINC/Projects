package com.runage.ygobuilder.entity.pages;

import ch.qos.logback.core.util.StringUtil;
import com.runage.ygobuilder.domain.card.CardSearchFilter;
import com.runage.ygobuilder.entity.Card;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;


public class CardSpecification {

    public static Specification<Card> filterBy(final CardSearchFilter cardSearchFilter) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (!StringUtil.isNullOrEmpty(cardSearchFilter.name())) {
                predicates.add(criteriaBuilder.like(root.get("name"), "%" + cardSearchFilter.name() + "%"));
                predicates.add(criteriaBuilder.like(root.get("gameName"), "%" + cardSearchFilter.name() + "%"));
            }

            if (!StringUtil.isNullOrEmpty(cardSearchFilter.archetype())) {
                predicates.add(criteriaBuilder.equal(root.get("archetype"), cardSearchFilter.archetype()));
            }

            if (!StringUtil.isNullOrEmpty(cardSearchFilter.rarity())) {
                predicates.add(criteriaBuilder.equal(root.get("rarity"), cardSearchFilter.rarity()));
            }

            if (!StringUtil.isNullOrEmpty(cardSearchFilter.typeline())) {
                predicates.add(criteriaBuilder.equal(root.get("typeline"), cardSearchFilter.typeline()));
            }

            if (!StringUtil.isNullOrEmpty(cardSearchFilter.description())) {
                predicates.add(criteriaBuilder.like(root.get("description"), "%" + cardSearchFilter.description() + "%"));
            }

            if (!StringUtil.isNullOrEmpty(cardSearchFilter.type())) {
                predicates.add(criteriaBuilder.like(root.get("type"), "%" + cardSearchFilter.type() + "%"));
            }

            if (!StringUtil.isNullOrEmpty(cardSearchFilter.frame())) {
                predicates.add(criteriaBuilder.like(root.get("frameType"), "%" + cardSearchFilter.frame() + "%"));
            }

            if (!StringUtil.isNullOrEmpty(cardSearchFilter.race())) {
                predicates.add(criteriaBuilder.like(root.get("race"), "%" + cardSearchFilter.race() + "%"));
            }

            if (!StringUtil.isNullOrEmpty(cardSearchFilter.attribute())) {
                predicates.add(criteriaBuilder.like(root.get("attribute"), "%" + cardSearchFilter.attribute() + "%"));
            }

            if (!StringUtil.isNullOrEmpty(cardSearchFilter.atk())) {
                Integer attack = Integer.parseInt(cardSearchFilter.atk());
                predicates.add(criteriaBuilder.equal(root.get("atk"), attack));
            }

            if (!StringUtil.isNullOrEmpty(cardSearchFilter.def())) {
                Integer defense = Integer.parseInt(cardSearchFilter.def());
                predicates.add(criteriaBuilder.equal(root.get("def"), defense));
            }

            if (!StringUtil.isNullOrEmpty(cardSearchFilter.level())) {
                Integer level = Integer.parseInt(cardSearchFilter.level());
                predicates.add(criteriaBuilder.equal(root.get("level"), level));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
