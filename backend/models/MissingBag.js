// models/MissingBag.js
const mongoose = require('mongoose');

const missingBagSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  busId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
  seatNumber: { type: Number, required: true },
  description: { type: String, required: true },
  contactInfo: { type: String, required: true },
  status: { type: String, default: 'reported' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('MissingBag', missingBagSchema);
