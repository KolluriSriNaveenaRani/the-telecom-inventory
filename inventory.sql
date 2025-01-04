USE sakila;
-- Table structure for table `users`
CREATE TABLE `users` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `role` enum('Admin','Manager','Staff') DEFAULT NULL,
  `phone_no` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `userName` (`userName`),
  UNIQUE KEY `email` (`email`)
);

-- Table structure for table `products`
CREATE TABLE `products` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `pname` varchar(100) NOT NULL,
  `description` text,
  `category` varchar(50) DEFAULT NULL,
  `model_no` varchar(50) DEFAULT NULL,
  `serial_no` varchar(255) DEFAULT NULL,
  `stock_level` int DEFAULT NULL,
  `reorder_point` int DEFAULT NULL,
  PRIMARY KEY (`pid`),
  UNIQUE KEY `serial_no` (`serial_no`)
);

-- Table structure for table `suppliers`
CREATE TABLE `suppliers` (
  `sid` int NOT NULL AUTO_INCREMENT,
  `sname` varchar(50) NOT NULL,
  `semail` varchar(100) NOT NULL,
  `sphone_no` varchar(15) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `quantity` int NOT NULL,
  `status` enum('Delivered','InProgress','Shipped') DEFAULT NULL,
  PRIMARY KEY (`sid`),
  UNIQUE KEY `semail` (`semail`)
);

-- Table structure for table `transactions`
CREATE TABLE `transactions` (
  `tid` int NOT NULL AUTO_INCREMENT,
  `pid` int NOT NULL,
  `uid` int NOT NULL,
  `quantity` int NOT NULL,
  `type` enum('stock-in','stock-out') NOT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`tid`),
  KEY `pid` (`pid`),
  KEY `uid` (`uid`),
  CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`) ON DELETE CASCADE,
  CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE
);






