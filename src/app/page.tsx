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
import { Plus } from 'lucide-react';

// Exact Venue Navigation in Ashok Nagar, Hyderabad
const HYDERABAD_VENUE_MAPS_URL = 'https://maps.app.goo.gl/AfyE5D9MTXi42DQW6';

const GOOGLE_CALENDAR_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=QUALIFY+IAS+Offline+Centre+Inauguration&dates=20261016T053000Z/20261016T093000Z&details=Inauguration+of+the+First+Offline+Centre+of+QUALIFY+IAS.+Chief+Guest:+Jeenu+Jaswanth+Chandra+(AIR+23,+UPSC+CSE+2025).+Founder:+Ramareddipeta+Rajinikanth.&location=QUALIFY+IAS,+Building+No.+1-1-726/1,+Gandhi+Nagar+Road,+Ashok+Nagar,+Hyderabad+-+500080';

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
              OFFICE<br />
              INAUGURATION
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

            {/* Bottom Half: Date & Time (Clickable Container to Add to Google Calendar) */}
            <a
              href={GOOGLE_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="unified-schedule-single clickable-schedule-link"
              title="Add to Google Calendar"
            >
              <div className="unified-schedule-left">
                <div className="unified-schedule-icon-wrap" aria-hidden="true">
                  <IosCalendarIcon size={50} />
                </div>
                <div className="unified-schedule-info">
                  <h4 className="unified-schedule-day">16th October (Friday), 2026</h4>
                  <p className="unified-schedule-time">11:00 AM Onwards</p>
                </div>
              </div>

              {/* Right Side Plus Action Icon */}
              <div className="unified-schedule-plus-btn" aria-hidden="true" title="Add to Calendar">
                <Plus size={18} strokeWidth={2.5} />
              </div>
            </a>
          </section>

          {/* 3. Action Toolbar (Add to Calendar, Share Invite, Celebrate) */}
          <ActionToolbar />

          {/* 4. People Section: Chief Guest & Founder (Side by Side Equal Columns) */}
          <section className="people-section-wrap" aria-label="Chief Guest and Founder">
            <div className="people-grid-row">
              {/* Column 1: Chief Guest */}
              <div className="person-col">
                <div className="person-ribbon-wrap">
                  <Image
                    src="/chief_guest_ribbon.png?v=3"
                    alt="Chief Guest"
                    width={140}
                    height={23}
                    className="person-ribbon-img"
                    priority
                  />
                </div>

                <div className="person-avatar-wrap">
                  <Image
                    src="/ias_officer.jpg?v=2"
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
                <div className="person-ribbon-wrap">
                  <Image
                    src="/founder_ribbon.png?v=3"
                    alt="Founder"
                    width={140}
                    height={23}
                    className="person-ribbon-img"
                    priority
                  />
                </div>

                <div className="person-avatar-wrap">
                  <Image
                    src="/founder.jpg?v=2"
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

          {/* 6. Venue Address Section */}
          <section className="closing-section" aria-label="Venue Address">
            <div className="closing-red-dash" aria-hidden="true" />
            <div className="venue-address-block">
              <h4 className="venue-address-title">QUALIFY IAS Office</h4>
              <p className="venue-address-text">
                1st Floor, Bldg No. 1-1-726/1, Gandhi Nagar Rd,<br />
                Ashok Nagar, Hyderabad – 500080
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* 7. Docked Floating "Get Directions" Button */}
      <BottomDirectionBar hyderabadUrl={HYDERABAD_VENUE_MAPS_URL} />
    </div>
  );
}
