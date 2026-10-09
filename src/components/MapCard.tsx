'use client';

import React, { useState } from 'react';
import { Compass, Plus, Minus } from 'lucide-react';

interface MapCardProps {
  hyderabadUrl: string;
}

export default function MapCard({ hyderabadUrl }: MapCardProps) {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.15, 1.35));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.15, 0.85));
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setZoomLevel(1);
  };

  return (
    <div className="map-card-wrapper google-map-clean-wrapper">
      <a
        href={hyderabadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="map-card-link"
        aria-label="Open QUALIFY IAS location in Google Maps"
      >
        <div className="map-canvas-container google-canvas-clean">
          {/* Map Viewport - Smooth zoom without any moving animation */}
          <div
            className="map-svg-viewport"
            style={{
              transform: `scale(${zoomLevel})`,
              transition: 'transform 0.25s ease-out',
            }}
          >
            <svg
              viewBox="0 0 600 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="map-svg-base"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                {/* Google Maps Base Land Colors */}
                <linearGradient id="gmapLand" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f4f3f0" />
                  <stop offset="100%" stopColor="#ebe9e4" />
                </linearGradient>

                {/* Google Maps Soft Greenery (Parks) */}
                <linearGradient id="gmapPark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#cbe6a3" />
                  <stop offset="100%" stopColor="#c3e298" />
                </linearGradient>

                {/* Google Maps Soft Water Blue */}
                <linearGradient id="gmapWater" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#aad3df" />
                  <stop offset="100%" stopColor="#9fcfe0" />
                </linearGradient>

                {/* Static Pin Shadow */}
                <filter id="pinShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.28" />
                </filter>
              </defs>

              {/* 1. Base Ground (Clean Light Google Maps Canvas) */}
              <rect width="600" height="300" fill="url(#gmapLand)" />

              {/* 2. Indira Park & Public Green Space on Top Right */}
              <path
                d="M 410,0 L 600,0 L 600,140 C 530,120 470,90 410,0 Z"
                fill="url(#gmapPark)"
              />
              <text x="490" y="55" fill="#5b7f36" fontSize="11" fontWeight="600" opacity="0.9">
                Indira Park
              </text>

              {/* 3. Water Canal on Bottom Right */}
              <path
                d="M 360,300 C 400,260 480,240 550,250 C 580,255 595,262 600,265 L 600,300 Z"
                fill="url(#gmapWater)"
              />

              {/* 4. City Building Parcels (Subtle Clean Google Grey) */}
              <g fill="#e3e1dc" opacity="0.8">
                <rect x="25" y="15" width="75" height="48" rx="2" />
                <rect x="115" y="15" width="90" height="52" rx="2" />
                <rect x="220" y="15" width="115" height="44" rx="2" />
                <rect x="20" y="80" width="58" height="70" rx="2" />
                <rect x="90" y="80" width="78" height="78" rx="2" />
                <rect x="16" y="170" width="82" height="62" rx="2" />
                <rect x="110" y="180" width="68" height="80" rx="2" />
                <rect x="430" y="145" width="140" height="95" rx="2" />
              </g>

              {/* 5. Secondary Connecting Local Streets (Clean White with Grey Borders) */}
              {/* Casing (grey border) */}
              <g stroke="#d5d3ce" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 85,0 L 85,300" />
                <path d="M 180,0 L 180,180" />
                <path d="M 340,0 L 340,120" />
                <path d="M 0,72 L 320,72" />
                <path d="M 0,165 L 185,165" />
                <path d="M 0,255 L 340,255" />
              </g>
              {/* Core (pure white surface) */}
              <g stroke="#ffffff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 85,0 L 85,300" />
                <path d="M 180,0 L 180,180" />
                <path d="M 340,0 L 340,120" />
                <path d="M 0,72 L 320,72" />
                <path d="M 0,165 L 185,165" />
                <path d="M 0,255 L 340,255" />
              </g>

              {/* 6. Main Arterial Highway: Gandhi Nagar Road (Google Warm Yellow/Orange Accent) */}
              {/* Arterial Road Casing */}
              <path
                d="M 0,230 L 180,190 L 310,150 L 460,110 L 600,70"
                stroke="#ebd49d"
                strokeWidth="19"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Arterial Road Core: Classic Google Maps Creamy Yellow */}
              <path
                d="M 0,230 L 180,190 L 310,150 L 460,110 L 600,70"
                stroke="#fce8b2"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Street Name Label with White Halo */}
              <text
                x="170"
                y="168"
                fill="#5f6368"
                fontSize="11"
                fontWeight="600"
                letterSpacing="0.03em"
                transform="rotate(-15 170 168)"
              >
                Gandhi Nagar Rd, Ashok Nagar
              </text>

              {/* 7. Landmark 1: Ashok Nagar X Roads (Google Transit POI) */}
              <g transform="translate(85, 102)">
                <circle cx="12" cy="12" r="10" fill="#1a73e8" />
                {/* Crossroads icon */}
                <path
                  d="M 12,7 L 12,17 M 7,12 L 17,12"
                  stroke="#ffffff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <text x="27" y="16" fill="#3c4043" fontSize="10.5" fontWeight="600">
                  Ashok Nagar X Roads
                </text>
              </g>

              {/* 8. Landmark 2: City Central Library (Google Civic/Education POI) */}
              <g transform="translate(125, 235)">
                <circle cx="12" cy="12" r="10" fill="#188038" />
                {/* Book icon */}
                <path
                  d="M 7,9 Q 12,11 17,9 L 17,16 Q 12,14 7,16 Z"
                  fill="#ffffff"
                />
                <text x="27" y="16" fill="#3c4043" fontSize="10.5" fontWeight="600">
                  Central Library
                </text>
              </g>

              {/* 9. Iconic Google Red Teardrop Marker Pin (100% STATIC, NO MOVING RADAR) */}
              <g transform="translate(305, 155)" filter="url(#pinShadow)">
                {/* Pin base shadow oval */}
                <ellipse cx="0" cy="2" rx="4" ry="2" fill="#000000" opacity="0.3" />

                {/* Google Teardrop Pin */}
                <path
                  d="M 0,-30 C -9,-30 -16,-23 -16,-14 C -16,-3 -4,7 0,14 C 4,7 16,-3 16,-14 C 16,-23 9,-30 0,-30 Z"
                  fill="#ea4335"
                  stroke="#c5221f"
                  strokeWidth="0.8"
                />
                {/* Google Pin White Dot */}
                <circle cx="0" cy="-15" r="5" fill="#ffffff" />
                <circle cx="0" cy="-15" r="2.5" fill="#b31412" />
              </g>
            </svg>
          </div>

          {/* Google Maps Clean Controls (Top Right: Recenter, Zoom +/-) */}
          <div className="gmap-clean-controls" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="gmap-ctrl-btn"
              onClick={handleReset}
              title="Recenter Map"
              aria-label="Recenter Map"
            >
              <Compass size={15} />
            </button>
            <div className="gmap-ctrl-divider" />
            <button
              type="button"
              className="gmap-ctrl-btn"
              onClick={handleZoomIn}
              title="Zoom In"
              aria-label="Zoom In"
            >
              <Plus size={15} />
            </button>
            <div className="gmap-ctrl-divider" />
            <button
              type="button"
              className="gmap-ctrl-btn"
              onClick={handleZoomOut}
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <Minus size={15} />
            </button>
          </div>

          {/* Google Watermark Bottom Left */}
          <div className="gmap-watermark" aria-hidden="true">
            <span className="g-blue">G</span>
            <span className="g-red">o</span>
            <span className="g-yellow">o</span>
            <span className="g-blue">g</span>
            <span className="g-green">l</span>
            <span className="g-red">e</span>
          </div>
        </div>
      </a>
    </div>
  );
}
