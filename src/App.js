// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CancelBooking from './pages/CancelBooking';
import Shops from './pages/Shops';
import Chat from './pages/Chat';
import ReportMissingBag from './pages/ReportMissingBag';
import DynamicPricing from './pages/DynamicPricing';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cancel-booking" element={<CancelBooking />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/report-missing-bag" element={<ReportMissingBag />} />
        <Route path="/dynamic-pricing" element={<DynamicPricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
