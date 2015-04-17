/*
Navicat MySQL Data Transfer

Source Server         : conection
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : ads

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2015-03-24 08:34:19
*/

SET FOREIGN_KEY_CHECKS=0;

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES ('1', 'Maycon', 'Donizete', 'braz izzo', '435', 'centro', '86990', 'marialva', 'PR', '0003235665', '11204564005', '', '0', '2015-03-13', '2015-03-17', '0');
INSERT INTO `customer` VALUES ('4', 'Camila', 'Cavalcante', '', '', '', '0', '', '', '1231212123', '12113213332', '', '1', '2015-03-13', '2015-03-16', '0');
INSERT INTO `customer` VALUES ('7', 'Pedro', 'Pereira Pedreira', 'rua joao vieira paulino', '4356', 'centro', '87990655', 'maringa', 'pr', '4435353033', '4432323689', 'maycon@hotmail.com', '0', '2015-03-17', '2015-03-17', '0');
INSERT INTO `customer` VALUES ('8', 'Saraiva', 'Ltda', 'rua jesus jenuino', '789', 'custodios', '86998789', 'maringa', 'PR', '44325669999', '44999984545', 'joaopp@gmail.xom', '1', '2015-03-17', '2015-03-17', '0');

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fisic_person
-- ----------------------------
INSERT INTO `fisic_person` VALUES ('1', '1', '07410951907', '30153530');
INSERT INTO `fisic_person` VALUES ('4', '7', '07410951907', '122324566456');

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
INSERT INTO `supplier` VALUES ('2', 'Incopama', '- Ind. e Com. de Carpintaria Maske LTDA', '77114718000133', '7011686316', 'Av. das Indústrias', '462', 'Jd. América', '87045360', 'Maringa', 'PR', '4430259393', '0', '', '2015-03-18', '2015-03-18', '0');
INSERT INTO `supplier` VALUES ('3', 'Compvale', 'Produtos moveleiros LTDA', '04348525000173', '9023065522', 'Av. Governador Roberto da Silveira', '970', 'Barra Funda', '86800520', 'Apucarana', 'PR', '4421024040', '4421024008', '', '2015-03-18', '2015-03-18', '0');
INSERT INTO `supplier` VALUES ('4', 'Kofemar', 'Comercio de Produtos para Marcenaria LTDA', '85090793000130', '7011708069', 'Av. Carneiro Leao', '556', 'Zona 09', '87014010', 'Maringa', 'PR', '4430275000', '', '0', '2015-03-18', '2015-03-18', '0');
INSERT INTO `supplier` VALUES ('5', 'Compiori', 'Produtos Moveleiros LTDA', '0', '0', 'Av. Bento Munhoz da Rocha', '', '', '0', '', '', '4433434040', '0', '0', '2015-03-18', '2015-03-18', '0');
INSERT INTO `supplier` VALUES ('6', 'dfsafasd', '', '0', '0', '', '', '', '0', '', '', '2147483647', '0', '0', '2015-03-18', '2015-03-18', '0');
