'use client';

import React from 'react';
import { Navigation } from 'lucide-react';

interface BottomDirectionBarProps {
  hyderabadUrl: string;
}

export default function BottomDirectionBar({ hyderabadUrl }: BottomDirectionBarProps) {
  return (
    <aside className="bottom-fixed-dock" aria-label="Quick Navigation">
      <div className="bottom-dock-container">
        <a
          href={hyderabadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="direction-btn-primary"
          aria-label="Get Directions to Hyderabad in Google Maps"
        >
          <span className="direction-icon-wrap" aria-hidden="true">
            {/* Angled navigation arrow matching flyer icon */}
            <Navigation size={18} className="direction-arrow-icon" />
          </span>
          <span className="direction-btn-text">Get Directions</span>
        </a>
      </div>
    </aside>
  );
}
