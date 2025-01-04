const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.get('/', notificationController.getAll);

module.exports = router;
