// controllers/bookingController.js
const Booking = require('../models/Booking');

exports.cancelBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    const cancellationDeadline = new Date(booking.departureTime);
    cancellationDeadline.setHours(cancellationDeadline.getHours() - 2); // Allow cancellation up to 2 hours before departure

    if (new Date() > cancellationDeadline) {
      return res.status(400).json({ message: 'Cannot cancel booking within 2 hours of departure' });
    }

    booking.status = 'cancelled';
    await booking.save();
    res.status(200).json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
