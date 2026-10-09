'use client';

import React from 'react';

// Golden Scissors cutting ribbon
export function GoldenScissorsRibbon({ className = '' }: { className?: string }) {
  return (
    <div className={`ceremony-scissors-decor ${className}`} aria-hidden="true">
      <svg viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="35%" stopColor="#eab308" />
            <stop offset="70%" stopColor="#ca8a04" />
            <stop offset="100%" stopColor="#a16207" />
          </linearGradient>

          <linearGradient id="redRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#991b1b" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>

        {/* Curving Red Ceremonial Ribbon */}
        <path
          d="M -20,120 C 15,115 50,85 85,75 C 115,65 145,55 170,20"
          stroke="url(#redRibbonGrad)"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        {/* Ribbon fold shadow */}
        <path
          d="M 60,82 C 75,78 95,72 110,66"
          stroke="#7f1d1d"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />

        {/* Pair of Golden Scissors */}
        <g transform="translate(35, 15) rotate(22)">
          {/* Top Blade */}
          <path
            d="M 30,35 L 75,10 C 78,8 82,12 80,15 L 36,45 Z"
            fill="url(#goldGradient)"
            stroke="#854d0e"
            strokeWidth="0.8"
          />
          {/* Bottom Blade */}
          <path
            d="M 32,40 L 78,60 C 82,62 84,58 81,55 L 36,36 Z"
            fill="url(#goldGradient)"
            stroke="#854d0e"
            strokeWidth="0.8"
          />
          {/* Pivot Screw */}
          <circle cx="36" cy="38" r="3" fill="#451a03" />
          <circle cx="36" cy="38" r="1.5" fill="#fef08a" />
          {/* Top Handle Ring */}
          <ellipse
            cx="14"
            cy="24"
            rx="12"
            ry="8"
            transform="rotate(-20 14 24)"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="4.5"
          />
          {/* Bottom Handle Ring */}
          <ellipse
            cx="16"
            cy="52"
            rx="12"
            ry="8"
            transform="rotate(25 16 52)"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="4.5"
          />
        </g>

        {/* Drifting Confetti Pieces */}
        <circle cx="15" cy="55" r="3.5" fill="#eab308" />
        <rect x="75" y="15" width="5" height="5" rx="1" fill="#dc2626" transform="rotate(25 75 15)" />
        <rect x="125" y="35" width="6" height="4" rx="1" fill="#b91c1c" transform="rotate(-15 125 35)" />
        <circle cx="140" cy="12" r="2.5" fill="#eab308" />
        <rect x="25" y="80" width="5" height="5" rx="1" fill="#dc2626" transform="rotate(40 25 80)" />
      </svg>
    </div>
  );
}

// Golden Filigree Divider Flourish (~ ಌ ~)
export function FiligreeFlourish({ className = '' }: { className?: string }) {
  return (
    <div className={`filigree-flourish-wrap ${className}`} aria-hidden="true">
      <svg viewBox="0 0 180 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="filigree-svg">
        <path
          d="M 10,12 C 30,12 40,6 55,6 C 65,6 72,12 80,12 C 84,12 86,9 89,5 C 90,8 92,12 96,12 C 104,12 111,6 121,6 C 136,6 146,12 166,12"
          stroke="#C5A059"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Center Heart/Trefoil Emblem */}
        <circle cx="88" cy="12" r="3" fill="#C5A059" />
        <path
          d="M 88,3 C 86,6 83,9 80,10 M 88,3 C 90,6 93,9 96,10"
          stroke="#C5A059"
          strokeWidth="1.2"
        />
        <circle cx="35" cy="9" r="1.5" fill="#D4AF37" />
        <circle cx="141" cy="9" r="1.5" fill="#D4AF37" />
      </svg>
    </div>
  );
}

// Golden Laurel Wreath Circular Frame (for Chief Guest)
export function GoldenLaurelWreath({ children }: { children: React.ReactNode }) {
  return (
    <div className="laurel-wreath-container">
      {/* Golden Leaves Overlay */}
      <svg
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="laurel-wreath-svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="laurelGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#996515" />
          </linearGradient>
        </defs>

        {/* Left Laurel Branch */}
        <g fill="url(#laurelGold)" stroke="#854d0e" strokeWidth="0.4">
          {/* Leaves along left arc */}
          <path d="M 45,135 C 38,130 25,115 20,95 C 16,75 22,50 35,32" stroke="url(#laurelGold)" strokeWidth="1.8" fill="none" />
          {/* Individual pairs of leaves */}
          <path d="M 40,128 C 30,126 24,134 32,138 Z" />
          <path d="M 32,118 C 22,112 18,122 26,126 Z" />
          <path d="M 26,105 C 14,100 12,110 20,114 Z" />
          <path d="M 21,90 C 10,85 10,95 18,98 Z" />
          <path d="M 20,74 C 10,68 12,78 20,80 Z" />
          <path d="M 22,58 C 12,50 16,60 24,62 Z" />
          <path d="M 27,44 C 18,34 24,44 32,46 Z" />
          <path d="M 35,32 C 28,22 36,30 42,34 Z" />
        </g>

        {/* Right Laurel Branch */}
        <g fill="url(#laurelGold)" stroke="#854d0e" strokeWidth="0.4">
          {/* Leaves along right arc */}
          <path d="M 105,135 C 112,130 125,115 130,95 C 134,75 128,50 115,32" stroke="url(#laurelGold)" strokeWidth="1.8" fill="none" />
          {/* Individual pairs of leaves */}
          <path d="M 110,128 C 120,126 126,134 118,138 Z" />
          <path d="M 118,118 C 128,112 132,122 124,126 Z" />
          <path d="M 124,105 C 136,100 138,110 130,114 Z" />
          <path d="M 129,90 C 140,85 140,95 132,98 Z" />
          <path d="M 130,74 C 140,68 138,78 130,80 Z" />
          <path d="M 128,58 C 138,50 134,60 126,62 Z" />
          <path d="M 123,44 C 132,34 126,44 118,46 Z" />
          <path d="M 115,32 C 122,22 114,30 108,34 Z" />
        </g>

        {/* Bottom Ribbon Bow Tie connecting the branches */}
        <path
          d="M 68,136 Q 75,132 82,136 Q 75,142 68,136 Z"
          fill="#B91C1C"
          stroke="#7f1d1d"
          strokeWidth="0.8"
        />
        <path
          d="M 68,136 L 62,146 L 68,144 M 82,136 L 88,146 L 82,144"
          stroke="#B91C1C"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>

      {/* Embedded Circle Avatar */}
      <div className="laurel-avatar-inner">{children}</div>
    </div>
  );
}

// Swallowtail Chief Guest Ribbon Banner
export function ChiefGuestRibbonBanner({ label = 'CHIEF GUEST' }: { label?: string }) {
  return (
    <div className="chief-guest-banner-wrap" aria-label={label}>
      <svg
        viewBox="0 0 220 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="chief-guest-banner-svg"
      >
        <defs>
          <linearGradient id="bannerRedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7f1d1d" />
            <stop offset="15%" stopColor="#b91c1c" />
            <stop offset="50%" stopColor="#991b1b" />
            <stop offset="85%" stopColor="#b91c1c" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>

          <linearGradient id="ribbonGoldBorder" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#fef08a" />
          </linearGradient>
        </defs>

        {/* Left Swallowtail Notch */}
        <polygon points="0,6 24,6 16,22 24,38 0,38 8,22" fill="#7f1d1d" stroke="#ca8a04" strokeWidth="0.8" />

        {/* Right Swallowtail Notch */}
        <polygon points="220,6 196,6 204,22 196,38 220,38 212,22" fill="#7f1d1d" stroke="#ca8a04" strokeWidth="0.8" />

        {/* Main Ribbon Center Body */}
        <rect x="18" y="4" width="184" height="36" rx="2" fill="url(#bannerRedGrad)" />
        {/* Top & Bottom Gold Decorative Liners */}
        <line x1="20" y1="7" x2="200" y2="7" stroke="url(#ribbonGoldBorder)" strokeWidth="1.5" />
        <line x1="20" y1="37" x2="200" y2="37" stroke="url(#ribbonGoldBorder)" strokeWidth="1.5" />

        {/* Text */}
        <text
          x="110"
          y="26"
          fill="#ffffff"
          fontSize="13"
          fontWeight="800"
          letterSpacing="0.14em"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {label}
        </text>
      </svg>
    </div>
  );
}

// Bottom Curved Red & Gold Satin Ribbon Waves
export function BottomCeremonialWave() {
  return (
    <div className="bottom-ceremonial-wave" aria-hidden="true">
      <svg
        viewBox="0 0 440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bottom-wave-svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveRed1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b91c1c" />
            <stop offset="50%" stopColor="#991b1b" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>

          <linearGradient id="waveGold1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>

        {/* Lower Red Banner Wave */}
        <path
          d="M 0,40 Q 120,80 240,45 T 440,55 L 440,80 L 0,80 Z"
          fill="url(#waveRed1)"
        />
        {/* Upper Gold Swirl Highlight */}
        <path
          d="M 0,42 Q 120,82 240,47 T 440,57"
          stroke="url(#waveGold1)"
          strokeWidth="3.5"
          fill="none"
        />
        {/* Second Crest Wave */}
        <path
          d="M 0,60 Q 160,25 320,65 T 440,75 L 440,80 L 0,80 Z"
          fill="#7f1d1d"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}
