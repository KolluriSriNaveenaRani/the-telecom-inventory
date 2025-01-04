const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid Token' });
    req.user = decoded;
    next();
  });
};

module.exports = authenticate;
