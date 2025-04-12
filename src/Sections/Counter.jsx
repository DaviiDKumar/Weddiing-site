import React, { useEffect, useState } from "react";
import "../Css/Counter.css";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-04-14T20:00:00"); // 8:00 PM
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <h2 className="countdown-heading">Counting Down To-" Forever ", To-" I DO "</h2>
      <p className="countdown-description">
        "Every moment brings us closer <br />A journey of love, waiting to begin."
      </p>
      <div className="timer">
        <div className="time-box">
          <span className="num">{timeLeft.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-box">
          <span className="num">{timeLeft.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-box">
          <span className="num">{timeLeft.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="time-box">
          <span className="num">{timeLeft.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
