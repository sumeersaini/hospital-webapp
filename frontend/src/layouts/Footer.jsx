import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-section">
          <img
            src="/logo.png"
            alt="Healing Hands Logo"
            className="footer-logo"
            width="150"
          />
          <div className="footer-social">
            {/* <a href="#">📘</a>
            <a href="#">🐦</a>
            <a href="#">🔗</a>
            <a href="#">📸</a> */}
          </div>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email ID" />
            <button>➤</button>
          </div>
          {/* <div className="app-links">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </a>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
              />
            </a>
          </div> */}
        </div>

        <div className="footer-section">
          <h4>Patient Guide</h4>
          <ul>
            <li><a href="#">Our Network</a></li>
            <li><a href="#">Make an Enquiry</a></li>
            <li><a href="#">Find a Doctor</a></li>
            <li><a href="#">Book an Appointment</a></li>
            <li><a href="#">Video Consultation</a></li>
            <li><a href="#">Health Check Package</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Common Searches</h4>
          <ul>
            <li><a href="#">Chest Pain</a></li>
            <li><a href="#">Heart Attack</a></li>
            <li><a href="#">Varicose Veins</a></li>
            <li><a href="#">Thyroid Problems</a></li>
            <li><a href="#">View All</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>For Medical Professionals</h4>
          <ul>
            <li><a href="#">Academics</a></li>
            <li><a href="#">Clinical Research</a></li>
          </ul>
          <h4 style={{ marginTop: '20px' }}>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Leadership</a></li>
            <li><a href="#">Stakeholder Relations</a></li>
            <li><a href="#">News & Media</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">CSR</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
{/* 
      <div className="show-more">
        <a href="#">Show More Links ⌄</a>
      </div> */}

      <div className="footer-bottom">
        <div className="footer-links">
          {/* <a href="#">NPPA Implant Pricing</a> */}
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Disclaimer</a>
          <a href="#">Sitemap</a>
        </div>
        <p>© Healing Hands | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
