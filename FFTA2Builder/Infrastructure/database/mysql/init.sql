CREATE TABLE IF NOT EXISTS `user` (
    `id` VARCHAR(255) NOT NULL PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS `game` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `platform` VARCHAR(100) NOT NULL,
    `game_image` LONGTEXT DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `clan` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `leader_id` VARCHAR(255) NOT NULL,
    `lore` LONGTEXT DEFAULT NULL,
    `negotiation` TINYINT UNSIGNED DEFAULT 0,
    `aptitude` TINYINT UNSIGNED DEFAULT 0,
    `teamwork` TINYINT UNSIGNED DEFAULT 0,
    `adaptability` TINYINT UNSIGNED DEFAULT 0,
    `img_url` LONGTEXT DEFAULT NULL,
    `game_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `location` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `region` VARCHAR(100) NOT NULL,
    `lore` LONGTEXT DEFAULT NULL,
    `img_url` LONGTEXT DEFAULT NULL,
    `owner_clan_id` BIGINT DEFAULT NULL,
    `game_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `battle_map` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `lore` LONGTEXT DEFAULT NULL,
    `img_url` LONGTEXT DEFAULT NULL,
    `location_id` BIGINT NOT NULL,
    `game_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `race`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `lore` LONGTEXT DEFAULT NULL,
    `is_flying` BOOLEAN NOT NULL DEFAULT 0,
    `img_url` LONGTEXT DEFAULT NULL,
    `game_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `job` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `usage_requirements` LONGTEXT NOT NULL,
    `unlock_requirements` LONGTEXT NOT NULL,
    `lore` LONGTEXT DEFAULT NULL,
    `move` SMALLINT UNSIGNED DEFAULT 0, 
    `jump` SMALLINT UNSIGNED DEFAULT 0, 
    `unnarmed_attack_raise` SMALLINT UNSIGNED DEFAULT 0, 
    `resilience` SMALLINT UNSIGNED DEFAULT 0,
    `hp` CHAR(1) NOT NULL,
    `mp` CHAR(1) NOT NULL,
    `atk` CHAR(1) NOT NULL,
    `def` CHAR(1) NOT NULL,
    `mgk` CHAR(1) NOT NULL,
    `res` CHAR(1) NOT NULL,
    `spd` CHAR(1) NOT NULL,
    `img_url` LONGTEXT DEFAULT NULL,
    `game_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `equipment`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(200) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `lore` LONGTEXT DEFAULT NULL,
    `price` INT UNSIGNED NOT NULL DEFAULT 0,
    `range` TINYINT UNSIGNED DEFAULT 0,
    `alternative_source` LONGTEXT DEFAULT NULL,
    `atk` SMALLINT UNSIGNED DEFAULT 0,
    `def` SMALLINT UNSIGNED DEFAULT 0,
    `mgk` SMALLINT UNSIGNED DEFAULT 0,
    `res` SMALLINT UNSIGNED DEFAULT 0,
    `eva` SMALLINT UNSIGNED DEFAULT 0,
    `spd` SMALLINT UNSIGNED DEFAULT 0,
    `extra_effect` VARCHAR(200) DEFAULT NULL,
    `img_url` LONGTEXT DEFAULT NULL,
    `type` VARCHAR(100) CHECK (`type` IN ('Shoes', 'Gloves', 'Accessory', 'Helm', 'Hair Adornment', 'Hat', 'Heavy Armor', 'Light Armor', 'Robe', 'Shield', 'Knife', 'Sword', 'Blade', 'Saber', 'Knightsword', 'Rapier', 'Greatsword', 'Broadsword', 'Katana', 'Spear', 'Axe', 'Rod', 'Staff', 'Pole', 'Knuckle', 'Instrument', 'Hammer', 'Mace', 'Book', 'Bow', 'Greatbow', 'Gun', 'Hand-cannon', 'Card')),
    `element` VARCHAR(7) CHECK (`element` IN ('Fire', 'Water', 'Ice', 'Thunder', 'Air', 'Earth', 'Light', 'Dark', 'Neutral')),
    `category` VARCHAR(100) CHECK (`category` IN ('Extra', 'Head', 'Armor', 'Shield', 'Edged Weapon', 'Bludgeoning Weapon', 'Ranged Weapon')),
    `bazaar_rank` CHAR(1) CHECK (`bazaar_rank` IN ('E', 'D', 'C', 'B', 'A', 'X')),
    `bazaar_category` VARCHAR(200) NOT NULL,
    `game_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `ability_type` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(200) NOT NULL,
    `type` VARCHAR(8) CHECK (`type` IN ('Command', 'Reaction', 'Passive')),
    `game_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `status`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(200) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `game_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `skill`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(200) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `lore` LONGTEXT DEFAULT NULL,
    `element` VARCHAR(7) CHECK (`element` IN ('Fire', 'Water', 'Ice', 'Thunder', 'Air', 'Earth', 'Light', 'Dark', 'Neutral')),
    `range` TINYINT UNSIGNED DEFAULT 0,
    `ap` SMALLINT UNSIGNED DEFAULT 0,
    `mp` SMALLINT UNSIGNED DEFAULT 0,
    `img_url` LONGTEXT DEFAULT NULL,
    `learn_by_equip_id` BIGINT DEFAULT NULL,
    `ability_type_id` BIGINT NOT NULL,
    `status_id` BIGINT NOT NULL,
    `game_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `character` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `gender` VARCHAR(6) CHECK (`gender` IN ('Male', 'Female')),
    `unlock_requirements` TEXT NOT NULL,
    `lore` LONGTEXT DEFAULT NULL,
    `img_url` LONGTEXT DEFAULT NULL,
    `race_id` BIGINT NOT NULL,
    `starting_job_id` BIGINT NOT NULL,
    `game_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `built_character_ffta2` (
    `id` VARCHAR(255) NOT NULL PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `gender` VARCHAR(6) CHECK (`gender` IN ('Male', 'Female')),
    `lore` LONGTEXT DEFAULT NULL,
    `ability_1` BIGINT DEFAULT NULL,
    `ability_2` BIGINT DEFAULT NULL,
    `reaction_ability` BIGINT DEFAULT NULL,
    `passive_ability` BIGINT DEFAULT NULL,
    `job_id` BIGINT NOT NULL,
    `race_id` BIGINT NOT NULL,
    `clan_id` BIGINT NOT NULL,
    `slot_1` BIGINT DEFAULT NULL,
    `slot_2` BIGINT DEFAULT NULL,
    `slot_3` BIGINT DEFAULT NULL,
    `slot_4` BIGINT DEFAULT NULL,
    `slot_5` BIGINT DEFAULT NULL,
    `user_id` VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS `item` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(200) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `effect` LONGTEXT NOT NULL,
    `lore` LONGTEXT DEFAULT NULL,
    `price` INT UNSIGNED NOT NULL DEFAULT 0,
    `img_url` LONGTEXT DEFAULT NULL,
    `game_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `quest` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `type` VARCHAR(100) NOT NULL CHECK (`type` IN ('Defeat Mark', 'Delivery', 'Escort', 'Satisfy', 'Petitioner', 'Item Recovery', 'Meet Objectives')),
    `rank` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    `fee` INT UNSIGNED NOT NULL DEFAULT 0,
    `days` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    `negotiation` TINYINT UNSIGNED DEFAULT 0,
    `aptitude` TINYINT UNSIGNED DEFAULT 0,
    `teamwork` TINYINT UNSIGNED DEFAULT 0,
    `adaptability` TINYINT UNSIGNED DEFAULT 0,
    `lore` LONGTEXT DEFAULT NULL,
    `description` LONGTEXT NOT NULL,
    `can_dispatch` BOOLEAN NOT NULL DEFAULT 0,
    `can_cancel` BOOLEAN NOT NULL DEFAULT 0,
    `can_repeat` BOOLEAN NOT NULL DEFAULT 0,
    `location_id` BIGINT NOT NULL,
    `recommended_job_id` BIGINT DEFAULT NULL,
    `game_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `quest_item_requirement` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `quest_id` BIGINT NOT NULL,
    `item_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `loot` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255),
    `price` INT UNSIGNED NOT NULL DEFAULT 0,
    `description` LONGTEXT NOT NULL,
    `img_url` LONGTEXT DEFAULT NULL,
    `lore` LONGTEXT DEFAULT NULL,
    `game_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `craft` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `equipment_id` BIGINT NOT NULL,
    `loot_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `reward` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `gil` INT UNSIGNED NOT NULL DEFAULT 0,
    `quest_id` BIGINT NOT NULL,
    `item_id` BIGINT DEFAULT NULL,
    `loot_id` BIGINT DEFAULT NULL,
    `equipment_id` BIGINT DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `monster`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(200) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `lore` LONGTEXT DEFAULT NULL,
    `is_undead` BOOLEAN NOT NULL DEFAULT 0,
    `img_url` LONGTEXT DEFAULT NULL,
    `weaknesses` LONGTEXT DEFAULT NULL,
    `half_damage` LONGTEXT DEFAULT NULL,
    `null_damage` LONGTEXT DEFAULT NULL,
    `absorbs` LONGTEXT DEFAULT NULL,
    `race` VARCHAR(100) NOT NULL,
    `move` SMALLINT UNSIGNED DEFAULT 0, 
    `jump` SMALLINT UNSIGNED DEFAULT 0, 
    `evasion` SMALLINT UNSIGNED DEFAULT 0, 
    `resilience` SMALLINT UNSIGNED DEFAULT 0
);

CREATE TABLE IF NOT EXISTS `monster_skill` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `monster_id` BIGINT NOT NULL,
    `skill_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `race_locations` (
	`id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`location_id` BIGINT NOT NULL,
	`race_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `exclusive_jobs` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `character_id` BIGINT NOT NULL,
    `job_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `equipment_job` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `job_id` BIGINT NOT NULL,
    `equipment_id` BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS `job_ability_type` (
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `job_id` BIGINT NOT NULL,
    `ability_type_id` BIGINT NOT NULL
);

ALTER TABLE `clan` ADD FOREIGN KEY (`leader_id`) REFERENCES `built_character_ffta2`(`id`);
ALTER TABLE `location` ADD FOREIGN KEY (`owner_clan_id`) REFERENCES `clan`(`id`);
ALTER TABLE `battle_map` ADD FOREIGN KEY (`location_id`) REFERENCES `location`(`id`);
ALTER TABLE `skill` ADD FOREIGN KEY (`learn_by_equip_id`) REFERENCES `equipment`(`id`);
ALTER TABLE `skill` ADD FOREIGN KEY (`ability_type_id`) REFERENCES `ability_type`(`id`);
ALTER TABLE `skill` ADD FOREIGN KEY (`status_id`) REFERENCES `status`(`id`);
ALTER TABLE `character` ADD FOREIGN KEY (`race_id`) REFERENCES `race`(`id`);
ALTER TABLE `character` ADD FOREIGN KEY (`starting_job_id`) REFERENCES `job`(`id`);
ALTER TABLE `built_character_ffta2` ADD FOREIGN KEY (`ability_1`) REFERENCES `ability_type`(`id`);
ALTER TABLE `built_character_ffta2` ADD FOREIGN KEY (`ability_2`) REFERENCES `ability_type`(`id`);
ALTER TABLE `built_character_ffta2` ADD FOREIGN KEY (`reaction_ability`) REFERENCES `ability_type`(`id`);
ALTER TABLE `built_character_ffta2` ADD FOREIGN KEY (`passive_ability`) REFERENCES `ability_type`(`id`);
ALTER TABLE `built_character_ffta2` ADD FOREIGN KEY (`job_id`) REFERENCES `job`(`id`);
ALTER TABLE `built_character_ffta2` ADD FOREIGN KEY (`race_id`) REFERENCES `race`(`id`);
ALTER TABLE `built_character_ffta2` ADD FOREIGN KEY (`clan_id`) REFERENCES `clan`(`id`);
ALTER TABLE `built_character_ffta2` ADD FOREIGN KEY (`slot_1`) REFERENCES `equipment`(`id`);
ALTER TABLE `built_character_ffta2` ADD FOREIGN KEY (`slot_2`) REFERENCES `equipment`(`id`);
ALTER TABLE `built_character_ffta2` ADD FOREIGN KEY (`slot_3`) REFERENCES `equipment`(`id`);
ALTER TABLE `built_character_ffta2` ADD FOREIGN KEY (`slot_4`) REFERENCES `equipment`(`id`);
ALTER TABLE `built_character_ffta2` ADD FOREIGN KEY (`slot_5`) REFERENCES `equipment`(`id`);
ALTER TABLE `built_character_ffta2` ADD FOREIGN KEY (`user_id`) REFERENCES `user`(`id`);
ALTER TABLE `quest` ADD FOREIGN KEY (`location_id`) REFERENCES `location`(`id`);
ALTER TABLE `quest` ADD FOREIGN KEY (`recommended_job_id`) REFERENCES `job`(`id`);
ALTER TABLE `quest_item_requirement` ADD FOREIGN KEY (`quest_id`) REFERENCES `quest`(`id`);
ALTER TABLE `quest_item_requirement` ADD FOREIGN KEY (`item_id`) REFERENCES `item`(`id`);
ALTER TABLE `craft` ADD FOREIGN KEY (`equipment_id`) REFERENCES `equipment`(`id`);
ALTER TABLE `craft` ADD FOREIGN KEY (`loot_id`) REFERENCES `loot`(`id`);
ALTER TABLE `reward` ADD FOREIGN KEY (`quest_id`) REFERENCES `quest`(`id`);
ALTER TABLE `reward` ADD FOREIGN KEY (`item_id`) REFERENCES `item`(`id`);
ALTER TABLE `reward` ADD FOREIGN KEY (`equipment_id`) REFERENCES `equipment`(`id`);
ALTER TABLE `reward` ADD FOREIGN KEY (`loot_id`) REFERENCES `loot`(`id`);
ALTER TABLE `monster_skill` ADD FOREIGN KEY (`monster_id`) REFERENCES `monster`(`id`);
ALTER TABLE `monster_skill` ADD FOREIGN KEY (`skill_id`) REFERENCES `skill`(`id`);
ALTER TABLE `race_locations` ADD FOREIGN KEY(`location_id`) REFERENCES `location`(`id`);
ALTER TABLE `race_locations` ADD FOREIGN KEY(`race_id`) REFERENCES `race`(`id`);
ALTER TABLE `exclusive_jobs` ADD FOREIGN KEY (`character_id`) REFERENCES `character`(`id`);
ALTER TABLE `exclusive_jobs` ADD FOREIGN KEY (`job_id`) REFERENCES `job`(`id`);
ALTER TABLE `equipment_job` ADD FOREIGN KEY (`job_id`) REFERENCES `job`(`id`);
ALTER TABLE `equipment_job` ADD FOREIGN KEY (`equipment_id`) REFERENCES `equipment`(`id`);
ALTER TABLE `job_ability_type` ADD FOREIGN KEY (`job_id`) REFERENCES `job`(`id`);
ALTER TABLE `job_ability_type` ADD FOREIGN KEY (`ability_type_id`) REFERENCES `ability_type`(`id`);

ALTER TABLE `clan` ADD FOREIGN KEY (`game_id`) REFERENCES `game`(`id`);
ALTER TABLE `location` ADD FOREIGN KEY (`game_id`) REFERENCES `game`(`id`);
ALTER TABLE `race` ADD FOREIGN KEY (`game_id`) REFERENCES `game`(`id`);
ALTER TABLE `job` ADD FOREIGN KEY (`game_id`) REFERENCES `game`(`id`);
ALTER TABLE `equipment` ADD FOREIGN KEY (`game_id`) REFERENCES `game`(`id`);
ALTER TABLE `ability_type` ADD FOREIGN KEY (`game_id`) REFERENCES `game`(`id`);
ALTER TABLE `status` ADD FOREIGN KEY (`game_id`) REFERENCES `game`(`id`);
ALTER TABLE `skill` ADD FOREIGN KEY (`game_id`) REFERENCES `game`(`id`);
ALTER TABLE `character` ADD FOREIGN KEY (`game_id`) REFERENCES `game`(`id`);
ALTER TABLE `item` ADD FOREIGN KEY (`game_id`) REFERENCES `game`(`id`);
ALTER TABLE `quest` ADD FOREIGN KEY (`game_id`) REFERENCES `game`(`id`);
ALTER TABLE `loot` ADD FOREIGN KEY (`game_id`) REFERENCES `game`(`id`);

ALTER TABLE `job` ADD COLUMN `hp_growth` TINYINT UNSIGNED DEFAULT 0;
ALTER TABLE `job` ADD COLUMN `mp_growth` TINYINT UNSIGNED DEFAULT 0;
ALTER TABLE `job` ADD COLUMN `atk_growth` TINYINT UNSIGNED DEFAULT 0;
ALTER TABLE `job` ADD COLUMN `def_growth` TINYINT UNSIGNED DEFAULT 0;
ALTER TABLE `job` ADD COLUMN `mgk_growth` TINYINT UNSIGNED DEFAULT 0;
ALTER TABLE `job` ADD COLUMN `resist_growth` TINYINT UNSIGNED DEFAULT 0;
ALTER TABLE `job` ADD COLUMN `speed_growth` TINYINT UNSIGNED DEFAULT 0; -- In percentage

ALTER TABLE `job` RENAME COLUMN `resilience` TO `evasion`;
ALTER TABLE `job` MODIFY COLUMN `spd` TINYINT UNSIGNED DEFAULT 0; -- In percentage
ALTER TABLE `job` ADD COLUMN `sprite_url` LONGTEXT DEFAULT NULL;

ALTER TABLE `ability_type` ADD COLUMN `description` LONGTEXT NOT NULL;

ALTER TABLE `job` ADD COLUMN `resilience` TINYINT UNSIGNED DEFAULT 0;
ALTER TABLE `job` ADD COLUMN `observations` LONGTEXT DEFAULT NULL;

-- COMMENT ON COLUMN `clan`.`img_url` IS 'Banner for the clan';