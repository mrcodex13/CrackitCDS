import React, { useState, useEffect } from 'react';
import './Quotes.css';

/* Pool of motivational quotes — one is picked at random on load */
const quotes = [
  "The secret of success is to do the common thing uncommonly well.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "The only place where success comes before work is in the dictionary.",
  "Don't wish it were easier; wish you were better.",
  "Your talent determines what you can do. Your motivation determines how much you are willing to do.",
  "Discipline is the bridge between goals and accomplishment.",
  "Focus on being productive instead of busy.",
  "The expert in anything was once a beginner.",
];

const Quotes = () => {
  const [quote, setQuote] = useState("");

  /* Pick a random quote when the component first mounts */
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  /* Pick a new quote that is different from the current one */
  const getNewQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[newIndex] === quote);
    setQuote(quotes[newIndex]);
  };

  return (
    <div className="quotes-card glass-card">
      <div className="quote-header">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5">
          <path d="M3 21c3 0 7-9 7-9h-7v9zm11 0c3 0 7-9 7-9h-7v9z" />
        </svg>
        <span>MINDSET</span>
      </div>

      <p className="quote-text-main">{quote}</p>

      <button
        type="button"
        className="quote-refresh bubbly-btn bubbly-btn--round"
        onClick={getNewQuote}
        title="New quote"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
        </svg>
      </button>
    </div>
  );
};

export default Quotes;
