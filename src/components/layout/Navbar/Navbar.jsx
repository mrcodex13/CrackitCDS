import React, { useState, useEffect } from 'react';
import "./Navbar.css";

function Navbar() {
  const [isLight, setIsLight] = useState(false);

  /* Toggle the light-theme class on <body> whenever theme changes */
  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [isLight]);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>CrackIt<span>CDS</span></h2>
      </div>

      <div className="welcome-msg">
        Welcome, <span>Aspirant</span>
      </div>

      <div className="nav-right">
        <button
          type="button"
          className="theme-toggle bubbly-btn bubbly-btn--round"
          onClick={() => setIsLight(!isLight)}
          title="Toggle Theme"
        >
          {isLight ? (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          )}
        </button>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
