'use client';

import React from 'react';

export default function TechmecsLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`techmecs-brand-wrap ${className}`}>
      <div className="techmecs-logo-icon" aria-hidden="true">
        {/* Geometric prism logo like flyer */}
        <svg
          viewBox="0 0 40 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="brand-svg"
        >
          {/* Top-Right Crimson Polygon */}
          <polygon
            points="24,2 38,18 20,24 16,10"
            fill="#a1161e"
          />
          {/* Bottom-Left Dark Charcoal Polygon */}
          <polygon
            points="6,18 20,24 16,38 2,32"
            fill="#1e2229"
          />
          {/* Accent fold */}
          <polygon
            points="16,10 20,24 6,18"
            fill="#c41c27"
          />
          <polygon
            points="20,24 16,38 28,30"
            fill="#801017"
          />
        </svg>
      </div>

      <div className="techmecs-brand-text">
        <div className="brand-title">
          <span>Techmecs</span>
          <sup className="brand-sup">®</sup>
        </div>
        <div className="brand-tagline">
          DIGITAL SOLUTIONS<br />FOR A BRIGHTER TOMORROW
        </div>
      </div>
    </div>
  );
}
