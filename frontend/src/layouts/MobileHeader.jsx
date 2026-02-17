import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faBars,
    faSearch,
    faAmbulance,
    faTimes,
    faUser,
    faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';

import LoginModal from '../components/LoginModal';
import MapModal from '../components/MapModal'; // adjust path if needed

import '../styles/MobileHeader.css';

const MobileHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const [showLoginModal, setShowLoginModal] = useState(false);


    const handalLogin = (event) => {
        event.preventDefault();
        setShowLoginModal(true);
        toggleMenu()
    }
    const [showMapModal, setShowMapModal] = useState(false);
    const handleLocationClick = (event) => {
        event.preventDefault();
        setShowMapModal(true);
    }
    return (
        <header className="mobile-header">
            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
            {showMapModal && <MapModal onClose={() => setShowMapModal(false)} />}

            {/* Top Blue Bar */}
            <div className="top-bar">
                <div className="location" onClick={handleLocationClick}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Dasuya</span>
                </div>
                <div className="phone">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    <a href="tel:18003090309">18003090309</a>
                </div>
            </div>

            {/* Main White Header */}
            <div className="main-header">
                <div className="logo">
                    <img src="/logo.png" alt="Logo" />
                </div>

                <div className="header-actions">
                    {/* <FontAwesomeIcon icon={faSearch} className="icon" /> */}
                    <div className="emergency">
                        <FontAwesomeIcon icon={faAmbulance} />
                        <span>24/7 Emergency</span>
                    </div>
                    <FontAwesomeIcon
                        icon={menuOpen ? faTimes : faBars}
                        className="icon"
                        onClick={toggleMenu}
                    />
                </div>
            </div>

            {/* Collapsible Menu (Optional) */}
            {menuOpen && (
                <div className="mobile-nav-overlay">
                    <div className="mobile-nav-header">
                        <img src="/logo.png" alt="Logo" className="overlay-logo" />
                        <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={toggleMenu} />

                    </div>

                    <hr className="divider" />

                    <nav className="mobile-nav">
                        <a href="#">
                            <FontAwesomeIcon icon={faCalendarCheck} /> <span className="appointment-span">Book Appointment</span>
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faUser} /> <span>Our Services</span>
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> <span>Our Network</span>
                        </a>
                        <a onClick={handalLogin} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                            <FontAwesomeIcon icon={faUser} /> Login
                        </a>

                        <hr className="divider" />

                        <a href="#">About Us</a>
                        <a href="#">Leadership</a>
                        <a href="#">Stakeholder Relations</a>

                    </nav>
                </div>
            )}
        </header>
    );
};

export default MobileHeader;
