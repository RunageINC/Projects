interface Card {
    id: number;
    name: string;
    rarity: string;
    image: string;
}

interface Pack {
    id: number;
    coverCard: string;
    name: string;
    cost: number;
    cardsPerPack: number;
    cardsInPack: number;
    unlockBy: string;
    cards: Card[];
}