-- MySQL dump 10.13  Distrib 5.6.27, for osx10.8 (x86_64)
--
-- Host: localhost    Database: hotel
-- ------------------------------------------------------
-- Server version	5.6.27-enterprise-commercial-advanced

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `hotel`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `hotel` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `hotel`;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `booking` (
  `bookingId` int(11) NOT NULL AUTO_INCREMENT,
  `hotelId` int(11) DEFAULT NULL,
  `roomNo` int(11) DEFAULT NULL,
  `guestId` int(11) DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  PRIMARY KEY (`bookingId`),
  UNIQUE KEY `uq_booking` (`hotelId`,`roomNo`,`guestId`,`startDate`),
  KEY `fk_booking_guestId` (`guestId`),
  KEY `fk_booking_roomNo_idx` (`roomNo`),
  CONSTRAINT `fk_booking_guestId` FOREIGN KEY (`guestId`) REFERENCES `guest` (`guestId`),
  CONSTRAINT `fk_booking_hotelId` FOREIGN KEY (`hotelId`) REFERENCES `hotel` (`hotelId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (13,1,101,1,'2016-01-01','2016-01-05'),(14,2,101,2,'2016-01-01','2016-01-04');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guest`
--

DROP TABLE IF EXISTS `guest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `guest` (
  `guestId` int(11) NOT NULL AUTO_INCREMENT,
  `guestAddress` varchar(255) DEFAULT NULL,
  `guestName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`guestId`),
  UNIQUE KEY `uq_guest` (`guestAddress`,`guestName`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guest`
--

LOCK TABLES `guest` WRITE;
/*!40000 ALTER TABLE `guest` DISABLE KEYS */;
INSERT INTO `guest` VALUES (2,'123 Main St','Jim Bob'),(1,'123 Main St','John Smith');
/*!40000 ALTER TABLE `guest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hotel` (
  `hotelId` int(11) NOT NULL AUTO_INCREMENT,
  `hotelName` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`hotelId`),
  UNIQUE KEY `uq_hotel` (`hotelName`,`city`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (3,'High Rise','New York'),(4,'High Roller','Las Vegas'),(5,'Royal Palace','London'),(1,'Seatle Best','Seatle'),(2,'Seatle Choice','Seatle');
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room` (
  `hotelId` int(11) NOT NULL DEFAULT '0',
  `roomNo` int(11) NOT NULL DEFAULT '0',
  `price` decimal(15,2) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`hotelId`,`roomNo`),
  CONSTRAINT `fk_room_hotelId` FOREIGN KEY (`hotelId`) REFERENCES `hotel` (`hotelId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,101,129.00,'standard'),(1,102,129.00,'standard'),(1,103,129.00,'standard'),(1,104,149.00,'deluxe'),(1,105,149.00,'deluxe'),(1,201,249.00,'suite'),(1,202,249.00,'suite'),(2,101,99.00,'standard'),(2,102,99.00,'standard'),(2,103,99.00,'standard'),(3,1101,349.00,'standard'),(3,1102,349.00,'standard'),(3,1103,399.00,'deluxe'),(3,4901,1499.00,'penthouse'),(4,101,299.00,'deluxe'),(4,102,299.00,'deluxe'),(4,201,399.00,'suite'),(5,101,499.00,'suite'),(5,102,499.00,'suite'),(5,103,499.00,'suite');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `v_bookings`
--

DROP TABLE IF EXISTS `v_bookings`;
/*!50001 DROP VIEW IF EXISTS `v_bookings`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `v_bookings` AS SELECT 
 1 AS `bookingId`,
 1 AS `hotelId`,
 1 AS `guestId`,
 1 AS `hotelName`,
 1 AS `city`,
 1 AS `roomNo`,
 1 AS `price`,
 1 AS `type`,
 1 AS `startDate`,
 1 AS `endDate`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `v_rooms`
--

DROP TABLE IF EXISTS `v_rooms`;
/*!50001 DROP VIEW IF EXISTS `v_rooms`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `v_rooms` AS SELECT 
 1 AS `hotelId`,
 1 AS `hotelName`,
 1 AS `city`,
 1 AS `roomNo`,
 1 AS `price`,
 1 AS `type`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping routines for database 'hotel'
--
/*!50003 DROP PROCEDURE IF EXISTS `purge_guest` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `purge_guest`()
BEGIN
	delete from guest;
    alter table guest auto_increment = 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Current Database: `hotel`
--

USE `hotel`;

--
-- Final view structure for view `v_bookings`
--

/*!50001 DROP VIEW IF EXISTS `v_bookings`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_bookings` AS select `b`.`bookingId` AS `bookingId`,`b`.`hotelId` AS `hotelId`,`b`.`guestId` AS `guestId`,`h`.`hotelName` AS `hotelName`,`h`.`city` AS `city`,`b`.`roomNo` AS `roomNo`,`r`.`price` AS `price`,`r`.`type` AS `type`,`b`.`startDate` AS `startDate`,`b`.`endDate` AS `endDate` from ((`booking` `b` left join `hotel` `h` on((`h`.`hotelId` = `b`.`hotelId`))) left join `room` `r` on(((`r`.`hotelId` = `b`.`hotelId`) and (`r`.`roomNo` = `b`.`roomNo`)))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `v_rooms`
--

/*!50001 DROP VIEW IF EXISTS `v_rooms`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_rooms` AS select `h`.`hotelId` AS `hotelId`,`h`.`hotelName` AS `hotelName`,`h`.`city` AS `city`,`r`.`roomNo` AS `roomNo`,`r`.`price` AS `price`,`r`.`type` AS `type` from (`hotel` `h` join `room` `r` on((`h`.`hotelId` = `r`.`hotelId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-13 23:16:35
