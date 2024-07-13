// routes/missingBagRoutes.js
const express = require('express');
const { reportMissingBag, getMissingBags } = require('../controllers/missingBagController');
const router = express.Router();

router.post('/report', reportMissingBag);
router.get('/:userId', getMissingBags);

module.exports = router;
