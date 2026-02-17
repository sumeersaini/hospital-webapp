// src/layouts/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faPhoneAlt,
  faMapMarkerAlt,
  faCaretDown,
  faUser,
  faBars,
  faCalendarPlus,
  faVideo,
  faVial,
  faNotesMedical,
} from '@fortawesome/free-solid-svg-icons';
// import { useAuth } from '../context/AuthContext';
// import { supabase } from '../services/supabaseClient';

import LoginModal from '../components/LoginModal';
import MapModal from '../components/MapModal'; // adjust path if needed

const Header = () => {
  // const { user } = useAuth();
  const user = null;
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [showMapModal, setShowMapModal] = useState(false);
  const handleLocationClick = (event) => {
    event.preventDefault();
    setShowMapModal(true);
  }

  const handleLogout = async () => {
    // const { error } = await supabase.auth.signOut();
    // if (error) {
    //   console.error('Error signing out:', error);
    // } else {
    //   navigate('/');
    // }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}

        {showMapModal && <MapModal onClose={() => setShowMapModal(false)} />}

        {/* Logo */}
        <div className="logo">
          <img src="/logo.png" alt="Healing Hands Logo" />
        </div>

        {/* Mobile Toggle Button */}
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* Nav */}
        <div className={`nav-wrapper ${menuOpen ? 'show' : ''}`}>

          {/* Top Row */}
          <div className="top-row">
            <a href="#">Blogs</a>
            <a href="#"><FontAwesomeIcon icon={faSearch} /> Search Website</a>
            <a href="#"><FontAwesomeIcon icon={faPhoneAlt} /> 1800000000</a>
            <a href="#" onClick={handleLocationClick} >
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Dasuya <FontAwesomeIcon icon={faCaretDown} />
            </a>
            {user ? (
              <button onClick={handleLogout} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faUser} /> Logout
              </button>
            ) : (
              // <Link to="/login"><FontAwesomeIcon icon={faUser} /> Login</Link>
              <button onClick={() => setShowLoginModal(true)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faUser} /> Login
              </button>
            )}
          </div>

          {/* Bottom Row */}
          <div className="bottom-row">
            <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>

            <a href="#">Our Services</a>
            <a href="#">Our Network</a>
            <a href="#">One Health</a>
            <Link to="/emergency" onClick={() => setMenuOpen(false)}>Emergency</Link>


            {/* Appointment Dropdown */}
            <div className="appointment-dropdown">
              <a href="#" className="appointment-btn">Book Appointment</a>
              <div className="dropdown-menu appointment">
                <div className="dropdown-grid">
                  <div className="dropdown-card top">
                    <FontAwesomeIcon icon={faCalendarPlus} className="icon" />
                    <h4>Doctor's Appointment</h4>
                    <p>Consult top doctors for personalised care and better health outcomes</p>
                  </div>
                  <div className="dropdown-card top">
                    <FontAwesomeIcon icon={faVideo} className="icon" />
                    <h4>Video Consultation</h4>
                    <p>Connect with doctors for expert advice from the comfort of your home</p>
                  </div>
                  <div className="dropdown-card">
                    <FontAwesomeIcon icon={faVial} className="icon" />
                    <h4>Lab Test</h4>
                    <p>Schedule lab tests for accurate insights and timely health management</p>
                  </div>
                  <div className="dropdown-card">
                    <FontAwesomeIcon icon={faNotesMedical} className="icon" />
                    <h4>Health Package</h4>
                    <p>Book a health package to prevent or treat concerns & ensure timely care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
