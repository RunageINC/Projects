class Card {
  constructor(
    id,
    name,
    gameName,
    rarity,
    typeline,
    type,
    humanReadableCardType,
    frameType,
    desc,
    race,
    atk,
    def,
    level,
    attribute,
    archetype,
    image,
    imageCropped
  ) {
    this.id = id;
    this.name = name;
    this.gameName = gameName;
    this.rarity = rarity;
    this.typeline = typeline;
    this.type = type;
    this.humanReadableCardType = humanReadableCardType;
    this.frameType = frameType;
    this.desc = desc;
    this.race = race;
    this.atk = atk;
    this.def = def;
    this.level = level;
    this.attribute = attribute;
    this.archetype = archetype;
    this.image = image;
    this.imageCropped = imageCropped;
  }

  static buildEntity(id, data, rarity) {
    const {
      name,
      typeline,
      type,
      humanReadableCardType,
      frameType,
      desc,
      race,
      atk,
      def,
      level,
      attribute,
      archetype,
      card_images,
    } = data;

    return new Card(
      id,
      name,
      name,
      rarity,
      typeline,
      type,
      humanReadableCardType,
      frameType,
      desc,
      race,
      atk,
      def,
      level,
      attribute,
      archetype,
      card_images[0].image_url,
      card_images[0].image_url_cropped
    );
  }

  static buildEntityWithOldName(id, data, rarity, gameName) {
    const {
      name,
      typeline,
      type,
      humanReadableCardType,
      frameType,
      desc,
      race,
      atk,
      def,
      level,
      attribute,
      archetype,
      card_images,
    } = data;

    return new Card(
      id,
      name,
      gameName,
      rarity,
      typeline,
      type,
      humanReadableCardType,
      frameType,
      desc,
      race,
      atk,
      def,
      level,
      attribute,
      archetype,
      card_images[0].image_url,
      card_images[0].image_url_cropped
    );
  }

  static buildEntityWithOldNameAndNoId(data, rarity, gameName) {
    const {
      name,
      typeline,
      type,
      humanReadableCardType,
      frameType,
      desc,
      race,
      atk,
      def,
      level,
      attribute,
      archetype,
      card_images,
    } = data;

    return new Card(
      null,
      name,
      gameName,
      rarity,
      typeline,
      type,
      humanReadableCardType,
      frameType,
      desc,
      race,
      atk,
      def,
      level,
      attribute,
      archetype,
      card_images[0].image_url,
      card_images[0].image_url_cropped
    );
  }
}

export default Card;
