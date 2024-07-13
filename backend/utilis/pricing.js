// utils/pricing.js
const calculatePrice = (basePrice, bookingTime, seatAvailability, seasonality) => {
    let dynamicPrice = basePrice;
  
    // Adjust price based on booking time
    const hoursBeforeDeparture = (new Date(bookingTime) - new Date()) / 36e5;
    if (hoursBeforeDeparture < 24) dynamicPrice *= 1.5; // 50% increase if booked within 24 hours
  
    // Adjust price based on seat availability
    if (seatAvailability < 10) dynamicPrice *= 1.2; // 20% increase if less than 10 seats available
  
    // Adjust price based on seasonality
    if (seasonality === 'high') dynamicPrice *= 1.3; // 30% increase during high season
  
    return dynamicPrice;
  };
  
  module.exports = { calculatePrice };
  