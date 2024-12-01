package com.runage.ygobuilder.service;

import ch.qos.logback.core.util.StringUtil;
import com.runage.ygobuilder.domain.card.CardSearchFilter;
import com.runage.ygobuilder.entity.Card;
import com.runage.ygobuilder.entity.pages.CardPageSettings;
import com.runage.ygobuilder.entity.pages.CardSpecification;
import com.runage.ygobuilder.repository.CardRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@AllArgsConstructor
public class CardService {

    private final CardRepository cardRepository;

    public Card findById(final Long id) {
        return cardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException());
    }

    public List<Card> findByNameOrGameName(final String name) {
        return cardRepository.findByNameContainingOrGameNameContaining(name, name);
    }

    public List<Card> findByFilters(final CardSearchFilter cardSearchFilter) {
        final var specification = CardSpecification.filterBy(cardSearchFilter);

        return cardRepository.findAll(specification);
    }

    public Page<Card> findAll(CardPageSettings cardPageSettings) {
        Pageable pageSettings = null;

        if (StringUtil.isNullOrEmpty(cardPageSettings.sort())) {
            pageSettings = PageRequest.of(cardPageSettings.page(),
                    cardPageSettings.elements());
        } else {
            pageSettings = PageRequest.of(cardPageSettings.page(),
                    cardPageSettings.elements(),
                    Sort.by(cardPageSettings.sort()));
        }

        return cardRepository.findAll(pageSettings);
    }

    public Card saveCard(Card ygoCard) {
        return cardRepository.save(ygoCard);
    }
}
