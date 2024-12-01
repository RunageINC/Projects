package com.runage.ygobuilder.repository;

import com.runage.ygobuilder.entity.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface CardRepository extends JpaRepository<Card, Long>, JpaSpecificationExecutor<Card> {

    List<Card> findByNameContainingOrGameNameContaining(String name, String gameName);

    @Query("SELECT card FROM Card card WHERE card.gameName in :nameList")
    Set<Card> findByNameInList(String[] nameList);

    Set<Card> findByRarity(String rarity);

    Set<Card> findByArchetypeContaining(String archetype);
}
