// routes/bookingRoutes.js
const express = require('express');
const { cancelBooking } = require('../controllers/bookingController');
const router = express.Router();

router.put('/cancel/:bookingId', cancelBooking);

module.exports = router;
