'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import confetti from 'canvas-confetti';

// 1. Official Original Google Calendar Logo (with event date '16')
function GoogleCalendarLogo({ size = 20 }: { size?: number }) {
  return (
    <span
      className="action-icon-wrap"
      style={{ width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
      aria-hidden="true"
    >
      <img
        src="/gcal_official_icon.png"
        alt="Google Calendar"
        width={size}
        height={size}
        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
      />
    </span>
  );
}

// 2. Official Original Share Icon
function ImprovedShareIcon({ size = 19 }: { size?: number }) {
  return (
    <span
      className="action-icon-wrap"
      style={{ width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
      aria-hidden="true"
    >
      <img
        src="/share_official_icon.png"
        alt="Share"
        width={size}
        height={size}
        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
      />
    </span>
  );
}

// 3. Official Original Party Popper Icon (🎉)
function PartyPopperIcon({ size = 20 }: { size?: number }) {
  return (
    <span
      className="action-icon-wrap"
      style={{ width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
      aria-hidden="true"
    >
      <img
        src="/celebrate_official_icon.png"
        alt="Celebrate"
        width={size}
        height={size}
        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
      />
    </span>
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

  return (
    <div className="action-toolbar-wrap">
      <div className="action-toolbar">
        {/* 1. Improved Share Button */}
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

        {/* 2. Celebrate Button with Party Popper Icon */}
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
