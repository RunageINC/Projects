CREATE TABLE IF NOT EXISTS `player` (
	`id` bigint not null auto_increment primary key,
	`username` varchar(50) not null,
	`password` varchar(50) not null
);

CREATE TABLE IF NOT EXISTS `player_session` (
	`id` bigint not null auto_increment primary key,
	`player_id` bigint not null,
	`refresh_token` longtext not null,
	
	foreign key(`player_id`) references `player`(`id`)
);