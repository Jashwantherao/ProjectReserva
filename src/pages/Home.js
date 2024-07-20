import React, { useState } from 'react';
//import { Carousel } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaSearch, FaBus, FaCalendarAlt } from 'react-icons/fa';
import styles from './Home.module.css';

const offersData = [
  {
    title: 'Upto 20% off on weekend bookings!',
    description: 'Travel more, save more! Book your bus tickets for the weekend and enjoy a discount of upto 20%.',
    imageUrl: 'path/to/offer1.jpg',
    url: '/weekend-offer', // Optional link to offer details page
  },
  {
    title: 'Special deals for students!',
    description: 'Students get flat 10% off on all bus bookings. Show your valid ID at the time of boarding.',
    imageUrl: 'path/to/offer2.jpg',
    url: '/student-offer', // Optional link to offer details page
  },
  // Add more offers as needed
];

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
        <div className={styles.offersSection}>
          <h2>Special Offers</h2>
          <div className={styles.offersContainer}>
            <div className={styles.offerItem}>
              <h3>Offer 1</h3>
              <p>Details about offer 1...</p>
            </div>
            <div className={styles.offerItem}>
              <h3>Offer 2</h3>
              <p>Details about offer 2...</p>
            </div>
            <div className={styles.offerItem}>
              <h3>Offer 3</h3>
              <p>Details about offer 3...</p>
            </div>
            <div className={styles.offerItem}>
              <h3>Offer 4</h3>
              <p>Details about offer 4...</p>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <ul className={styles.footerLinks}>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </footer>
      </main>
    </div>
    
    
  );
};

export default Home;