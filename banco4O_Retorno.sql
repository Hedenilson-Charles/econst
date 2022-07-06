-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: econst
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `caixa`
--

DROP TABLE IF EXISTS `caixa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `caixa` (
  `idcaixa` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `quantidade` int NOT NULL,
  `valor` varchar(45) NOT NULL,
  `data` date NOT NULL,
  PRIMARY KEY (`idcaixa`),
  UNIQUE KEY `idcaixa_UNIQUE` (`idcaixa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caixa`
--

LOCK TABLES `caixa` WRITE;
/*!40000 ALTER TABLE `caixa` DISABLE KEYS */;
/*!40000 ALTER TABLE `caixa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `idclientes` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `endereco` varchar(60) NOT NULL,
  `cidade` varchar(45) NOT NULL,
  `uf` varchar(2) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `email` varchar(60) NOT NULL,
  `cep` varchar(8) NOT NULL,
  `complemento` varchar(45) DEFAULT NULL,
  `senha` varchar(45) NOT NULL,
  `adm` int DEFAULT '2',
  PRIMARY KEY (`idclientes`),
  UNIQUE KEY `idclientes_UNIQUE` (`idclientes`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (25,'Hedenilson Charles Ávila Filho','Rua piriri azul do outro lado','Sao giripo da patacuada','DF','12345678911','hedenilsonavila@gmail.com','12345678','','123456',2),(28,'Fulano','Rua piriri azul do outro lado','Sao giripo da patacuada','DF','12345678914','fulano@gmail.com','12345678','','123456',2),(29,'dhandara rafaela do amaral','avenida gregório aversa','são carlos','SP','48010805882','sophiamendonca293@gmail.com','13571260','900','17030509',2);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `idpedidos` int NOT NULL AUTO_INCREMENT,
  `nome_cliente` varchar(45) NOT NULL,
  `nome_produto` varchar(45) DEFAULT NULL,
  `quantidade` int NOT NULL,
  `valor` varchar(45) NOT NULL,
  `data` date NOT NULL,
  `endereco` varchar(45) NOT NULL,
  `cep` varchar(45) NOT NULL,
  PRIMARY KEY (`idpedidos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `idprodutos` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(60) NOT NULL,
  `preco` decimal(6,2) NOT NULL,
  `quantidade` int DEFAULT NULL,
  `descricao` varchar(400) NOT NULL,
  `marca` varchar(45) NOT NULL,
  `tamanho` varchar(20) DEFAULT NULL,
  `imagem` varchar(400) DEFAULT 'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg',
  PRIMARY KEY (`idprodutos`),
  UNIQUE KEY `idprodutos_UNIQUE` (`idprodutos`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (61,'Sofá da Eletrolux',500.00,50,'Sofá Omega 2,30m Assento Retrátil e Reclinável Velosuede Rose','Eletrolux',NULL,'https://a-static.mlcdn.com.br/800x560/sofa-omega-230m-assento-retratil-e-reclinavel-velosuede-rose-netsofas/netsofas02/ome170115/9c1fbfffb99001fd331ea5487e1fd0e0.jpeg'),(64,'Smartphone Samsung Galaxy Note 20',4.00,20,'','Samsung',NULL,'https://images-americanas.b2w.io/produtos/01/00/img/1962216/9/1962216988_1SZ.jpg'),(65,'Jogo de Cama Lençol',93.90,25,'O jogo de lençol traz sofisticação para seu quarto. Confeccionado em tecido leve e fresco que proporciona todo conforto que você merece durante suas noites de sono.','Queen',NULL,'https://images-americanas.b2w.io/produtos/4366739643/imagens/jogo-de-cama-lencol-4-pecas-queen-com-elastico-estampado-158x198x30cm-bf-colchoes/4366739660_1_xlarge.jpg'),(66,'Guarda-Roupa',774.90,12,'or Predominante: MalbecMaterial: MDPAcabamento do Produto: Pintura UVTipo de Madeira: Aglomerado MDPAmbiente Sugerido para o uso: QuartoEscala de tonalidade (fosco, brilho etc): Produto com BrilhoPintura ','Melissa Glass',NULL,'https://images-americanas.b2w.io/produtos/01/00/img/1535028/5/1535028595_1SZ.jpg'),(67,'Máquina De Lavar',2229.99,9,'17kg Electrolux Essential Care Com Cesto Inox, Jet&clean E Ultra Filter LED17 220V','Eletrolux',NULL,'https://images-americanas.b2w.io/produtos/01/00/img/3129760/0/3129760086_1SZ.jpg'),(68,'Notebook ',4767.29,34,'O notebook gamer Acer Aspire Nitro 5 é a nova geração, com uma configuração que não treme para os jogos mais pesados. Embarque agora e prepare-se para a potência máxima.','Intel Core',NULL,'https://images-americanas.b2w.io/produtos/01/00/img/4638496/8/4638496877_3SZ.jpg'),(69,'Forno Elétrico',781.81,50,'Agora você vai conseguir preparar receitas deliciosas e variadas. O Forno Elétrico Philco PFE70I 70 Litros chegou para te ajudar nessa missão! Controle de temperatura de 90ºC até 230ºC','Philco',NULL,'https://images-americanas.b2w.io/produtos/4691209304/imagens/forno-eletrico-philco-pfe70i-70-litros-inox-220v/4691209304_5_xlarge.jpg'),(70,'Armário de Cozinha Completa ',1430.99,7,'A linha de Cozinhas Reims da Madesa se destaca pelo design moderno e sofisticado. Todos os módulos são avulsos, fabricados com materiais de padrão superior, como corrediças e dobradiças metálicas.','Madesa Reims ',NULL,'https://images-americanas.b2w.io/produtos/3427421066/imagens/armario-de-cozinha-completa-madesa-reims-310001-com-balcao-e-tampo-preto-rustic/3427421074_1_xlarge.jpg'),(71,'Secador de cabelo',458.91,19,'','Taiff Titanium Colors',NULL,'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/116109/0/116109032SZ.jpg'),(72,'Moto Elétrica ',997.00,23,'Infantil 6V Azul Iron - Brink','Iron',NULL,'https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/124050/8/124050878SZ.jpg'),(73,'Livro',58.99,7,'Desde que nascem, as pessoas são treinadas para agir de acordo com o senso comum. O ensino convencional as estimula a buscar segurança, e não liberdade.','BOX GERAÇÃO DE VALOR',NULL,'https://images-americanas.b2w.io/produtos/1749581855/imagens/livro-box-geracao-de-valor-roda-volumes-1-2-3-poster-exclusivo-roda/1749581855_1_xlarge.jpg'),(74,'Robô Aspirador',152.80,69,'Varre, Aspira e Passa Pano','Vacuum',NULL,'https://images-americanas.b2w.io/produtos/1984942075/imagens/robo-aspirador-3-em-1-recarregavel-varre-aspira-e-passa-pano/1984942083_2_xlarge.jpg');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-05 17:24:22
