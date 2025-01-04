const db = require('../config/db');

class Notification {
  static create(message, callback) {
    db.query(
      'INSERT INTO notifications (message) VALUES (?)',
      [message],
      callback
    );
  }

  static getPending(callback) {
    db.query('SELECT * FROM notifications WHERE status = "PENDING"', callback);
  }
}

module.exports = Notification;
