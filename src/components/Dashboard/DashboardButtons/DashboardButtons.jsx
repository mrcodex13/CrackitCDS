import React, { useState } from 'react';
import Modal from './Modal';
import './DashboardButtons.css';

/* Mock streak history shown inside the Streak modal */
const streakData = [
  { day: "Monday", date: "June 1", hours: 6 },
  { day: "Tuesday", date: "June 2", hours: 4 },
  { day: "Wednesday", date: "June 3", hours: 8 },
  { day: "Thursday", date: "June 4", hours: 5 },
  { day: "Friday", date: "June 5", hours: 7 },
  { day: "Saturday", date: "June 6", hours: 9 },
  { day: "Sunday", date: "June 7", hours: 2 },
];

const totalStreak = 12;

function DashboardButtons() {
  /* Which modal is open: 'analysis' | 'streak' | 'planning' | null */
  const [activeModal, setActiveModal] = useState(null);
  /* Index of the streak day the user clicked to reveal hours */
  const [selectedDay, setSelectedDay] = useState(null);

  /* Quick-action tiles below the countdown clock */
  const buttons = [
    {
      id: 'analysis',
      name: "Analysis",
      title: "Progress Analysis",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
    },
    {
      id: 'streak',
      name: `${totalStreak} Days`,
      title: "Study Streak",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      ),
    },
    {
      id: 'planning',
      name: "PlanningBot",
      title: "AI Planning Assistant",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="10" rx="2"></rect>
          <circle cx="12" cy="5" r="2"></circle>
          <path d="M12 7v4"></path>
          <line x1="8" y1="16" x2="8" y2="16"></line>
          <line x1="16" y1="16" x2="16" y2="16"></line>
        </svg>
      ),
    },
  ];

  /* Render the correct body inside the shared Modal component */
  const renderModalContent = () => {
    switch (activeModal) {
      case 'analysis':
        return (
          <div className="analysis-report">
            <div className="test-item">
              <span>Full Length Mock Test 1</span>
              <span className="test-score">82/100</span>
            </div>
            <div className="test-item">
              <span>English Sectional 4</span>
              <span className="test-score">45/50</span>
            </div>
            <div className="test-item">
              <span>GK Topic Test: History</span>
              <span className="test-score">18/25</span>
            </div>
          </div>
        );

      case 'streak':
        return (
          <div className="streak-info">
            <span className="streak-number">{totalStreak} Days</span>
            <p className="streak-sub">Your Current Study Streak</p>

            <div className="streak-history">
              <h3>Recent History</h3>
              <p className="hint-text">Click a day to view hours</p>

              <div className="day-list">
                {streakData.map((day, index) => (
                  <div key={index} className="day-item-container">
                    <button
                      type="button"
                      className={`day-item bubbly-btn ${selectedDay === index ? 'active' : ''}`}
                      onClick={() => setSelectedDay(selectedDay === index ? null : index)}
                    >
                      <span className="day-label">{day.day.substring(0, 3)}</span>
                      <span className="date-label">{day.date}</span>
                    </button>

                    {/* Hours panel — only visible for the selected day */}
                    {selectedDay === index && (
                      <div className="hours-reveal animate-scale">
                        <span>🔥 {day.hours} Hours Studied</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'planning':
        return (
          <div className="chatbot-interface">
            <div className="chat-bubble bot">
              Hello! I'm your PlanningBot. How can I help you structure your study session today?
            </div>
            <div className="chat-input-area">
              <input type="text" placeholder="Tell me your goal..." />
              <button type="button" className="primary-btn bubbly-btn bubbly-btn--pill">Send</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedDay(null);
  };

  return (
    <div className="dashboard-buttons-grid">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          type="button"
          className="action-tile glass-card bubbly-btn"
          onClick={() => setActiveModal(btn.id)}
        >
          <div className="tile-icon">{btn.icon}</div>
          <span className="tile-label">{btn.name}</span>
        </button>
      ))}

      <Modal
        isOpen={activeModal !== null}
        onClose={closeModal}
        title={buttons.find((b) => b.id === activeModal)?.title}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
}

export default DashboardButtons;
