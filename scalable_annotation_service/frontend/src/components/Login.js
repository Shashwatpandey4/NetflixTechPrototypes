// src/components/Login.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Marken</h1>
      <div className="button-container">
        <button className="login-button signup-button">
          <FontAwesomeIcon icon={faGithub} className="icon" />
          <span className="button-text">Sign Up</span>
        </button>
        <div className="separator" />
        <button className="login-button signin-button">
          <FontAwesomeIcon icon={faGithub} className="icon" />
          <span className="button-text">Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
