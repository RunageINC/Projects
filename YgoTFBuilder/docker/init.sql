CREATE DATABASE ygo_database;

create table if not exists card (
    id bigint generated always as identity primary key,
    name varchar(255) not null,
    game_name varchar(255) not null,
    rarity varchar(50) not null,
    typeline varchar(255),
    type varchar(100) not null,
    human_readable_card_type varchar(100) not null,
    frame_type varchar(100) not null,
    description text not null,
    race varchar(150) not null,
    atk smallint,
    def smallint,
    level smallint,
    attribute varchar(10),
    archetype text,
    image text,
    image_cropped text
);

create index if not exists idx_card_name on card (name);

create table if not exists pack (
    id bigint generated always as identity primary key,
    name varchar(255) not null,
    cost smallint not null,
    unlock_condition text not null,
    cover_card text not null,
    cards_in_pack smallint not null,
    cards_per_pack smallint not null
);

create table if not exists pack_card (
    id bigint generated always as identity primary key,
    card_id bigint not null,
    pack_id bigint not null,
    foreign key (card_id) references card(id),
    foreign key (pack_id) references pack(id)
);

create table if not exists game (
    id bigint generated always as identity primary key,
    name varchar(255) not null,
    platform varchar(100) not null
);

create table if not exists game_pack (
    id bigint generated always as identity primary key,
    game_id bigint not null,
    pack_id bigint not null,
    foreign key (game_id) references game(id),
    foreign key (pack_id) references pack(id)
);

-- Add unique constraints
alter table card
    add constraint uq_card_name unique (name);

create index if not exists idx_card_gamename on card (game_name);

alter table card
    add constraint uq_card_gamename unique (game_name);