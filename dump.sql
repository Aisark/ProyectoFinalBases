-- MySQL dump 10.13  Distrib 5.7.19, for macos10.12 (x86_64)
--
-- Host: localhost    Database: proyectoBases
-- ------------------------------------------------------
-- Server version	5.7.19

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
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `tipoCliente` int(11) NOT NULL,
  `celular` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `pwd` varchar(61) NOT NULL,
  `direccionID` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `direccionID` (`direccionID`),
  CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`direccionID`) REFERENCES `direccionCliente` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Yey Ramirez',2,'+55 1 55 3171 7577','yeyRamirez@gmail.com','$2a$10$CVpLKoa/r08Y3tfVOSIkfem.fpytHcAzRmAI3cPFjeOFzU98Z.HHK',1),(2,'Joca Tenorio',1,'+55 1 922 157 6816','jocabetTenorio@gmail.com','$2a$10$CVpLKoa/r08Y3tfVOSIkfem.fpytHcAzRmAI3cPFjeOFzU98Z.HHK',2),(3,'Claudia Naxi',3,'+55 1 222 342 6071','claudiaNaxi@gmail.com','$2a$10$CVpLKoa/r08Y3tfVOSIkfem.fpytHcAzRmAI3cPFjeOFzU98Z.HHK',3),(4,'Ruth Lopez Jimenez',1,'+55 1 971 140 0867','ruthLopez@gmail.com','$2a$10$CVpLKoa/r08Y3tfVOSIkfem.fpytHcAzRmAI3cPFjeOFzU98Z.HHK',4),(5,'Gabriela Flores',2,'+55 1 464 118 6908','gabrielaFlores@gmail.com','$2a$10$CVpLKoa/r08Y3tfVOSIkfem.fpytHcAzRmAI3cPFjeOFzU98Z.HHK',5),(6,'Admin',4,'2222124212','admin@gmail.com','$2a$10$CVpLKoa/r08Y3tfVOSIkfem.fpytHcAzRmAI3cPFjeOFzU98Z.HHK',11),(10,'taba',3,'9221459742','taba@gmail.com','$2a$15$b1TlrxV89wE0l/zvoPWbP.YYgpElMJSfm.0by/z8vVLoaNRFQ5dg2',15);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direccionCliente`
--

DROP TABLE IF EXISTS `direccionCliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `direccionCliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `estado` varchar(40) NOT NULL,
  `municipio` varchar(40) NOT NULL,
  `ciudad` varchar(40) NOT NULL,
  `codigoPostal` int(11) NOT NULL,
  `colonia` varchar(50) NOT NULL,
  `calle` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direccionCliente`
--

LOCK TABLES `direccionCliente` WRITE;
/*!40000 ALTER TABLE `direccionCliente` DISABLE KEYS */;
INSERT INTO `direccionCliente` VALUES (1,'Puebla','Ciudad de Mexico','Ciudad de Mexico',41238,'Ajusco','Zapotecas'),(2,'Veracruz','Veracruz','Coatzacoalcos',97432,'Villas','Nuevo Veracruz'),(3,'Puebla','Puebla','Puebla',97432,'Las Torres','Nayarit'),(4,'Oaxaca','Santo Domingo','Tehuantepec',76432,'Francisco Ferrer Guarda','Delfino Victoria'),(5,'Guanajuato','Salamanca','Salamanca',36750,'Industrial','Neptuno No. 612'),(11,'Puebla2','Puebla2','Puebla2',721402,'Amor2','25 Norte2'),(15,'Puebla','Puebla','Puebla',97231,'Amor','Amor');
/*!40000 ALTER TABLE `direccionCliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `envios`
--

DROP TABLE IF EXISTS `envios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `envios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `idCliente` int(11) NOT NULL,
  `idPedido` int(11) NOT NULL,
  `estadoEnvio` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idCliente` (`idCliente`),
  KEY `idPedido` (`idPedido`),
  CONSTRAINT `envios_ibfk_1` FOREIGN KEY (`idCliente`) REFERENCES `clientes` (`id`),
  CONSTRAINT `envios_ibfk_2` FOREIGN KEY (`idPedido`) REFERENCES `pedidos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `envios`
--

LOCK TABLES `envios` WRITE;
/*!40000 ALTER TABLE `envios` DISABLE KEYS */;
INSERT INTO `envios` VALUES (1,'2018-02-24',1,1,2),(2,'2018-03-01',2,2,2),(3,'2018-03-13',3,3,1),(19,'2018-05-03',1,37,1),(20,'2018-05-03',1,38,1),(23,'2018-05-03',1,41,2),(28,'2018-05-07',1,46,2);
/*!40000 ALTER TABLE `envios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidoProducto`
--

DROP TABLE IF EXISTS `pedidoProducto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidoProducto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idPedido` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idPedido` (`idPedido`),
  KEY `idProducto` (`idProducto`),
  CONSTRAINT `pedidoproducto_ibfk_1` FOREIGN KEY (`idPedido`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `pedidoproducto_ibfk_2` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidoProducto`
--

LOCK TABLES `pedidoProducto` WRITE;
/*!40000 ALTER TABLE `pedidoProducto` DISABLE KEYS */;
INSERT INTO `pedidoProducto` VALUES (1,1,1,3),(2,2,2,5),(3,3,3,2),(6,1,3,3),(7,1,5,5),(8,2,1,2),(9,2,4,10),(36,37,5,5),(37,37,54,2),(38,37,3,1),(39,37,23,1),(40,38,2,5),(41,38,28,2),(44,41,28,1),(45,41,23,1),(55,46,2,3);
/*!40000 ALTER TABLE `pedidoProducto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `costoTotal` float NOT NULL,
  `clientID` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `clientID` (`clientID`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`clientID`) REFERENCES `clientes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'2018-02-23',535,1),(2,'2018-02-28',1293,2),(3,'2018-03-12',912,3),(37,'2018-05-03',589,1),(38,'2018-05-03',260,1),(41,'2018-05-03',115,1),(46,'2018-05-07',54,1);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombreProducto` varchar(50) NOT NULL,
  `descripcion` varchar(400) NOT NULL,
  `tipoProducto` int(11) NOT NULL,
  `precioPreferencial` float NOT NULL,
  `precioOcasional` float NOT NULL,
  `precioPublico` float NOT NULL,
  `imgPath` varchar(75) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Jabon de Alga Espirulina','Sirve como exfoliante natural, remueve celulas muertas, reduce el acne y ayuda a eliminar toxinas en la piel',1,35,40,45,'algaEspirulina.png'),(2,'Jabon de Arroz con Tomillo','Ayuda a recuperar el tono de la piel tras el bronceado o bien la exposicion continua al sol, astringente, exfoliacion suave y controla el exceso de grasa en el rostro',1,18,23,30,'arrozTomillo.png'),(3,'Jabon de Avena con Naranja','Antibacterial, aclara y exfolia la piel, combate al acne, para piel de normal a grasa, regenerador celular, humectante y emoliente',1,19,24,30,'avenaNaranja.png'),(4,'Jabon de Barro Negro con Lavanda y Tepezcohuite','A parte de las grandes propiedades que contiene de barro negro se le añaden las de la lavanda, la cual ayuda a relajar y nos da un delicioso aroma, así como las propiedades regenerativas del tepexcohuite en tu piel.',1,80,85,110,'barroNegro.png'),(5,'Jabon de Cacao','Tiene propiedades antioxidantes, es un buen aliado contra el envejecimiento, la flacidez, la celulitis y el estrés. ',1,40,45,70,'barroNegro.png'),(23,'Jabon de Café con Almendras','Reductivo, combate la celulitis y mejora la apariencia de la \"piel de naranja\", exfoliante y energizante.',1,30,35,60,'cafeAlmendras.png'),(24,'Jabon de Caléndula, polen y miel','Aparte de las propiedades de la miel la caléndula complementa con su gran humectación y su ayuda en la regeneración en la piel dañana, además de las propiedades del polen, las cuales ayudan con los problemas de acné y a revitalizar la piel. ',1,58,63,110,'calendula.png'),(25,'Jabon de Canela','Combate al acné, para piel de normal a grasa, antimicótico, regenera la piel, controla la sudoración, exfoliante y astringente.',1,50,55,80,'canela.png'),(26,'Jabon de Carbón Activado','Elimina las toxinas de la piel, ayuda a tratar el acné, alivia el picor de insectos y es un astringente natural.',1,45,50,80,'carbonActivado.png'),(27,'Jabon de Chía con romero y jojoba','Humectación profunda, protección a la piel, vitamina E, antioxidante, combate al acné, ayuda a la regeneración de la piel evitando las arrugas por su contenido de Omega 3, exfoliante, no necesitarás aplicarte crema de forma adicional.',1,45,50,80,'chia.png'),(28,'Jabon de Doble Menta, Carbón Activado y Manzanilla','El carbón activado elimina toxinas de la piel, y ayuda a tratar el acné, además su contenido de menta le da propiedades astringentes con un toque de frescura.',1,85,90,130,'dobleMenta.png'),(29,'Jabon de Coco con Crema','Para pieles sensibles, un jabón diferente al natural justo para el cuidado de tu piel, ha sido usado en personas con diabetes, psoriasis, que han recibido quimioterapias, en bebés y en caso de problemas de sudoración excesiva.',1,40,45,70,'cocoCrema.png'),(30,'Jabon de Coco con Crema y Jojoba','Neutro, hipoalergénico, antibacterial e ideal para deportistas y personas con    afecciones o lesiones en la piel, adicionado con jojoba',1,45,50,80,'cocoCremaJojoba.png'),(31,'Jabon de Limón','Antibacterial, anti acné, reductivo, ayuda a eliminar manchas del rostro y su uso es únicamente de noche.',1,30,35,60,'limon.png'),(32,'Jabon de Menta','Alivia la picazón e irritación cuando se utiliza con moderación; de otro modo, puede causar irritación, es un gran revitalizante, contiene propiedades astringentes y     desinfectantes.',1,50,55,80,'menta.png'),(33,'Jabon de Moringa con pino Douglas y salvia','Ayuda a blanquear la piel y la hace ver más joven, saludable y radiante, es antioxidante, ayuda a     disminuir las manchas oscuras y es ideal para humectar las líneas de expresión.',1,80,85,110,'moringa.png'),(34,'Jabon de Piedra Pómez','Remueve las células muertas de codos, rodillas y talones; le llamamos el \"spa en casa\", una forma de consentirte en la ducha diaria.',1,30,35,60,'pomez.png'),(35,'Jabon de Tamarindo','Reduce la inflamación y la irritación, ayuda con la celulitis y sirve para desmanchar zonas oscuras, como las axilas y la entrepierna.',1,30,35,60,'tamarindo.png'),(36,'Jabon de Tomillo','Es antiseptico, cicatrizante, tonificante aporta a mucha suavidad y frescura, es un desinfectante natural, astringente y antimicrobiano, ideal para combatir el acné y estimula la  circulación sanguinea.',1,50,55,80,'tomillo.png'),(37,'Jabon de Vino Tinto','Es antioxidante (anti edad), ideal para pieles delicadas maduras y sensibles. Dejará tu piel hidratada suave y limpia.',1,90,95,120,'vinoTinto.png'),(38,'Aceite de Ayacahuite','-------',2,140,145,190,'aceiteAyacahuite.png'),(39,'Aceite de Mandarina','-------',2,140,145,190,'aceiteMandarina.png'),(40,'Aceite de Menta','-------',2,140,145,190,'aceiteMenta.png'),(41,'Aceite de Naranja','-------',2,140,145,190,'aceiteNaranja.png'),(42,'Aceite de Pino Douglas','-------',2,140,145,190,'aceitePinoDouglas.png'),(43,'Aceite de Romero','-------',2,140,145,190,'aceiteRomero.png'),(44,'Suero Mi Marchanta','-------',2,140,145,190,'miMarchanta.png'),(45,'Aceite de Tomillo','-------',2,140,145,190,'aceiteTomillo.png'),(46,'Aceite de Toronja','-------',2,140,145,190,'aceiteToronja.png'),(47,'Aceite de Bergamota','-------',2,160,165,210,'aceiteBergamota.png'),(48,'Aceite de Cedro Blanco','-------',2,160,165,210,'aceiteCedroBlanco.png'),(49,'Aceite de Limón','-------',2,160,165,210,'aceiteLimon.png'),(50,'Aceite de Mamey','-------',2,160,165,210,'aceiteMamey.png'),(51,'Aceite de Pa La Gripa','-------',2,160,165,210,'paGripa.png'),(52,'Aceite de Pal Sueño','-------',2,160,165,210,'paSuenio.png'),(53,'Aceite Pa Mis Rizos','-------',2,160,165,210,'paRizos.png'),(54,'Aceite Rizo Obediente','-------',2,170,175,230,'rizoObediente.png'),(55,'Aceite Rosa Mosqueta','-------',2,180,185,230,'rosaMosqueta.png'),(56,'Tónico de Flores Blancas con Gardenias y Jazmín','-------',3,180,185,220,'tonicoFlores.png'),(57,'Tónico de Lavanda','-------',3,170,175,230,'tonicoLavanda.png'),(58,'Tónico de Lemon Grass','-------',3,180,185,220,'lemonGrass.png'),(59,'Tónico de Tomillo','-------',3,180,185,220,'tonicoTomillo.png'),(60,'Crema de flores blancas, rosa mosqueta y argán','-------',3,70,75,110,'cremaFloresBlancas.png'),(61,'Balsamo Labial','-------',3,80,85,120,'balsamoLabial.png'),(62,'Mascarilla de Barro Gris con menta y aloe','-------',3,80,85,120,'mascarillaBarro.png'),(65,'NUEVO','NUEVO',3,10,20,30,'none.png');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sesionesActivas`
--

DROP TABLE IF EXISTS `sesionesActivas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sesionesActivas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` int(11) NOT NULL,
  `token` varchar(35) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idUsuario` (`idUsuario`),
  CONSTRAINT `sesionesactivas_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `clientes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sesionesActivas`
--

LOCK TABLES `sesionesActivas` WRITE;
/*!40000 ALTER TABLE `sesionesActivas` DISABLE KEYS */;
/*!40000 ALTER TABLE `sesionesActivas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-07 18:32:33
