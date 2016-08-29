/*
Navicat MySQL Data Transfer

Source Server         : connection
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : ads.sistema

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2016-08-29 18:06:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `bank`
-- ----------------------------
DROP TABLE IF EXISTS `bank`;
CREATE TABLE `bank` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `num` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bank
-- ----------------------------
INSERT INTO `bank` VALUES ('1', '033', 'Santander');
INSERT INTO `bank` VALUES ('2', '104', 'Caixa Economica');
INSERT INTO `bank` VALUES ('3', '399', 'HSBC');
INSERT INTO `bank` VALUES ('4', '341', 'Itau');
INSERT INTO `bank` VALUES ('5', '001', 'Brasil');
INSERT INTO `bank` VALUES ('6', '756', 'Sicoob');
INSERT INTO `bank` VALUES ('7', '748', 'Sicredi');
INSERT INTO `bank` VALUES ('8', '237', 'Bradesco');

-- ----------------------------
-- Table structure for `bill`
-- ----------------------------
DROP TABLE IF EXISTS `bill`;
CREATE TABLE `bill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `num_doc` varchar(20) DEFAULT NULL,
  `date_register` date NOT NULL,
  `due_date` date NOT NULL,
  `date_payment` date DEFAULT NULL,
  `document_value` decimal(10,2) NOT NULL,
  `payment_value` decimal(10,2) DEFAULT NULL,
  `supplier` int(11) NOT NULL,
  `document_type` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `observation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_bill_supplier_1` (`supplier`),
  KEY `fk_bill_document_type_1` (`document_type`),
  KEY `fk_bill_status_payment_receipt_1` (`status`),
  CONSTRAINT `fk_bill_status_payment_receipt_1` FOREIGN KEY (`status`) REFERENCES `status_payment_receipt` (`id`),
  CONSTRAINT `fk_bill_document_type_1` FOREIGN KEY (`document_type`) REFERENCES `document_type` (`id`),
  CONSTRAINT `fk_bill_supplier_1` FOREIGN KEY (`supplier`) REFERENCES `supplier` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bill
-- ----------------------------

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
  CONSTRAINT `fk_buy_supplier_1` FOREIGN KEY (`fornecedor_id`) REFERENCES `supplier` (`id`)
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
INSERT INTO `buy` VALUES ('10', '5', '2015-04-13', '2015-04-08', '156465', '36559.98');
INSERT INTO `buy` VALUES ('11', '1', '2015-05-01', '2015-04-17', '14689', '175.49');
INSERT INTO `buy` VALUES ('12', '3', '2015-05-04', '2015-04-17', '1354689', '3333.33');
INSERT INTO `buy` VALUES ('13', '3', '2015-04-02', '2015-04-17', '213213', '985.45');
INSERT INTO `buy` VALUES ('14', '1', '2015-04-01', '2015-04-17', '7864489', '125.35');
INSERT INTO `buy` VALUES ('15', '2', '2015-04-01', '2015-04-17', '7864489', '43299.00');
INSERT INTO `buy` VALUES ('16', '3', '2015-04-02', '2015-04-17', '213213', '125.36');
INSERT INTO `buy` VALUES ('17', '3', '2015-04-02', '2015-04-17', '213213', '7968.34');
INSERT INTO `buy` VALUES ('26', '1', '0000-00-00', '2016-08-22', '1231231', '1450.00');
INSERT INTO `buy` VALUES ('27', '2', '2016-08-23', '2016-08-23', '442442', '1435.50');
INSERT INTO `buy` VALUES ('28', '3', '2016-08-19', '2016-08-23', '456895', '1692.33');

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
INSERT INTO `customer` VALUES ('1', 'Maycon', 'Donizete dos Santos', 'rua dos alfinetes', '435', 'terra media', '86990000', 'Narnia', 'PR', '4032356654', '1120456400', 'mayconds000@gmail.com', '0', '2015-03-13', '2016-07-08', '0');
INSERT INTO `customer` VALUES ('4', 'Cliente Jurídica', 'Fantasia', '', '', '', '0', '', '', '1231212123', '12113213332', '', '1', '2015-03-13', '2016-07-08', '0');
INSERT INTO `customer` VALUES ('7', 'Pedro', 'Pereira Pedreira', 'rua joao vieira', '1543', 'centro', '00222111', 'Tallsville', 'pr', '4545454454', '4566666666', '', '0', '2015-03-17', '2016-07-08', '0');
INSERT INTO `customer` VALUES ('8', 'Saraiva', 'Ltda', 'Rua Venezuela', '135', 'Interior', '86998789', 'City', 'PR', '44325669999', '44999984545', '', '1', '2015-03-17', '2016-07-08', '0');

-- ----------------------------
-- Table structure for `document_type`
-- ----------------------------
DROP TABLE IF EXISTS `document_type`;
CREATE TABLE `document_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of document_type
-- ----------------------------
INSERT INTO `document_type` VALUES ('1', 'Dinheiro');
INSERT INTO `document_type` VALUES ('2', 'Boleto');
INSERT INTO `document_type` VALUES ('3', 'Cheque');
INSERT INTO `document_type` VALUES ('4', 'Prazo');
INSERT INTO `document_type` VALUES ('5', 'C. Crédito');
INSERT INTO `document_type` VALUES ('6', 'C. Débito');

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
  KEY `environment_order_fk` (`order`)
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
  CONSTRAINT `fk_fisic_person_customer_1` FOREIGN KEY (`id_customer`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fisic_person
-- ----------------------------
INSERT INTO `fisic_person` VALUES ('1', '1', '14676373511', '12123123121');
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
  CONSTRAINT `fk_legal_person_customer_1` FOREIGN KEY (`id_customer`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of legal_person
-- ----------------------------
INSERT INTO `legal_person` VALUES ('3', '4', '00000000000000', '0000000');
INSERT INTO `legal_person` VALUES ('5', '8', '00000000000000', '4524566442452');

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
  CONSTRAINT `fk_order_status_order_1` FOREIGN KEY (`status`) REFERENCES `status_order` (`id`),
  CONSTRAINT `fk_order_customer_1` FOREIGN KEY (`customer`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('2', '1', '2015-06-01', '1');
INSERT INTO `order` VALUES ('3', '4', '2015-06-01', '1');
INSERT INTO `order` VALUES ('4', '4', '2015-06-01', '1');
INSERT INTO `order` VALUES ('7', '7', '2015-06-02', '1');
INSERT INTO `order` VALUES ('9', '7', '2015-06-02', '1');
INSERT INTO `order` VALUES ('10', '1', '2015-06-02', '1');
INSERT INTO `order` VALUES ('11', '1', '2015-06-02', '1');
INSERT INTO `order` VALUES ('12', '1', '2015-06-02', '1');
INSERT INTO `order` VALUES ('13', '1', '2015-06-03', '1');
INSERT INTO `order` VALUES ('14', '1', '2015-06-03', '1');
INSERT INTO `order` VALUES ('15', '4', '2016-07-12', '1');
INSERT INTO `order` VALUES ('16', '7', '2016-07-12', '1');
INSERT INTO `order` VALUES ('17', '1', '2016-08-19', '1');

-- ----------------------------
-- Table structure for `payment_order`
-- ----------------------------
DROP TABLE IF EXISTS `payment_order`;
CREATE TABLE `payment_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `total_order` decimal(10,2) NOT NULL,
  `entry` decimal(10,2) DEFAULT NULL,
  `discount` decimal(10,2) DEFAULT NULL,
  `date_register` date NOT NULL,
  `type` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_payment_order_order_1` (`order_id`),
  KEY `fk_payment_order_document_type_1` (`type`),
  CONSTRAINT `fk_payment_order_document_type_1` FOREIGN KEY (`type`) REFERENCES `document_type` (`id`),
  CONSTRAINT `fk_payment_order_order_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of payment_order
-- ----------------------------

-- ----------------------------
-- Table structure for `product_order`
-- ----------------------------
DROP TABLE IF EXISTS `product_order`;
CREATE TABLE `product_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `qtd` int(11) NOT NULL DEFAULT '0',
  `value` decimal(10,2) DEFAULT NULL,
  `order` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_environment_fk` (`order`),
  CONSTRAINT `fk_product_order_order_1` FOREIGN KEY (`order`) REFERENCES `order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_order
-- ----------------------------
INSERT INTO `product_order` VALUES ('1', 'abacate cor de abobora', '4', '1125.00', '2');
INSERT INTO `product_order` VALUES ('3', 'criados mudo', '2', '275.00', '4');
INSERT INTO `product_order` VALUES ('4', 'roupeiro em mdf', '4', '3215.00', '4');
INSERT INTO `product_order` VALUES ('5', 'mdf', '125', '14.36', '13');
INSERT INTO `product_order` VALUES ('6', 'foo', '5', '143.26', '15');
INSERT INTO `product_order` VALUES ('7', 'bar', '14', '24.50', '15');
INSERT INTO `product_order` VALUES ('8', 'pregos', '15', '12.41', '16');
INSERT INTO `product_order` VALUES ('9', 'Balcão de atendimento', '10', '730.15', '17');

-- ----------------------------
-- Table structure for `receipt`
-- ----------------------------
DROP TABLE IF EXISTS `receipt`;
CREATE TABLE `receipt` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `customer` int(11) NOT NULL,
  `order` int(11) NOT NULL,
  `document_type` int(11) NOT NULL,
  `num_doc` varchar(20) DEFAULT NULL,
  `bank` int(11) DEFAULT NULL,
  `date_emission` date NOT NULL,
  `due_date` date NOT NULL,
  `date_receipt` date DEFAULT NULL,
  `doc_value` decimal(10,2) DEFAULT NULL,
  `value_receipt` decimal(10,2) DEFAULT NULL,
  `status_receipt` int(11) NOT NULL,
  `observation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_receipt_document_type_1` (`document_type`),
  KEY `fk_receipt_status_payment_receipt_1` (`status_receipt`),
  KEY `fk_receipt_customer_1` (`customer`),
  KEY `fk_receipt_bank_1` (`bank`),
  KEY `fk_receipt_order_1` (`order`),
  CONSTRAINT `fk_receipt_order_1` FOREIGN KEY (`order`) REFERENCES `order` (`id`),
  CONSTRAINT `fk_receipt_bank_1` FOREIGN KEY (`bank`) REFERENCES `bank` (`id`),
  CONSTRAINT `fk_receipt_customer_1` FOREIGN KEY (`customer`) REFERENCES `customer` (`id`),
  CONSTRAINT `fk_receipt_document_type_1` FOREIGN KEY (`document_type`) REFERENCES `document_type` (`id`),
  CONSTRAINT `fk_receipt_status_payment_receipt_1` FOREIGN KEY (`status_receipt`) REFERENCES `status_payment_receipt` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of receipt
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
-- Table structure for `status_payment_receipt`
-- ----------------------------
DROP TABLE IF EXISTS `status_payment_receipt`;
CREATE TABLE `status_payment_receipt` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of status_payment_receipt
-- ----------------------------
INSERT INTO `status_payment_receipt` VALUES ('1', 'Receber');
INSERT INTO `status_payment_receipt` VALUES ('2', 'Pago');
INSERT INTO `status_payment_receipt` VALUES ('3', 'Aberto');

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of supplier
-- ----------------------------
INSERT INTO `supplier` VALUES ('1', 'DECORE', 'Decoracao', '00000000000000', '111111111', 'Rua Santo antonio', '000', 'centro', '00000000', 'huberlandia', 'MG', '0000000000', '0', '', '2015-03-18', '2016-07-08', '0');
INSERT INTO `supplier` VALUES ('2', 'Inc materiais', '- Ind. e Com. de Carpintaria LTDA', '00000000000000', '0000000000', 'Av. das Indústrias', '762', 'Bairro', '32956111', 'Cidade', 'PR', '0000000000', '0000000000', '', '2015-03-18', '2016-07-08', '0');
INSERT INTO `supplier` VALUES ('3', 'Comp 02', 'Produtos moveleiros LTDA', '00000000000000', '000000000000', 'Fjadfhaushi', '45465', 'fadfadsfad', '00000000', 'Curitiba', 'PR', '9999999999', '9999999999', '', '2015-03-18', '2016-07-08', '0');
INSERT INTO `supplier` VALUES ('4', 'Kof materiais', 'Comercio de Produtos para Marcenaria LTDA', '00000000000000', '00000000000', 'Av. Duque de Caxias', '556', 'Centro', '11111111', 'Presidente', 'PR', '33333333333', '', '0', '2015-03-18', '2016-07-08', '0');
INSERT INTO `supplier` VALUES ('5', 'Comp', 'Produtos Moveleiros LTDA', '0', '0', 'Av. das Industrias', '', '', '0', '', '', '9999999999', '0', '0', '2015-03-18', '2016-07-08', '0');
