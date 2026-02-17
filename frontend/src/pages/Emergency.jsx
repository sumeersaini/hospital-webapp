import React from 'react';
import '../styles/Emergency.css';

const Emergency = () => {
  return (
    <div className="emergency-page">
      {/* Banner Section */}
      <section className="emergency-banner">
        <img src="/ambulance.png" alt="Emergency Banner" className="banner-img" />
        <div className="call-now">
          <h3>+91 1800 123 456</h3>
          <button>Call Now</button>
        </div>
      </section>

      {/* Intro */}
      <section className="intro-text">
        <h2>Top Emergency Care in Dasuya – Healing Hand Hospital</h2>
        <p>
          Healing Hand Hospital, Dasuya, is equipped with round-the-clock emergency care services to handle any crisis — from trauma and critical conditions to life-threatening emergencies. Our expert medical team ensures swift and effective care when it matters most.
        </p>
        <p>
          We offer 24x7 ambulance service, emergency diagnostics, and ICU-level interventions to ensure every patient receives prompt treatment and compassionate support.
        </p>
      </section>

      {/* Hospital Info */}
      <section className="hospital-info">
        <h2>Emergency & Trauma Services at Healing Hand Hospital</h2>
        <div className="hospital-card">
          <img src="building.png" alt="Healing Hand Hospital Building" />
          <div className="details">
            <h3>Healing Hand Hospital, Dasuya</h3>
            <p><strong>150+ Beds | 24x7 Emergency Unit</strong></p>
            <p>Services: Trauma & Emergency, ICU, Cardiology, Ortho, Blood Bank, Pharmacy, Lab & Surgery</p>
            <button>Book Emergency Appointment</button>
          </div>
          <img src="/room.png" alt="Hospital Room" className="room-img" />
        </div>
      </section>

      {/* Why Healing Hand */}
      <section className="why-nh">
        <div className="text">
          <h3>Why Choose Healing Hand Hospital?</h3>
          <ul>
            <li>Emergency doctors & nurses available 24/7</li>
            <li>Ambulance dispatch within minutes in Dasuya & nearby areas</li>
            <li>Advanced life-saving equipment & trauma support</li>
            <li>Quick diagnostics – CT, ECG, Ultrasound & more</li>
            <li>Well-equipped ICU, NICU, and surgical units</li>
            <li>Compassionate care and experienced staff</li>
          </ul>
        </div>
        <img src="dr-patient.jpg" alt="Doctor With Patient" />
      </section>

      {/* Facilities */}
      <section className="facilities">
        <div className="content">
          <h3>Facilities & Emergency Services</h3>
          <ul>
            <li>Advanced Trauma Care</li>
            <li>ICU, NICU, CCU</li>
            <li>Operation Theatres (Modular OTs)</li>
            <li>24x7 Radiology – CT, X-Ray, Ultrasound</li>
            <li>Cardiac Monitoring & Emergency Dialysis</li>
            <li>24x7 In-house Pharmacy & Lab Services</li>
          </ul>
        </div>
        <img src="/wards.jpg" alt="Hospital Ward" />
      </section>
    </div>
  );
};

export default Emergency;
