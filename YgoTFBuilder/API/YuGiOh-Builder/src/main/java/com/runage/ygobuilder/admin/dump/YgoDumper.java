package com.runage.ygobuilder.admin.dump;

import com.runage.ygobuilder.domain.card.CardCreate;
import com.runage.ygobuilder.domain.PackCreate;
import com.runage.ygobuilder.entity.Card;
import com.runage.ygobuilder.entity.Pack;
import com.runage.ygobuilder.repository.PackRepository;
import com.runage.ygobuilder.repository.CardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Service
@Slf4j
@RequiredArgsConstructor
public class YgoDumper {

    private final CardRepository ygoCardRepository;
    private final PackRepository packRepository;

    @Bean
    public RestTemplate restTemplate(final RestTemplateBuilder builder) {
        return builder.setConnectTimeout(Duration.ofMillis(30000))
                .setReadTimeout(Duration.ofMillis(30000))
                .build();
    }

    public String dumpCards() {
        final String JSON_SERVER_CARD_URL = "http://localhost:3000/cards";
        final Set<Card> cardSetForSave = new HashSet<>();

        RestTemplate template = new RestTemplate();

        final var cards = template.getForObject(JSON_SERVER_CARD_URL, CardCreate[].class);

        for (CardCreate card : cards) {
            Card cardToSetElement = Card.builder()
                    .name(card.name())
                    .gameName(card.gameName())
                    .rarity(card.rarity())
                    .typeline(Objects.isNull(card.typeline()) ? null : String.join(";", card.typeline()))
                    .type(card.type())
                    .humanReadableCardType(card.humanReadableCardType())
                    .frameType(card.frameType())
                    .description(card.description())
                    .race(card.race())
                    .atk(card.atk())
                    .def(card.def())
                    .level(card.level())
                    .attribute(card.attribute())
                    .archetype(card.archetype())
                    .image(card.image())
                    .imageCropped(card.imageCropped())
                    .build();

            cardSetForSave.add(cardToSetElement);
        }

        ygoCardRepository.saveAll(cardSetForSave);

        return "Finished";
    }

    public String dumpPacks() {
        final String JSON_SERVER_PACK_URL = "http://localhost:3000/packs";
        final Set<Pack> packSetForSave = new HashSet<>();

        RestTemplate template = new RestTemplate();

        final var packs = template.getForObject(JSON_SERVER_PACK_URL, PackCreate[].class);

        for (PackCreate ygoCardPackCreate : packs) {
            final var cardList = ygoCardRepository.findByNameInList(ygoCardPackCreate.cards());
            final var coverCard = ygoCardRepository
                    .findByNameContainingOrGameNameContaining(ygoCardPackCreate.coverCard(), ygoCardPackCreate.coverCard());

            if (cardList.isEmpty()) return "Card not found in list";

            Pack pack = Pack.builder()
                    .name(ygoCardPackCreate.name())
                    .cards(cardList)
                    .cost(ygoCardPackCreate.cost())
                    .unlockBy(ygoCardPackCreate.unlockedBy())
                    .coverCard(coverCard.getFirst().getImageCropped())
                    .cardsInPack((short) cardList.size())
                    .cardsPerPack(ygoCardPackCreate.cardsPerPack())
                    .build();

            packSetForSave.add(pack);
        }

        packRepository.saveAll(packSetForSave);

        return "Finished";
    }

}
