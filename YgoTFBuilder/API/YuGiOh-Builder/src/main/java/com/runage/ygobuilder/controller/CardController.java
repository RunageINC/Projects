package com.runage.ygobuilder.controller;

import com.runage.ygobuilder.domain.card.CardCreate;
import com.runage.ygobuilder.domain.card.CardSearchFilter;
import com.runage.ygobuilder.entity.Card;
import com.runage.ygobuilder.entity.pages.CardPageSettings;
import com.runage.ygobuilder.service.CardService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Objects;

@RestController
@RequestMapping("/cards")
@CrossOrigin(origins = "*")
@AllArgsConstructor
public class CardController {

    private final CardService cardService;

    @GetMapping
    public ResponseEntity findCards(@RequestParam(name = "name", required = false) String name,
                                    @RequestParam(name = "description", required = false) String description,
                                    @RequestParam(name = "archetype", required = false) String archetype,
                                    @RequestParam(name = "rarity", required = false) String rarity,
                                    @RequestParam(name = "typeline", required = false) String typeline,
                                    @RequestParam(name = "type", required = false) String type,
                                    @RequestParam(name = "frame", required = false) String frame,
                                    @RequestParam(name = "race", required = false) String race,
                                    @RequestParam(name = "atk", required = false) String atk,
                                    @RequestParam(name = "def", required = false) String def,
                                    @RequestParam(name = "level", required = false) String level,
                                    @RequestParam(name = "attribute", required = false) String attribute,
                                    @RequestParam(name = "page", required = false, defaultValue = "0") int page,
                                    @RequestParam(name = "elements", required = false, defaultValue = "50") int elements,
                                    @RequestParam(name = "sortBy", required = false, defaultValue = "") String sortBy) {
        CardPageSettings cardPageSettings = new CardPageSettings(page, elements, sortBy);
        CardSearchFilter cardSearchFilter = new CardSearchFilter(name, archetype, rarity, typeline, description, type, frame, race, atk, def, level, attribute);

        if (cardSearchFilter.allIsNull())
            return ResponseEntity.ok(cardService.findAll(cardPageSettings));

        return ResponseEntity.ok(cardService.findByFilters(cardSearchFilter));
    }

    @PostMapping
    public ResponseEntity saveCard(@RequestBody CardCreate ygoCardCreate) throws URISyntaxException {
        Card cardEntity = Card.builder()
                .name(ygoCardCreate.name())
                .gameName(ygoCardCreate.gameName())
                .rarity(ygoCardCreate.rarity())
                .typeline(Objects.isNull(ygoCardCreate.typeline()) ? null : String.join(";", ygoCardCreate.typeline()))
                .type(ygoCardCreate.type())
                .humanReadableCardType(ygoCardCreate.humanReadableCardType())
                .frameType(ygoCardCreate.frameType())
                .description(ygoCardCreate.description())
                .race(ygoCardCreate.race())
                .atk(ygoCardCreate.atk())
                .def(ygoCardCreate.def())
                .level(ygoCardCreate.level())
                .attribute(ygoCardCreate.attribute())
                .archetype(ygoCardCreate.archetype())
                .image(ygoCardCreate.image())
                .imageCropped(ygoCardCreate.imageCropped())
                .build();

        return ResponseEntity.created(new URI("/cards")).body(cardService.saveCard(cardEntity));
    }
}
