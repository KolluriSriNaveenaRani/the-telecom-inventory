const { users } = require('..staticData');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, role: user.role }, 'secretKey', { expiresIn: '1h' });
  res.json({ token, role: user.role });
};
