// pages/ReportMissingBag.js
import React, { useState } from 'react';
import { reportMissingBag } from '../services/api';

const ReportMissingBag = () => {
  const [busId, setBusId] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [description, setDescription] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');

  const handleReport = async () => {
    try {
      const response = await reportMissingBag({ busId, seatNumber, description, contactInfo });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Report Missing Bag</h1>
      <input
        type="text"
        value={busId}
        onChange={(e) => setBusId(e.target.value)}
        placeholder="Enter Bus ID"
      />
      <input
        type="number"
        value={seatNumber}
        onChange={(e) => setSeatNumber(e.target.value)}
        placeholder="Enter Seat Number"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter Bag Description"
      />
      <input
        type="text"
        value={contactInfo}
        onChange={(e) => setContactInfo(e.target.value)}
        placeholder="Enter Contact Info"
      />
      <button onClick={handleReport}>Report Missing Bag</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ReportMissingBag;
