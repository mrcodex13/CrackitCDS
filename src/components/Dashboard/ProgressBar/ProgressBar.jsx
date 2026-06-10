import React from 'react';
import './ProgressBar.css';

function ProgressBar() {
  const percentage = 68; // TODO: replace with real mastery data from backend

  /* SVG circle math — used to draw the ring progress indicator */
  const strokeWidth = 10;
  const radius = 80;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-card glass-card">
      <div className="progress-content">
        {/* Left side — title, subtitle, level badge */}
        <div className="progress-info">
          <h3>Overall Mastery</h3>
          <p>You're on track! Keep going.</p>
          <div className="mastery-badge">Level 12 Explorer</div>
        </div>

        {/* Right side — circular progress ring */}
        <div className="progress-visual">
          <svg height={radius * 2} width={radius * 2}>
            {/* Background track */}
            <circle
              stroke="rgba(255,255,255,0.05)"
              fill="transparent"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            {/* Filled progress arc */}
            <circle
              stroke="var(--primary)"
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={`${circumference} ${circumference}`}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              className="progress-circle-bar"
            />
          </svg>
          <div className="percentage-text">
            {percentage}<span>%</span>
          </div>
        </div>
      </div>

      {/* Bottom stats row */}
      <div className="progress-stats">
        <div className="stat-item">
          <span className="stat-value">124</span>
          <span className="stat-label">Hours studied</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-value">18</span>
          <span className="stat-label">Tasks done</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
