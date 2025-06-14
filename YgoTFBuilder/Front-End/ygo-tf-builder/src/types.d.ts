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

type Sort = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

type Pageable = {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

type PaginatedCardResponse = {
  content: Card[];
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  last: false;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: false;
};
