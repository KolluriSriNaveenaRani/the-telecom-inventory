const db = require('../config/db');

class Product {
  static getAll(callback) {
    db.query('SELECT * FROM products', callback);
  }

  static create(data, callback) {
    const { name, category, stock, reorderPoint } = data;
    db.query(
      'INSERT INTO products (name, category, stock, reorder_point) VALUES (?, ?, ?, ?)',
      [name, category, stock, reorderPoint],
      callback
    );
  }
}

module.exports = Product;
