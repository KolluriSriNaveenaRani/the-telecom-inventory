const db = require('../config/db');

class User {
  static findByCredentials(username, password, callback) {
    db.query(
      'SELECT * FROM users WHERE username = ? AND password = ?',
      [username, password],
      callback
    );
  }
}

module.exports = User;
