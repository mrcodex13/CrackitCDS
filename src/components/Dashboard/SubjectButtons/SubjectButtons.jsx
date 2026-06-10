import React from 'react';
import { Navigate, Route, useNavigate } from "react-router-dom";
import './SubjectButtons.css';

/* Subject list — each entry becomes a clickable bubbly card on the dashboard */
const subjects = [
  {
    name: "English",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
    progress: 0,
    route: "/english" ,

  },
  {
    name: "General Knowledge",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    progress: 0,
    route: "/General_Studies"  ,
  },
  {
    name: "Mathematics",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="8" y1="12" x2="16" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="16"></line>
      </svg>
    ),
    progress: 0,
    route:"/mathematics",
  },
];

function SubjectButtons() {
  const navigate = useNavigate()
  return (
    <div className="subject-container">
      {subjects.map((subject, index) => (
        <button
          key={index}
          className="subject-card glass-card bubbly-btn"
          type="button"
          onClick={()=> navigate(subject.route)}
        >
          <div className="subject-icon-container">{subject.icon}</div>

          <div className="subject-info">
            <span className="subject-name">{subject.name}</span>

            {/* Mini progress bar — width set inline from subject.progress */}
            <div className="subject-progress-mini">
              <div className="mini-bar-bg">
                <div
                  className="mini-bar-fill"
                  style={{ width: `${subject.progress}%` }}
                />
              </div>
              <span className="mini-percent">{subject.progress}%</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default SubjectButtons;
