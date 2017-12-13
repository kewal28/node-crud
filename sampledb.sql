-- Adminer 4.2.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `customer` (`id`, `name`, `address`, `email`, `phone`, `image`) VALUES
(24,	'Kewal Kanojia',	'Test',	'kewal@incaendo.com',	'7838723209',	'imgUploader_1513148531557_ultra_dm_1495373946.jpg'),
(25,	'Kapil Kumar',	'asd ds as ds',	'kapil.kumar@incaendo.com',	'8882192757',	'imgUploader_1513148616018_240_F_78735333_o3qJe4bT5ciwldLIjVDulFKrDAV3jGYO.jpg'),
(26,	'Sadanad',	'asdsad',	'sadanand@incaendo.com',	'8826941235',	'imgUploader_1513148758490_person-flat.png'),
(27,	'Hanumant Sir',	'adh sdghjsgdhsajd',	'hanumant@incaendo.com',	'9716133082',	'imgUploader_1513148819457_240_F_78735333_o3qJe4bT5ciwldLIjVDulFKrDAV3jGYO.jpg');

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `FullName` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `UserName` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Status` tinyint(1) NOT NULL,
  `ActionBy` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `user` (`id`, `FullName`, `Email`, `UserName`, `Password`, `Status`, `ActionBy`) VALUES
(1,	'Admin',	'admin@gmail.com',	'admin',	'e10adc3949ba59abbe56e057f20f883e',	1,	'admin');

-- 2017-12-13 07:15:21
