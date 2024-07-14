import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaSearch, FaBus, FaCalendarAlt } from 'react-icons/fa';
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    source: '',
    destination: '',
    date: ''
  });

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/search-results', { state: searchData });
  };

  return (
    <div className={styles.homepage}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <FaBus size={30} />
          <h1 className={styles.title}>ProjectReserva</h1>
        </div>
        <div className={styles.authOptions}>
          <Link to="/login" className={styles.authOption}>
            <FaSignInAlt size={20} />
            <span>Login</span>
          </Link>
          <Link to="/register" className={styles.authOption}>
            <FaUserPlus size={20} />
            <span>Register</span>
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <h2 className={styles.subtitle}>Your go-to platform for booking bus tickets hassle-free!</h2>
        <form onSubmit={handleSearch} className={styles.searchSection}>
          <div className={styles.inputWrapper}>
            <FaBus className={styles.inputIcon} />
            <input
              type="text"
              name="source"
              placeholder="Enter source location"
              className={styles.searchInput}
              value={searchData.source}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputWrapper}>
            <FaBus className={styles.inputIcon} />
            <input
              type="text"
              name="destination"
              placeholder="Enter destination location"
              className={styles.searchInput}
              value={searchData.destination}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputWrapper}>
            <FaCalendarAlt className={styles.inputIcon} />
            <input
              type="date"
              name="date"
              className={styles.searchInput}
              value={searchData.date}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={styles.searchButton}>
            <FaSearch size={20} />
          </button>
        </form>
      </main>
    </div>
  );
};

export default Home;