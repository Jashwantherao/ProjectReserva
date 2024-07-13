// pages/CancelBooking.js
import React, { useState } from 'react';
import { cancelBooking } from '../services/api';

const CancelBooking = () => {
  const [bookingId, setBookingId] = useState('');
  const [message, setMessage] = useState('');

  const handleCancel = async () => {
    try {
      const response = await cancelBooking(bookingId);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Cancel Booking</h1>
      <input
        type="text"
        value={bookingId}
        onChange={(e) => setBookingId(e.target.value)}
        placeholder="Enter Booking ID"
      />
      <button onClick={handleCancel}>Cancel Booking</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CancelBooking;
