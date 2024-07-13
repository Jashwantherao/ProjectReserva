// pages/DynamicPricing.js
import React, { useState } from 'react';
import { getTicketPrice } from '../services/api';

const DynamicPricing = () => {
  const [basePrice, setBasePrice] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [seatAvailability, setSeatAvailability] = useState('');
  const [seasonality, setSeasonality] = useState('');
  const [price, setPrice] = useState(null);

  const handleGetPrice = async () => {
    try {
      const response = await getTicketPrice({ basePrice, bookingTime, seatAvailability, seasonality });
      setPrice(response.data.price);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Dynamic Pricing</h1>
      <input
        type="number"
        value={basePrice}
        onChange={(e) => setBasePrice(e.target.value)}
        placeholder="Enter Base Price"
      />
      <input
        type="datetime-local"
        value={bookingTime}
        onChange={(e) => setBookingTime(e.target.value)}
      />
      <input
        type="number"
        value={seatAvailability}
        onChange={(e) => setSeatAvailability(e.target.value)}
        placeholder="Enter Seat Availability"
      />
      <select value={seasonality} onChange={(e) => setSeasonality(e.target.value)}>
        <option value="">Select Seasonality</option>
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleGetPrice}>Get Price</button>
      {price && <p>Calculated Price: {price}</p>}
    </div>
  );
};

export default DynamicPricing;
