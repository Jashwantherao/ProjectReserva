// controllers/missingBagController.js
const MissingBag = require('../models/MissingBag');

exports.reportMissingBag = async (req, res) => {
  try {
    const missingBag = new MissingBag(req.body);
    await missingBag.save();
    res.status(201).json({ message: 'Missing bag reported successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMissingBags = async (req, res) => {
  try {
    const missingBags = await MissingBag.find({ userId: req.params.userId });
    res.status(200).json(missingBags);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
