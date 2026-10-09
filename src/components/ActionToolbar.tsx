'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import confetti from 'canvas-confetti';

// 1. Official Google Calendar Logo (with event date '16')
function GoogleCalendarLogo({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="action-svg-icon gcal-svg"
      aria-hidden="true"
    >
      {/* Base White Card with subtle border */}
      <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" fill="#ffffff" stroke="#dadce0" strokeWidth="0.8" />

      {/* Google 4-Color Frame Borders */}
      {/* Top Blue */}
      <path d="M 7,2.5 L 17,2.5 C 19.5,2.5 21.5,4.5 21.5,7 L 21.5,7.5 L 2.5,7.5 L 2.5,7 C 2.5,4.5 4.5,2.5 7,2.5 Z" fill="#4285F4" />
      {/* Top-Right Red Fold */}
      <path d="M 16.5,2.5 L 21.5,7.5 L 21.5,7 C 21.5,4.5 19.5,2.5 17,2.5 Z" fill="#EA4335" />
      {/* Bottom Green */}
      <path d="M 7,21.5 L 17,21.5 C 19.5,21.5 21.5,19.5 21.5,17 L 20,17 L 16,21.5 Z" fill="#34A853" />
      {/* Bottom-Right Yellow */}
      <path d="M 16.5,21.5 L 21.5,16.5 L 21.5,17 C 21.5,19.5 19.5,21.5 17,21.5 Z" fill="#FBBC04" />
      {/* Left Blue Accent */}
      <path d="M 2.5,7 L 2.5,17 C 2.5,19.5 4.5,21.5 7,21.5 L 7.5,21.5 L 2.5,16 Z" fill="#4285F4" />

      {/* Date Number '16' in Google Sans style font */}
      <text
        x="12"
        y="16.5"
        fill="#1a73e8"
        fontSize="9"
        fontWeight="800"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        16
      </text>
    </svg>
  );
}

// 2. Improved Vibrant Share Icon
function ImprovedShareIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="action-svg-icon share-svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="shareGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      {/* Connecting Links */}
      <line x1="8.5" y1="10.8" x2="15.5" y2="6.8" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="8.5" y1="13.2" x2="15.5" y2="17.2" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" />
      {/* Node Circles */}
      <circle cx="17.5" cy="5.5" r="3.6" fill="url(#shareGrad)" />
      <circle cx="17.5" cy="5.5" r="1.5" fill="#ffffff" />
      <circle cx="6.5" cy="12" r="3.8" fill="url(#shareGrad)" />
      <circle cx="6.5" cy="12" r="1.6" fill="#ffffff" />
      <circle cx="17.5" cy="18.5" r="3.6" fill="url(#shareGrad)" />
      <circle cx="17.5" cy="18.5" r="1.5" fill="#ffffff" />
    </svg>
  );
}

// 3. Authentic Party Popper Icon (🎉)
function PartyPopperIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="action-svg-icon popper-svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="coneGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>

      {/* Party Horn / Cone (Striped in Golden Amber & Crimson Red) */}
      <path
        d="M 3,21 L 6.5,11 L 16.5,18.5 Z"
        fill="url(#coneGrad)"
      />
      {/* Red Festive Stripes on the Cone */}
      <path
        d="M 4.2,17.5 L 9.8,13.5 L 11.5,14.8 L 5.2,19.2 Z"
        fill="#dc2626"
      />
      <path
        d="M 12.5,15.5 L 14.2,16.8 L 15.5,15.8 L 13.8,14.5 Z"
        fill="#dc2626"
      />

      {/* Confetti Explosion Bursting out of the Top */}
      {/* Streamer 1 (Pink / Magenta curl) */}
      <path
        d="M 14,12 C 16,9 18,11 20,8"
        stroke="#ec4899"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Streamer 2 (Cyan / Blue curl) */}
      <path
        d="M 11,8 C 13,5 16,6 17,2"
        stroke="#06b6d4"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Confetti Star (Gold) */}
      <polygon
        points="19,3 19.8,4.6 21.6,4.8 20.3,6 20.6,7.8 19,7 17.4,7.8 17.7,6 16.4,4.8 18.2,4.6"
        fill="#f59e0b"
      />
      {/* Floating Confetti Flakes */}
      <circle cx="8" cy="5" r="1.4" fill="#dc2626" />
      <circle cx="12" cy="11" r="1.4" fill="#10b981" />
      <rect x="20.5" y="11" width="2.2" height="2.2" rx="0.5" fill="#8b5cf6" transform="rotate(30 20.5 11)" />
      <circle cx="16" cy="7" r="1.2" fill="#3b82f6" />
    </svg>
  );
}

export default function ActionToolbar() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'QUALIFY IAS - Offline Centre Inauguration Invitation',
      text: 'You are cordially invited to the inauguration of QUALIFY IAS Offline Centre on Friday, 16th October 2026 at Ashok Nagar, Hyderabad.',
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // Fallback
      }
    }

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.65 },
      colors: ['#b91c1c', '#d4af37', '#fef08a', '#2563eb', '#ec4899', '#10b981'],
    });
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=QUALIFY+IAS+Offline+Centre+Inauguration&dates=20261016T053000Z/20261016T093000Z&details=Inauguration+of+the+First+Offline+Centre+of+QUALIFY+IAS.+Chief+Guest:+Jeenu+Jaswanth+Chandra+(AIR+23,+UPSC+CSE+2025).+Founder:+Ramareddipeta+Rajinikanth.&location=QUALIFY+IAS,+Building+No.+1-1-726/1,+Gandhi+Nagar+Road,+Ashok+Nagar,+Hyderabad+-+500080`;

  return (
    <div className="action-toolbar-wrap">
      <div className="action-toolbar">
        {/* 1. Add to Google Calendar with latest Google Calendar Logo */}
        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="action-btn calendar-action"
          title="Add to Google Calendar"
        >
          <GoogleCalendarLogo size={20} />
          <span>Add to Calendar</span>
        </a>

        {/* 2. Improved Share Button */}
        <button
          type="button"
          onClick={handleShare}
          className="action-btn share-action"
          title="Share Invitation"
        >
          {copied ? (
            <>
              <Check size={18} className="action-icon text-green" />
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <ImprovedShareIcon size={19} />
              <span>Share Invite</span>
            </>
          )}
        </button>

        {/* 3. Celebrate Button with Party Popper Icon */}
        <button
          type="button"
          onClick={handleConfetti}
          className="action-btn celebrate-action"
          title="Celebrate with festive party popper"
        >
          <PartyPopperIcon size={20} />
          <span>Celebrate</span>
        </button>
      </div>
    </div>
  );
}
