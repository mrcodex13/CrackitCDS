import { useEffect, useState } from "react";
import "./Clock.css";

function Clock() {
  /* CDS exam target date — countdown runs until this moment */
  const targetDate = new Date("2026-09-13T00:00:00");

  /* Calculate days, hours, minutes, seconds remaining */
  const getTimeLeft = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { d: 0, h: 0, m: 0, s: 0 };
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    return { d, h, m, s };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  /* Re-calculate every second so the countdown stays live */
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock-card-premium glass-card">
        <span className="clock-label">COUNTDOWN</span>

        <div className="clock-time-vals">
          {timeLeft.d}d {String(timeLeft.h).padStart(2, "0")}h
        </div>

        <span className="clock-sub-text">
          {String(timeLeft.m).padStart(2, "0")}m {String(timeLeft.s).padStart(2, "0")}s remaining
        </span>

        <div className="tooltip-premium">
          <p>Time left for your CDS examination.</p>
        </div>
      </div>
    </div>
  );
}

export default Clock;
