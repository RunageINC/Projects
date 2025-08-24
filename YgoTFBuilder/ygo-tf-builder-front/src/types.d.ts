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
