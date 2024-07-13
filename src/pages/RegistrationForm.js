// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios'; // for making HTTP requests

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/register', { username, password });
      console.log(response.data); // handle success or show a success message
    } catch (error) {
      console.error(error.response.data); // handle error or show an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
