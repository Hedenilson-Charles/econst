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
  `endereco` varchar(45) NOT NULL,
  `cidade` varchar(45) NOT NULL,
  `uf` varchar(2) NOT NULL,
  `cpf` int NOT NULL,
  `email` varchar(60) NOT NULL,
  `telefone` int NOT NULL,
  `nascimento` date NOT NULL,
  PRIMARY KEY (`idclientes`),
  UNIQUE KEY `idclientes_UNIQUE` (`idclientes`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
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
  PRIMARY KEY (`idprodutos`),
  UNIQUE KEY `idprodutos_UNIQUE` (`idprodutos`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (29,'Samsung Galaxy S20 Ultra',5894.00,NULL,'Cosmic Gray, Tela de 6,9 , 4G, 128GB ,Câmera 108MP + 12MP + 48MP + ToF - SM-G988BZA3ZTO','Samsung',NULL),(30,'Edredom Casal',329.76,NULL,'King Palha e Tabaco Floral 7 Peças ','KING',NULL),(31,'Minimoto Elétrica',499.99,NULL,'Confortável, segura e com design incrível, transforma a brincadeira em uma verdadeira aventura','CROSS CV',NULL),(32,'Jogo de Panelas',566.73,NULL,'O conjunto é composto por oito peças sendo: 2 caçarolas com tampas, 2 frigideiras, 2 panelas com tampa, 1 grill e 1 fervedor. Nesta versão, a cor da pintura externa é vanilla. ','BRINOX',NULL),(33,'Mini Moving Head Wash LED',704.99,NULL,'Lâmpada:7x 18W (LED)Cores:RGBWA+UVÂngulo: 15 - 40 grausRotatório de 8 ladosItens da Caixa:1(Um) Mini Moving Head Wash LEDX W4 130W Manual do Usuário. ','HEAD WASH',NULL),(35,'Mala Viagem ',502.26,NULL,'Mala m - Axlxp: 64x37x26 Cm - Tamanho Médio - Alça de Mão - Divisórias Interna - 4 Rodas Giro 360° - Cadeado tsa - Material Abs','Delsey','Grande'),(36,'Bicicleta Aro 29',898.20,NULL,'Bicicleta Aro 29 Freio a Disco 21M. Velox Branca/Verde - Ello Bike','Ello Bike',NULL),(37,'Cama Maca Massagem',761.39,NULL,'Na cor creme e fabricada em madeira com revestimento sintético, a Cama de Massagem Portátil Trevalla possui espuma com uma espessura de 5cm que a deixará muito mais confortável. Suporta até 200kg ','TREVALLA',NULL),(38,'Fone Headset',896.40,NULL,'Fone de ouvido durável e profissional proporciona conforto para uso prolongado, clareza de voz com capacidade de cancelamento de ruído e excelente resposta de áudio.','GIANT-P2',NULL),(39,'Ring Light',655.99,NULL,'Ring Light com sistema de cores rgb\nO LED rgb, na verdade, é um conjunto de três LEDs encapsulados, cada um com uma cor distinta: o vermelho, o verde e o azul.\n','TEEM',NULL),(41,'Painel para TV',448.71,NULL,'Até 60 Polegadas 1 Porta Nt1115 Off White/Freijó Trend\nEste móvel é indicado para que seja utilizado em Sala de Estar, dando um toque especial no cômodo de sua casa.','Nairóbi Plus Multimóveis',NULL),(42,'Chapinha Taiff Vulcan',528.12,NULL,'Com regulagem de 200° e 250°, a Chapinha Taiff Vulcan oferece a maior temperatura do mercado para proporcionar ao profissional o melhor desempenho. Com revestimento de cerâmica, ela protege os fios do contato direto com a chapa quente e facilita o deslizar das mechas.','Taiff Vulcan ',NULL),(43,'Organizador Temperos Guarda Condimentos',39.01,NULL,'suporte empilhável da especiaria: torre de armazenamento limpa recarregável da especiaria pode conter 6 tipos da especiaria. 6 recipientes de especiarias podem ser empilhados para economizar espaço para o balcão da cozinha','Util House',NULL),(44,'Cadeira Espreguiçadeira',641.89,NULL,'Com a Cadeira Espreguiçadeira Pelegrin PEL-004Z Gravidade Zero em Tecido e Metal Preta você pode usar a mesma cadeira em diferentes ambientes! Além da proposta de conforto pela presença de apoio ergonômico para os braços e travesseiro, possui um design perfeito para sofisticação de áreas de lazer e sapatas antiderrapantes para sua proteção.','Pelegrin',NULL),(45,'Livro Harry Potter',320.30,NULL,'a Rocco lançou este box de luxo em edição limitada com os sete livros em capa dura, com ilustrações de Brian Selznick (vencedor da Medalha Caldecott) e Mary GrandPré. Uma novidade que irá encantar novos leitores e fãs que acompanham a série por todos esses anos. ','ROCCO',NULL),(46,'Violino',422.91,NULL,'O violino é um instrumento musical de cordas, mais especificamente cordas friccionadas.','Stentor',NULL),(47,'Mop Giratório Pro FlashLimp',169.90,NULL,'O Mop Giratório Pro é composto por dois baldes empilháveis, o que garante economia de espaço na hora de guardar. Para usar, basta encaixar um balde no outro, colocar água no balde de enxágue e ele está pronto!','FLASHLIMP',NULL),(48,'Maleta de Ferramentas com Rodinhas',109.90,NULL,'Esta caixa possui rodinhas, permitindo ser puxada, e vai deixar suas ferramentas sempre em mão e com menos peso e esforço.\nPossui 2 travas em polipropileno uma bandeja removível e porta-objetos na tampa. Suas 2 rodas facilitam muito no transporte e movimentação. \n','BLACKJACK',NULL),(49,'Bolsa Colcci',399.00,NULL,'Crossbody texture, feminino. Material resistente, fecho por ímã, estruturada e alça transversal. \n','COLCCI',NULL),(50,'Camiseta Lacoste',627.18,NULL,'cordão ajustável, materiais macios e um bolso canguru, estilo pulôver, capuz com cordão para ajuste, ajuste regular, proteção UV bloqueia os raios nocivos do sol, feito com algodão de alta qualidade. \n','COLCCI',NULL),(51,'Anacapri Bolsa Tiracolo',299.90,NULL,'bolsa de qualidade','ANACAPRI',NULL),(52,'Sandália feminina de salto',1214.88,NULL,'Steve Madden, Stiletto feminino bico quadrado, Alça elegante de bico único,\nFecho de fivela ajustável no tornozelo, Altura do salto aproximadamente 9,5 cm.','Steve Madden',NULL),(53,'Vestido Vermelho de Bolinhas',109.90,NULL,'Descrição: Cor: Vermelho\nEstilo: Boho\nDetalhes: Plissado, Embrulhar, Bainha de Ruffle, folhado\nComprimento: Comprido\nTecido: Não elástico\nMaterial: Poliéster\n','Bainha Ruflle',NULL),(54,'Tênis Adidas ',199.99,NULL,'O Tênis Adidas Masculino é o calçado ideal para te acompanhar em todos os momentos. Com design clássico, traz as listras icônicas da marca em um modelo clean que oferece versatilidade ao combinar com diferentes peças. Monte looks autênticos e descolados usando o Tênis Adidas Breaknet.\n','ADIDAS',NULL),(55,'Conjunto Moletom Infantil',59.99,NULL,'O Conjunto Moletom Infantil Pipa Picolé Feminina é a pedida perfeita para o dia a dia das crianças! Acompanhando uma blusa e uma calça moletom, o conjunto infantil é confeccionado em material leve e macio que fornece conforto e protege do frio. A estampa descolada traz mais diversão e alegria durante as brincadeiras. \n','Pipa Picolé ',NULL),(56,'Perfume Feminino Good Girl',303.39,NULL,'Good Girl é a fragrância de Carolina Herrera que busca desvendar a pluralidade da personalidade feminina. Elegante e sensual, romântica e independente, comprometida e irreverente','Carolina Herrera',NULL);
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

-- Dump completed on 2022-06-22 13:57:12
