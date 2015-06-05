/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : ads

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2015-06-05 17:59:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `buy`
-- ----------------------------
DROP TABLE IF EXISTS `buy`;
CREATE TABLE `buy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fornecedor_id` int(11) NOT NULL,
  `data_compra` date NOT NULL,
  `data_cadastro` date NOT NULL,
  `numero` varchar(11) DEFAULT NULL,
  `valor` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_buy_supplier` (`fornecedor_id`),
  CONSTRAINT `fk_buy_supplier` FOREIGN KEY (`fornecedor_id`) REFERENCES `supplier` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of buy
-- ----------------------------
INSERT INTO `buy` VALUES ('1', '3', '0000-00-00', '2015-03-31', '3156662', '2424.00');
INSERT INTO `buy` VALUES ('2', '5', '0000-00-00', '2015-03-31', '4546456', '46556.00');
INSERT INTO `buy` VALUES ('3', '3', '2015-04-02', '2015-04-01', '213213', '12313.00');
INSERT INTO `buy` VALUES ('4', '1', '2015-04-01', '2015-04-01', '456888', '125.35');
INSERT INTO `buy` VALUES ('5', '3', '2015-04-08', '2015-04-08', '1234468999', '1522.36');
INSERT INTO `buy` VALUES ('6', '3', '2015-04-08', '2015-04-08', '1234468999', '1522.36');
INSERT INTO `buy` VALUES ('7', '5', '2015-04-09', '2015-04-08', '1354456', '750.92');
INSERT INTO `buy` VALUES ('8', '4', '2015-04-06', '2015-04-08', '156848', '2300.00');
INSERT INTO `buy` VALUES ('9', '3', '2015-04-08', '2015-04-08', '165895', '157.95');
INSERT INTO `buy` VALUES ('10', '5', '2015-04-13', '2015-04-08', '156465', '36559.98');
INSERT INTO `buy` VALUES ('11', '1', '2015-05-01', '2015-04-17', '14689', '175.49');
INSERT INTO `buy` VALUES ('13', '3', '2015-04-02', '2015-04-17', '213213', '985.45');
INSERT INTO `buy` VALUES ('14', '1', '2015-04-01', '2015-04-17', '7864489', '125.35');
INSERT INTO `buy` VALUES ('15', '2', '2015-04-01', '2015-04-17', '7864489', '43299.00');
INSERT INTO `buy` VALUES ('16', '3', '2015-04-02', '2015-04-17', '213213', '125.36');
INSERT INTO `buy` VALUES ('17', '3', '2015-04-02', '2015-04-17', '213213', '7968.34');
INSERT INTO `buy` VALUES ('18', '2', '2015-04-01', '2015-04-17', '7864489', '174.23');
INSERT INTO `buy` VALUES ('19', '2', '2015-04-01', '2015-04-17', '7864489', '16855.00');
INSERT INTO `buy` VALUES ('20', '2', '2015-04-01', '2015-04-17', '7864489', '2240.35');
INSERT INTO `buy` VALUES ('21', '2', '2015-03-05', '2015-04-17', '7864489', '432.00');
INSERT INTO `buy` VALUES ('22', '2', '2015-03-11', '2015-04-17', '7864489', '724.00');
INSERT INTO `buy` VALUES ('23', '2', '2015-03-05', '2015-04-17', '02365985', '342.23');
INSERT INTO `buy` VALUES ('25', '2', '2015-03-05', '2015-04-22', '02365985', '357.45');
INSERT INTO `buy` VALUES ('26', '3', '2015-05-11', '2015-04-27', '1769845', '1748.29');
INSERT INTO `buy` VALUES ('27', '4', '2015-04-01', '2015-04-27', '168945', '1365.00');
INSERT INTO `buy` VALUES ('28', '1', '2015-05-11', '2015-05-11', '45666', '2404.02');

-- ----------------------------
-- Table structure for `customer`
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `address` varchar(80) DEFAULT NULL,
  `number` varchar(11) DEFAULT NULL,
  `neighborhood` varchar(30) DEFAULT NULL,
  `cep` char(8) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `state` char(2) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `celphone` varchar(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `person_type` smallint(1) NOT NULL,
  `date_register` date NOT NULL,
  `date_update` date DEFAULT NULL,
  `status` smallint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES ('1', 'Maycon', 'Donizete', 'braz izzo', '435', 'centro', '86990', 'marialva', 'PR', '0003235665', '11204564005', '', '0', '2015-03-13', '2015-03-17', '0');
INSERT INTO `customer` VALUES ('4', 'Camila', 'Cavalcante', '', '', '', '0', '', '', '1231212123', '12113213332', '', '1', '2015-03-13', '2015-03-16', '0');
INSERT INTO `customer` VALUES ('7', 'Pedro', 'Pereira Pedreira', 'rua joao vieira paulino', '4356', 'centro', '87990655', 'maringa', 'pr', '4435353033', '4432323689', 'maycon@hotmail.com', '0', '2015-03-17', '2015-03-17', '0');
INSERT INTO `customer` VALUES ('8', 'Lolo', 'Ltda', 'rua jesus jenuino', '789', 'custodios', '86998789', 'maringa', 'PR', '44325669999', '44999984545', 'joaopp@gmail.xom', '1', '2015-03-17', '2015-04-27', '0');
INSERT INTO `customer` VALUES ('9', 'Antonio', 'Arantes do Nascimento', 'rua braz izzo', '435', 'centro', '86990000', 'marialva', 'pr', '4432325669', '4456889999', 'aan@hotmail.xok', '0', '2015-04-27', '2015-04-27', '0');

-- ----------------------------
-- Table structure for `environment`
-- ----------------------------
DROP TABLE IF EXISTS `environment`;
CREATE TABLE `environment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `order` int(11) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`,`date`),
  KEY `id` (`id`),
  KEY `environment_order_fk` (`order`),
  CONSTRAINT `environment_order_fk` FOREIGN KEY (`order`) REFERENCES `order` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of environment
-- ----------------------------
INSERT INTO `environment` VALUES ('1', 'Cozinha', '2', '0000-00-00');
INSERT INTO `environment` VALUES ('2', 'Quarto', '2', '2015-06-05');
INSERT INTO `environment` VALUES ('3', 'Ambiente', '2', '2015-06-05');
INSERT INTO `environment` VALUES ('4', 'Ambiente', '10', '2015-06-05');
INSERT INTO `environment` VALUES ('5', 'Ambiente', '10', '2015-06-05');

-- ----------------------------
-- Table structure for `fisic_person`
-- ----------------------------
DROP TABLE IF EXISTS `fisic_person`;
CREATE TABLE `fisic_person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_customer` int(11) NOT NULL,
  `cpf` char(14) NOT NULL,
  `rg` varchar(14) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_fisic_person_customer_1` (`id_customer`),
  CONSTRAINT `fk_fisic_person_customer_1` FOREIGN KEY (`id_customer`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fisic_person
-- ----------------------------
INSERT INTO `fisic_person` VALUES ('1', '1', '07410951907', '30153530');
INSERT INTO `fisic_person` VALUES ('4', '7', '07410951907', '122324566456');
INSERT INTO `fisic_person` VALUES ('5', '9', '07410951907', '026559988');

-- ----------------------------
-- Table structure for `legal_person`
-- ----------------------------
DROP TABLE IF EXISTS `legal_person`;
CREATE TABLE `legal_person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_customer` int(11) NOT NULL,
  `cnpj` char(14) DEFAULT NULL,
  `ie` varchar(14) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_legal_person_customer_1` (`id_customer`),
  CONSTRAINT `fk_legal_person_customer_1` FOREIGN KEY (`id_customer`) REFERENCES `customer` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of legal_person
-- ----------------------------
INSERT INTO `legal_person` VALUES ('3', '4', '02944891000160', '32552580');
INSERT INTO `legal_person` VALUES ('5', '8', '02944891000160', '4524566442452');

-- ----------------------------
-- Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer` int(11) NOT NULL,
  `date_register` date NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_customer-fk` (`customer`),
  KEY `order_status_fk` (`status`),
  CONSTRAINT `order_customer-fk` FOREIGN KEY (`customer`) REFERENCES `customer` (`id`),
  CONSTRAINT `order_status_fk` FOREIGN KEY (`status`) REFERENCES `status_order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('2', '1', '2015-06-01', '1');
INSERT INTO `order` VALUES ('3', '4', '2015-06-01', '1');
INSERT INTO `order` VALUES ('4', '7', '2015-06-01', '1');
INSERT INTO `order` VALUES ('7', '4', '2015-06-02', '1');
INSERT INTO `order` VALUES ('9', '7', '2015-06-02', '1');
INSERT INTO `order` VALUES ('10', '1', '2015-06-02', '1');
INSERT INTO `order` VALUES ('11', '1', '2015-06-02', '1');
INSERT INTO `order` VALUES ('12', '1', '2015-06-02', '1');
INSERT INTO `order` VALUES ('13', '1', '2015-06-03', '1');
INSERT INTO `order` VALUES ('14', '1', '2015-06-03', '1');

-- ----------------------------
-- Table structure for `product_order`
-- ----------------------------
DROP TABLE IF EXISTS `product_order`;
CREATE TABLE `product_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `qtd` int(11) NOT NULL DEFAULT '0',
  `value` decimal(10,2) DEFAULT NULL,
  `environment` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_environment_fk` (`environment`),
  CONSTRAINT `product_environment_fk` FOREIGN KEY (`environment`) REFERENCES `environment` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_order
-- ----------------------------

-- ----------------------------
-- Table structure for `status_order`
-- ----------------------------
DROP TABLE IF EXISTS `status_order`;
CREATE TABLE `status_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of status_order
-- ----------------------------
INSERT INTO `status_order` VALUES ('1', 'Orçamento');
INSERT INTO `status_order` VALUES ('2', 'Pedido');

-- ----------------------------
-- Table structure for `supplier`
-- ----------------------------
DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `cnpj` char(14) DEFAULT NULL,
  `ie` char(14) DEFAULT NULL,
  `address` varchar(80) DEFAULT NULL,
  `number` char(6) DEFAULT NULL,
  `neighborhood` varchar(30) DEFAULT NULL,
  `cep` char(8) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `state` char(2) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `celphone` varchar(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `date_register` date DEFAULT NULL,
  `date_update` date DEFAULT NULL,
  `status` smallint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of supplier
-- ----------------------------
INSERT INTO `supplier` VALUES ('1', 'DECORE', 'GLASS COMERCIO LTDA', '15020536000146', '9058637111', 'Rua Pioneiro José dos Santos', '193', 'PQ Itaipu - Sala 2', '87065440', 'Maringa', 'PR', '4432662627', '0', '', '2015-03-18', '2015-03-18', '0');
INSERT INTO `supplier` VALUES ('2', 'Incopama', '- Ind. e Com. de Carpintaria Maske LTDA', '77114718000133', '7011686316', 'Av. das Indústrias', '462', 'Jd. América', '87045360', 'Maringa', 'PR', '4430259393', '4430259381', '', '2015-03-18', '2015-04-06', '0');
INSERT INTO `supplier` VALUES ('3', 'Compvale', 'Produtos moveleiros LTDA', '04348525000173', '9023065522', 'Av. Governador Roberto da Silveira', '970', 'Barra Funda', '86800520', 'Apucarana', 'PR', '4421024040', '4421024008', '', '2015-03-18', '2015-03-18', '0');
INSERT INTO `supplier` VALUES ('4', 'Kofemar', 'Comercio de Produtos para Marcenaria LTDA', '85090793000130', '7011708069', 'Av. Carneiro Leao', '556', 'Zona 09', '87014010', 'Maringa', 'PR', '4430275000', '', '0', '2015-03-18', '2015-03-18', '0');
INSERT INTO `supplier` VALUES ('5', 'Compiori', 'Produtos Moveleiros LTDA', '0', '0', 'Av. Bento Munhoz da Rocha', '', '', '0', '', '', '4433434040', '0', '0', '2015-03-18', '2015-03-18', '0');
INSERT INTO `supplier` VALUES ('6', 'dfsafasd', '', '0', '0', '', '', '', '0', '', '', '2147483647', '0', '0', '2015-03-18', '2015-03-18', '0');
