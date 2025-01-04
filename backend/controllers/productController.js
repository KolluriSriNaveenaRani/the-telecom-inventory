const { products } = require('..staticData');

exports.getAll = (req, res) => {
  res.json(products);
};

exports.create = (req, res) => {
  const { name, category, stock, reorder_point } = req.body;
  const newProduct = { id: products.length + 1, name, category, stock, reorder_point };
  products.push(newProduct);
  res.status(201).json(newProduct);
};
