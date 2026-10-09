'use client';

import React from 'react';

// 1. Authentic Original Calendar Icon (Red Header with FRI & 16 Date Numeral)
export function IosCalendarIcon({ size = 38, className = '' }: { size?: number; className?: string }) {
  return (
    <div
      className={`ios-calendar-icon-wrap ${className}`}
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      <img
        src="/calendar_original_icon.png"
        alt="Friday, 16th October 2026"
        width={size}
        height={size}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
}

// 2. Official Google Maps Icon (Authentic 4-Color Google Pin with App Tile)
export function GoogleMapsOfficialIcon({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <div
      className={`google-maps-icon-wrap ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="google-maps-svg"
      >
        <defs>
          <filter id="gmapTileDropShadow" x="-15%" y="-10%" width="130%" height="135%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.22" />
          </filter>
        </defs>

        {/* White squircle app tile base matching iOS Calendar aesthetic */}
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="7"
          fill="#FFFFFF"
          stroke="#E5E7EB"
          strokeWidth="1.2"
          filter="url(#gmapTileDropShadow)"
        />

        {/* Official 4-Color Google Maps Pin Paths */}
        <g transform="translate(0, 0)">
          {/* Base green pin body and circular cutout */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 12.8116L23.9999 12.8541C23.9998 12.872 23.9996 12.8899 23.9994 12.9078C23.9998 12.9287 24 12.9498 24 12.971C24 16.3073 21.4007 19.2604 19.6614 21.2367C19.1567 21.8101 18.7244 22.3013 18.449 22.6957C17.4694 24.0986 16.9524 25.6184 16.8163 26.2029C16.8163 26.6431 16.4509 27 16 27C15.5491 27 15.1837 26.6431 15.1837 26.2029C15.0476 25.6184 14.5306 24.0986 13.551 22.6957C13.2756 22.3013 12.8433 21.8101 12.3386 21.2367C10.5993 19.2604 8 16.3073 8 12.971C8 12.9498 8.0002 12.9287 8.0006 12.9078C8.0002 12.8758 8 12.8437 8 12.8116C8 8.49736 11.5817 5 16 5C20.4183 5 24 8.49736 24 12.8116ZM16 15.6812C17.7132 15.6812 19.102 14.325 19.102 12.6522C19.102 10.9793 17.7132 9.62319 16 9.62319C14.2868 9.62319 12.898 10.9793 12.898 12.6522C12.898 14.325 14.2868 15.6812 16 15.6812Z"
            fill="#34A853"
          />

          {/* Blue segment (upper right) */}
          <path
            d="M23.1054 9.21856C22.1258 7.37546 20.4161 5.96177 18.3504 5.34277L13.7559 10.5615C14.3208 9.98352 15.1174 9.62346 16.0002 9.62346C17.7134 9.62346 19.1022 10.9796 19.1022 12.6524C19.1022 13.3349 18.8711 13.9646 18.4811 14.4711L23.1054 9.21856Z"
            fill="#4285F4"
          />

          {/* Yellow segment (lower left) */}
          <path
            d="M12.4311 21.3425C12.4004 21.3076 12.3695 21.2725 12.3383 21.2371C11.1918 19.9344 9.67162 18.2073 8.76855 16.2257L13.5439 10.8018C13.1387 11.3136 12.8976 11.9556 12.8976 12.6526C12.8976 14.3254 14.2865 15.6816 15.9997 15.6816C16.8675 15.6816 17.6521 15.3336 18.2151 14.7727L12.4311 21.3425Z"
            fill="#FBBC04"
          />

          {/* Red segment (upper left) */}
          <path
            d="M9.89288 7.76562C8.71207 9.12685 8 10.8881 8 12.8117C8 12.8438 8.0002 12.8759 8.0006 12.9079C8.0002 12.9288 8 12.9499 8 12.971C8 14.1082 8.30196 15.2009 8.76889 16.2254L13.5362 10.8106L9.89288 7.76562Z"
            fill="#EA4335"
          />

          {/* Cyan / Top Arc bridge */}
          <path
            d="M18.3499 5.34254C17.6068 5.11988 16.8176 5 15.9997 5C13.5514 5 11.36 6.07387 9.89258 7.76553L13.5359 10.8105L13.5438 10.8015C13.6101 10.7178 13.6807 10.6375 13.7554 10.5611L18.3499 5.34254Z"
            fill="#1A73E8"
          />
        </g>
      </svg>
    </div>
  );
}

// 3. Standalone Google Maps Pin (Without Tile Background)
export function GoogleMapsPinTeardrop({ size = 26, className = '' }: { size?: number; className?: string }) {
  // Pin bounds: width 16 (from x=8 to 24), height 22 (from y=5 to 27) -> aspect ratio 16:22 (1:1.375)
  const height = Math.round(size * 1.375);

  return (
    <div
      className={`google-maps-pin-wrap ${className}`}
      style={{ width: size, height }}
      aria-hidden="true"
    >
      <svg
        viewBox="8 5 16 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="google-maps-pin-svg"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 12.8116L23.9999 12.8541C23.9998 12.872 23.9996 12.8899 23.9994 12.9078C23.9998 12.9287 24 12.9498 24 12.971C24 16.3073 21.4007 19.2604 19.6614 21.2367C19.1567 21.8101 18.7244 22.3013 18.449 22.6957C17.4694 24.0986 16.9524 25.6184 16.8163 26.2029C16.8163 26.6431 16.4509 27 16 27C15.5491 27 15.1837 26.6431 15.1837 26.2029C15.0476 25.6184 14.5306 24.0986 13.551 22.6957C13.2756 22.3013 12.8433 21.8101 12.3386 21.2367C10.5993 19.2604 8 16.3073 8 12.971C8 12.9498 8.0002 12.9287 8.0006 12.9078C8.0002 12.8758 8 12.8437 8 12.8116C8 8.49736 11.5817 5 16 5C20.4183 5 24 8.49736 24 12.8116ZM16 15.6812C17.7132 15.6812 19.102 14.325 19.102 12.6522C19.102 10.9793 17.7132 9.62319 16 9.62319C14.2868 9.62319 12.898 10.9793 12.898 12.6522C12.898 14.325 14.2868 15.6812 16 15.6812Z"
          fill="#34A853"
        />
        <path
          d="M23.1054 9.21856C22.1258 7.37546 20.4161 5.96177 18.3504 5.34277L13.7559 10.5615C14.3208 9.98352 15.1174 9.62346 16.0002 9.62346C17.7134 9.62346 19.1022 10.9796 19.1022 12.6524C19.1022 13.3349 18.8711 13.9646 18.4811 14.4711L23.1054 9.21856Z"
          fill="#4285F4"
        />
        <path
          d="M12.4311 21.3425C12.4004 21.3076 12.3695 21.2725 12.3383 21.2371C11.1918 19.9344 9.67162 18.2073 8.76855 16.2257L13.5439 10.8018C13.1387 11.3136 12.8976 11.9556 12.8976 12.6526C12.8976 14.3254 14.2865 15.6816 15.9997 15.6816C16.8675 15.6816 17.6521 15.3336 18.2151 14.7727L12.4311 21.3425Z"
          fill="#FBBC04"
        />
        <path
          d="M9.89288 7.76562C8.71207 9.12685 8 10.8881 8 12.8117C8 12.8438 8.0002 12.8759 8.0006 12.9079C8.0002 12.9288 8 12.9499 8 12.971C8 14.1082 8.30196 15.2009 8.76889 16.2254L13.5362 10.8106L9.89288 7.76562Z"
          fill="#EA4335"
        />
        <path
          d="M18.3499 5.34254C17.6068 5.11988 16.8176 5 15.9997 5C13.5514 5 11.36 6.07387 9.89258 7.76553L13.5359 10.8105L13.5438 10.8015C13.6101 10.7178 13.6807 10.6375 13.7554 10.5611L18.3499 5.34254Z"
          fill="#1A73E8"
        />
      </svg>
    </div>
  );
}
