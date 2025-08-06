const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');

router.post('/', communityController.createCommunity);
router.get('/:courseId', communityController.getCommunityByCourse);
router.post('/post/:communityId', communityController.addPostToCommunity);

module.exports = router;
