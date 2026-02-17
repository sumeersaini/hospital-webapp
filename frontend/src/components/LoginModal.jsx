
import React from 'react';
import '../styles/LoginModal.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpenReader,   
  faBook,
  
} from '@fortawesome/free-solid-svg-icons';
const LoginModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="login-modal-container">
          <div className="left-panel">
            <div>

              <h4> <span className="login-icon"> <FontAwesomeIcon icon={faBookOpenReader} /></span>Access patient health records in one place</h4>
              <h4> <span className="login-icon"><FontAwesomeIcon icon={faBook} /></span>Keep a track of appointments </h4>
              {/* <h4>View your medical records and lab and test results</h4> */}
            </div>
          </div>
          <div className="right-panel">
            <h2>Admin Login</h2>
           
            <input type="text" placeholder="Admin Email" />
            <input type="password" placeholder="Admin Password" />
            <div>
              {/* <input type="checkbox" /> */}
              {/* <span>By logging in, you agree to our <a href="#">Terms Of Use</a></span> */}
            </div>
            <button className="otp-button">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
