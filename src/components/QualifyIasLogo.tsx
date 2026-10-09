'use client';

import React from 'react';

export default function QualifyIasLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`qualify-logo-container ${className}`}>
      {/* Exact Vector Emblem: Red Q + Torch-Bearing Female Student / Athlete */}
      <div className="qualify-emblem-wrap" aria-hidden="true">
        <svg
          viewBox="0 0 240 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="qualify-emblem-svg"
        >
          {/* 1. Large Bold Red Letter "Q" */}
          <g transform="translate(18, 12)">
            {/* Outer circle of Q */}
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="#B91C1C"
              strokeWidth="15"
              fill="none"
            />
            {/* Tail of Q */}
            <path
              d="M 44 48 L 78 86"
              stroke="#B91C1C"
              strokeWidth="15"
              strokeLinecap="round"
            />
          </g>

          {/* 2. Torch Bearer Silhouette (Black athlete + Red Flame) */}
          <g transform="translate(112, 12)">
            {/* Red Torch Flame (Dynamic 3-fork fire) */}
            <path
              d="M 5,26 C 2,18 8,10 14,4 C 18,12 24,14 26,8 C 29,15 28,22 25,27 C 22,23 18,22 16,25 C 13,29 10,29 5,26 Z"
              fill="#B91C1C"
            />
            <path
              d="M 12,25 C 10,20 13,16 16,13 C 18,17 21,18 20,22 C 17,21 14,22 12,25 Z"
              fill="#E11D48"
            />

            {/* Torch Cup & Handle in Black */}
            <path
              d="M 4,26 L 24,26 L 19,34 L 9,34 Z"
              fill="#111827"
            />
            <line
              x1="14"
              y1="34"
              x2="16"
              y2="52"
              stroke="#111827"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Torch Bearer Athlete Silhouette (Female student with ponytail) */}
            {/* Head */}
            <circle cx="36" cy="36" r="10" fill="#111827" />
            {/* Hair Ponytail blowing back */}
            <path
              d="M 42,32 Q 58,28 64,36 Q 52,38 44,40 Z"
              fill="#111827"
            />
            {/* Torso & Shoulder */}
            <path
              d="M 30,48 C 30,45 34,44 40,46 C 45,48 46,56 44,66 L 32,66 C 30,60 30,52 30,48 Z"
              fill="#111827"
            />
            {/* Arm holding torch */}
            <path
              d="M 32,48 L 18,48 L 16,52"
              stroke="#111827"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Left Arm extended */}
            <path
              d="M 44,50 Q 56,58 60,68"
              stroke="#111827"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            {/* Lower Body in motion */}
            <path
              d="M 32,66 L 26,86 L 20,102 M 42,66 L 50,84 L 62,96"
              stroke="#111827"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="qualify-text-lockup">
        <div className="qualify-brand-heading">
          <span className="brand-qualify">QUALIFY</span>
          <span className="brand-ias">IAS</span>
        </div>
        <div className="qualify-brand-tagline">
          AN INSTITUTE FOR CIVIL SERVICES PREPARATION
        </div>
      </div>
    </div>
  );
}
