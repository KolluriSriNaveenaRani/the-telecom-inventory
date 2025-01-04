const { notifications } = require('..staticData');

exports.getAll = (req, res) => {
  res.json(notifications);
};
