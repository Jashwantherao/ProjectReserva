// controllers/shopController.js
const axios = require('axios');

exports.getNearbyShops = async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=1500&type=store&key=YOUR_API_KEY`);
    const shops = response.data.results.map(shop => ({
      name: shop.name,
      rating: shop.rating,
      vicinity: shop.vicinity,
    }));
    res.status(200).json(shops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
