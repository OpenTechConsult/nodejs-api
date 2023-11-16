CREATE DATABASE IF NOT EXISTS `patientsdb`;
USE `patientsdb`;
DROP TABLE IF EXISTS `patients`;
CREATE TABLE `patients` (
    `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
    `first_name` varchar(255) DEFAULT NULL,
    `last_name` varchar(255) DEFAULT NULL,
    `email` varchar(255) DEFAULT NULL,