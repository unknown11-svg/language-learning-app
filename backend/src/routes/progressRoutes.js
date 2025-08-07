const express = require('express');
const router = express.Router();
const progressController = require('../controllers/userProgressController');

router.post('/', progressController.updateProgress);
router.get('/:userId', progressController.getUserProgress);

module.exports = router;
