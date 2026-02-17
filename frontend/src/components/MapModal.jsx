// src/components/MapModal.jsx
import React from 'react';
import '../styles/MapModal.css';

const MapModal = ({ onClose }) => {
  return (
    <div className="map-modal-overlay">
      <div className="map-modal-content">
        <button className="map-close-button" onClick={onClose}>×</button>
        <iframe
          title="Dasuya Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.973957709173!2d75.6510550151269!3d31.814329881282543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a552af13f1109%3A0xb6794ad093338ce!2sDasuya%2C%20Punjab!5e0!3m2!1sen!2sin!4v1665746916796!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapModal;
