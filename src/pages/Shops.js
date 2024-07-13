// pages/Shops.js
import React, { useState } from 'react';
import { getNearbyShops } from '../services/api';

const Shops = () => {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [shops, setShops] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await getNearbyShops(lat, lon);
      setShops(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Nearby Shops</h1>
      <input
        type="text"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        placeholder="Enter Latitude"
      />
      <input
        type="text"
        value={lon}
        onChange={(e) => setLon(e.target.value)}
        placeholder="Enter Longitude"
      />
      <button onClick={handleSearch}>Search Shops</button>
      <ul>
        {shops.map((shop, index) => (
          <li key={index}>
            <h2>{shop.name}</h2>
            <p>Rating: {shop.rating}</p>
            <p>{shop.vicinity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shops;
