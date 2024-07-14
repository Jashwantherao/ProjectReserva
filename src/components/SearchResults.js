// src/pages/SearchResults.js

import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaBus, FaClock, FaMoneyBillWave, FaExchangeAlt, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import styles from './SearchResults.module.css';

const SearchResults = () => {
  const location = useLocation();
  const [searchData, setSearchData] = useState(location.state || {
    source: '',
    destination: '',
    date: ''
  });

  const [sortBy, setSortBy] = useState('price');
  const [filters, setFilters] = useState({
    priceDrop: false,
    busType: {
      AC: false,
      NonAC: false,
      Seater: false,
      Sleeper: false
    },
    priceRange: [646, 7500],
    departureTime: {
      before10AM: false,
      '10AM-5PM': false,
      '5PM-11PM': false,
      after11PM: false
    }
  });

  const handleSearchChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('New search:', searchData);
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
  };

  // Dummy bus data (same as before)
  const dummyBuses = [
    { id: 1, name: 'Express Bus 1', departure: '08:00', arrival: '12:00', price: 25 },
    { id: 2, name: 'Luxury Coach 2', departure: '10:30', arrival: '14:30', price: 35 },
    { id: 3, name: 'Economy Bus 3', departure: '13:00', arrival: '17:00', price: 20 },
    { id: 4, name: 'Night Rider 4', departure: '22:00', arrival: '02:00', price: 30 },
  ];

  return (
    <div className={styles.searchResults}>
      <header className={styles.header}>
        <Link to="/" className={styles.backLink}>
          <FaBus /> ProjectReserva
        </Link>
        <h1 className={styles.title}>Search Results</h1>
      </header>

      <form onSubmit={handleSearch} className={styles.searchForm}>
        <div className={styles.inputWrapper}>
          <FaBus className={styles.inputIcon} />
          <input
            type="text"
            name="source"
            placeholder="From"
            value={searchData.source}
            onChange={handleSearchChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <FaExchangeAlt className={styles.inputIcon} />
          <input
            type="text"
            name="destination"
            placeholder="To"
            value={searchData.destination}
            onChange={handleSearchChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <FaCalendarAlt className={styles.inputIcon} />
          <input
            type="date"
            name="date"
            value={searchData.date}
            onChange={handleSearchChange}
          />
        </div>
        <button type="submit" className={styles.searchButton}>
          <FaSearch /> Search
        </button>
      </form>

      <div className={styles.sortAndFilter}>
        <div className={styles.sortBy}>
          <span>Sort By:</span>
          {['Price', 'Seats', 'Ratings', 'Arrival Time', 'Departure Time'].map(option => (
            <button
              key={option}
              className={sortBy === option.toLowerCase() ? styles.active : ''}
              onClick={() => handleSortChange(option.toLowerCase())}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.mainContent}>
        <aside className={styles.filtersPane}>
          <h3>Filters</h3>
          <div className={styles.filterSection}>
            <h4>Price Drop</h4>
            <label>
              <input
                type="checkbox"
                checked={filters.priceDrop}
                onChange={(e) => handleFilterChange('priceDrop', e.target.checked)}
              />
              Show Price Drop
            </label>
          </div>
          <div className={styles.filterSection}>
            <h4>Bus Type</h4>
            {Object.keys(filters.busType).map(type => (
              <label key={type}>
                <input
                  type="checkbox"
                  checked={filters.busType[type]}
                  onChange={(e) => handleFilterChange('busType', {...filters.busType, [type]: e.target.checked})}
                />
                {type}
              </label>
            ))}
          </div>
          <div className={styles.filterSection}>
            <h4>Price Range</h4>
            <input
              type="range"
              min="646"
              max="7500"
              value={filters.priceRange[1]}
              onChange={(e) => handleFilterChange('priceRange', [646, parseInt(e.target.value)])}
            />
            <span>₹646 - ₹{filters.priceRange[1]}</span>
          </div>
          <div className={styles.filterSection}>
            <h4>Departure Time</h4>
            {Object.keys(filters.departureTime).map(time => (
              <label key={time}>
                <input
                  type="checkbox"
                  checked={filters.departureTime[time]}
                  onChange={(e) => handleFilterChange('departureTime', {...filters.departureTime, [time]: e.target.checked})}
                />
                {time.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </label>
            ))}
          </div>
        </aside>

        <div className={styles.busListContainer}>
          {dummyBuses.map(bus => (
            <div key={bus.id} className={styles.busCard}>
              <h2 className={styles.busName}>{bus.name}</h2>
              <div className={styles.busDetails}>
                <p><FaClock /> Departure: {bus.departure}</p>
                <p><FaClock /> Arrival: {bus.arrival}</p>
                <p><FaMoneyBillWave /> Price: ₹{bus.price}</p>
              </div>
              <button className={styles.bookButton}>Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;