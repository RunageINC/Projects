interface Pagination<T> {
  data: T[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

type Card = {
  id: number;
  name: string;
  gameName: string;
  rarity: string;
  typeline: string;
  type: string;
  humanReadableCardType: string;
  frameType: string;
  description: string;
  race: string;
  atk: number;
  def: number;
  level: number;
  attribute: string;
  archetype: string;
  image: string;
  imageCropped: string;
};

type Deck = {
  name: string;
  gameAppearance: string;
  coverCard: string;
  description: string;
  playtip: string;
  mainDeck: number[];
  extraDeck: number[];
  sideDeck: number[];
};

type PlayerDeck = Deck & {
  _id: string;
  bestPartners: string[];
};

type Duelist = {
  _id: string;
  name: string;
  gameAppearance: string;
  level: string;
  imageUrl: string;
  description: string;
  foundAt: string;
  decks: Deck[];
};
