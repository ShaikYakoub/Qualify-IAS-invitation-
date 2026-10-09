'use client';

import React from 'react';
import Image from 'next/image';
import QualifyIasLogo from '@/components/QualifyIasLogo';
import CountdownTimer from '@/components/CountdownTimer';
import MapCard from '@/components/MapCard';
import ActionToolbar from '@/components/ActionToolbar';
import BottomDirectionBar from '@/components/BottomDirectionBar';
import DesktopVenueQr from '@/components/DesktopVenueQr';
import { IosCalendarIcon } from '@/components/AppBrandIcons';

// Exact Venue Navigation in Ashok Nagar, Hyderabad
const HYDERABAD_VENUE_MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=Building+No.+1-1-726%2F1%2C+Gandhi+Nagar+Road%2C+Ashok+Nagar%2C+Hyderabad%2C+Telangana+500080';

export default function InvitationPage() {
  return (
    <div className="invite-wrapper qualify-theme">
      {/* Desktop QR Code Floating Companion (Scannable from phone camera on desktop) */}
      <DesktopVenueQr hyderabadUrl={HYDERABAD_VENUE_MAPS_URL} />

      {/* Main Single-Page Invitation Card */}
      <main className="invite-card layout-modern-reference">
        {/* 1. Hero Section with Office Glass Doors & Red Ribbon Bow Blend */}
        <section className="hero-split-banner">
          <div className="hero-content-col">
            {/* Brand Logo Header at Top Left */}
            <div className="hero-logo-wrap">
              <QualifyIasLogo />
            </div>

            {/* Main Headline */}
            <h1 className="hero-main-title">
              Office<br />
              Inauguration
            </h1>

            {/* Red Accent Dash */}
            <div className="hero-red-dash" aria-hidden="true" />

            {/* Invitation Description Copy */}
            <p className="hero-description">
              We are delighted to invite you to the inauguration of our new office. Your gracious
              presence will make this occasion truly special.
            </p>
          </div>
        </section>

        {/* Inner Content Wrapper */}
        <div className="qualify-inner-content">
          {/* 2. Unified Floating Event Card (Countdown + Date in single card) */}
          <section className="unified-event-card" aria-label="Event Countdown and Schedule">
            {/* Top Half: Live Countdown */}
            <CountdownTimer />

            {/* Subtle Divider Line */}
            <div className="unified-card-divider" aria-hidden="true" />

            {/* Bottom Half: Date & Time */}
            <div className="unified-schedule-single">
              <div className="unified-schedule-icon-wrap" aria-hidden="true">
                <IosCalendarIcon size={36} />
              </div>
              <div className="unified-schedule-info">
                <h4 className="unified-schedule-day">Friday, 16th October 2026</h4>
                <p className="unified-schedule-time">11:00 AM Onwards</p>
              </div>
            </div>
          </section>

          {/* 3. Action Toolbar (Add to Calendar, Share Invite, Celebrate) */}
          <ActionToolbar />

          {/* 4. People Section: Chief Guest & Founder (Side by Side Equal Columns) */}
          <section className="people-section-wrap" aria-label="Chief Guest and Founder">
            <div className="people-grid-row">
              {/* Column 1: Chief Guest */}
              <div className="person-col">
                <span className="person-badge">CHIEF GUEST</span>
                <div className="person-red-dash" aria-hidden="true" />

                <div className="person-avatar-wrap">
                  <Image
                    src="/ias_officer.jpg"
                    alt="Jeenu Jaswanth Chandra - AIR 23, UPSC CSE 2025"
                    width={96}
                    height={96}
                    className="person-avatar-img"
                    priority
                  />
                </div>

                <h3 className="person-name">Jeenu Jaswanth Chandra</h3>
                <p className="person-rank">AIR 23, UPSC CSE 2025</p>
                <p className="person-sub">(IPS, CSE 2023 | IRMS, CSE 2022)</p>
              </div>

              {/* Column 2: Founder */}
              <div className="person-col">
                <span className="person-badge">FOUNDER</span>
                <div className="person-red-dash" aria-hidden="true" />

                <div className="person-avatar-wrap">
                  <Image
                    src="/founder.jpg"
                    alt="Ramareddipeta Rajinikanth - AIR 587, CSE 2023"
                    width={96}
                    height={96}
                    className="person-avatar-img"
                    priority
                  />
                </div>

                <h3 className="person-name">Ramareddipeta Rajinikanth</h3>
                <p className="person-rank">AIR 587, CSE 2023</p>
                <p className="person-sub">Founder & Mentor, QUALIFY IAS</p>
              </div>
            </div>
          </section>

          {/* 5. Map Section (Clean Rounded Card with Google Map) */}
          <section className="map-card-wrapper-box" aria-label="Interactive Venue Location Map">
            <MapCard hyderabadUrl={HYDERABAD_VENUE_MAPS_URL} />
          </section>

          {/* 6. Closing Blessing & Red Dash */}
          <section className="closing-section" aria-label="Closing Blessing">
            <div className="closing-red-dash" aria-hidden="true" />
            <p className="closing-blessing">
              We look forward to your esteemed presence and blessings.
            </p>
          </section>
        </div>
      </main>

      {/* 7. Docked Floating "Get Directions" Button */}
      <BottomDirectionBar hyderabadUrl={HYDERABAD_VENUE_MAPS_URL} />
    </div>
  );
}
