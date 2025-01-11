create table if not exists `card` (
	`id` bigint not null auto_increment primary key,
	`name` varchar(255) not null,
	`game_name` varchar(255) not null,
	`rarity` varchar(50) not null,
	`typeline` varchar(255),
	`type` varchar(100) not null,
	`human_readable_card_type` varchar(100) not null,
	`frame_type` varchar(100) not null,
	`description` longtext not null,
	`race` varchar(150) not null,
	`atk` smallint,
	`def` smallint,
	`level` tinyint,
	`attribute` varchar(10),
	`archetype` longtext,
	`image` longtext,
	`image_cropped` longtext
);

create index `idx_card_name` on `card` (`name`);

create table if not exists `pack` (
	`id` bigint not null auto_increment primary key,
	`name` varchar(255) not null,
	`cost` smallint not null,
	`unlock_condition` longtext not null,
	`cover_card` longtext not null,
	`cards_in_pack` smallint not null,
	`cards_per_pack` tinyint not null
);

create table if not exists `pack_card` (
	`id` bigint not null auto_increment primary key,
	`card_id` bigint not null,
	`pack_id` bigint not null,
	
	foreign key (`card_id`) references `card`(`id`),
	foreign key (`pack_id`) references `pack`(`id`)
);

create table if not exists `game` (
	`id` bigint not null auto_increment primary key,
	`name` varchar(255) not null,
	`platform` varchar(100) not null
);

create table if not exists `game_pack` (
	`id` bigint not null auto_increment primary key,
	`game_id` bigint not null,
	`pack_id` bigint not null,
	
	foreign key (`game_id`) references `game`(`id`),
	foreign key (`pack_id`) references `pack`(`id`)
);

alter table `card` modify column `name` varchar(255) not null unique;

create index `idx_card_gamename` on `card` (`game_name`);
alter table `card` modify column `game_name` varchar(255) not null unique;