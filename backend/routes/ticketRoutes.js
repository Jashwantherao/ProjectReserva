// routes/ticketRoutes.js
const express = require('express');
const { getTicketPrice } = require('../controllers/ticketController');
const router = express.Router();

router.get('/price', getTicketPrice);

module.exports = router;
