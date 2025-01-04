-- Database
CREATE DATABASE IF NOT EXISTS telecom_inventory;
USE telecom_inventory;

-- Users Table
CREATE TABLE users (
    uid INT AUTO_INCREMENT PRIMARY KEY,
    uname VARCHAR(50) NOT NULL UNIQUE,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('Admin', 'Manager', 'Staff') NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_no VARCHAR(20) NOT NULL
);

-- Products Table
CREATE TABLE products (
    pid INT AUTO_INCREMENT PRIMARY KEY,
    pname VARCHAR(100) NOT NULL,
    description TEXT,
    product_img VARCHAR(255),
    category VARCHAR(50) NOT NULL,
    model_no VARCHAR(50),
    serial_no VARCHAR(50),
    stocklevel INT NOT NULL DEFAULT 0,
    reorderpoint INT NOT NULL
);

-- Suppliers Table
CREATE TABLE suppliers (
    sid INT AUTO_INCREMENT PRIMARY KEY,
    sname VARCHAR(100) NOT NULL,
    scontact VARCHAR(20) NOT NULL,
    order_date DATE NOT NULL,
    quantity INT NOT NULL,
    order_status ENUM('InProgress
', 'Completed') NOT NULL
);

-- Transactions Table
CREATE TABLE transactions (
    tid INT AUTO_INCREMENT PRIMARY KEY,
    pid INT NOT NULL,
    uid INT NOT NULL,
    quantity INT NOT NULL,
    type ENUM('StockIn', 'StockOut') NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pid) REFERENCES products(pid),
    FOREIGN KEY (uid) REFERENCES users(uid)
);

