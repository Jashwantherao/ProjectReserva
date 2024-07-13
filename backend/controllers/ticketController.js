// controllers/ticketController.js
const { calculatePrice } = require('../utils/pricing');

exports.getTicketPrice = async (req, res) => {
  try {
    const { basePrice, bookingTime, seatAvailability, seasonality } = req.query;
    const price = calculatePrice(basePrice, bookingTime, seatAvailability, seasonality);
    res.status(200).json({ price });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
