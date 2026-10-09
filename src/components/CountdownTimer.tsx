'use client';

import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isEventPassed: boolean;
}

// 16th October 2026, 11:00 AM IST
const EVENT_DATE = new Date('2026-10-16T11:00:00+05:30').getTime();

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: '06',
    hours: '11',
    minutes: '07',
    seconds: '09',
    isEventPassed: false,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = EVENT_DATE - now;

      if (difference <= 0) {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
          isEventPassed: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
        isEventPassed: false,
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container" aria-label="Countdown to Inauguration">
      <div className="countdown-eyebrow">
        <span>EVENT BEGINS IN</span>
      </div>

      <div className="countdown-grid">
        <div className="countdown-item">
          <span className="countdown-num">{mounted ? timeLeft.days : '06'}</span>
          <span className="countdown-label">DAYS</span>
        </div>

        <div className="countdown-separator" aria-hidden="true" />

        <div className="countdown-item">
          <span className="countdown-num">{mounted ? timeLeft.hours : '11'}</span>
          <span className="countdown-label">HOURS</span>
        </div>

        <div className="countdown-separator" aria-hidden="true" />

        <div className="countdown-item">
          <span className="countdown-num">{mounted ? timeLeft.minutes : '07'}</span>
          <span className="countdown-label">MINUTES</span>
        </div>

        <div className="countdown-separator" aria-hidden="true" />

        <div className="countdown-item">
          <span className="countdown-num countdown-seconds">{mounted ? timeLeft.seconds : '09'}</span>
          <span className="countdown-label">SECONDS</span>
        </div>
      </div>
    </div>
  );
}
