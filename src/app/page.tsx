'use client';

import React from 'react';
import Image from 'next/image';
import QualifyIasLogo from '@/components/QualifyIasLogo';
import CountdownTimer from '@/components/CountdownTimer';
import MapCard from '@/components/MapCard';
import ActionToolbar from '@/components/ActionToolbar';
import BottomDirectionBar from '@/components/BottomDirectionBar';
import DesktopVenueQr from '@/components/DesktopVenueQr';
import { IosCalendarIcon, GoogleMapsOfficialIcon } from '@/components/AppBrandIcons';
import {
  GoldenScissorsRibbon,
  FiligreeFlourish,
  GoldenLaurelWreath,
  ChiefGuestRibbonBanner,
  BottomCeremonialWave,
} from '@/components/CeremonialAccents';

// Exact Venue Navigation in Ashok Nagar, Hyderabad
const HYDERABAD_VENUE_MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=Building+No.+1-1-726%2F1%2C+Gandhi+Nagar+Road%2C+Ashok+Nagar%2C+Hyderabad%2C+Telangana+500080';

export default function InvitationPage() {
  return (
    <div className="invite-wrapper qualify-theme">
      {/* Desktop QR Code Floating Card for Mobile Venue Scanning */}
      <DesktopVenueQr hyderabadUrl={HYDERABAD_VENUE_MAPS_URL} />

      {/* Decorative Golden Scissors & Ribbon cutting ceremony on top-left */}
      <GoldenScissorsRibbon className="scissors-corner-decor" />

      {/* Top right confetti floaters */}
      <div className="confetti-top-right" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="25" r="3" fill="#dc2626" />
          <rect x="50" y="20" width="7" height="4" rx="1" fill="#b91c1c" transform="rotate(30 50 20)" />
          <rect x="80" y="45" width="5" height="5" rx="1" fill="#eab308" transform="rotate(-20 80 45)" />
          <path d="M 60,60 C 65,55 75,58 80,50" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Main Single-Page Invitation (Full Width) */}
      <main className="invite-card qualify-card">
        {/* Centered Content Wrap */}
        <div className="qualify-inner-content">
          {/* Brand Header */}
          <header className="qualify-header">
            <QualifyIasLogo />
          </header>

          {/* Motto / Tagline */}
          <div className="qualify-motto-wrap">
            <p className="qualify-motto">Discipline, Consistency and Right Direction.</p>
          </div>

          {/* Main Headline */}
          <section className="qualify-headline-section">
            <h1 className="qualify-main-title">
              <span className="title-red">INAUGURATION OF OUR</span>
              <span className="title-black">OFFLINE CENTRE</span>
            </h1>

            {/* Golden Filigree Flourish (~ ಌ ~) */}
            <FiligreeFlourish className="headline-filigree" />

            {/* Invitation Paragraph Text */}
            <p className="qualify-description">
              We are delighted to invite you to the inauguration of the First Offline Centre,
              a space dedicated to providing Civil Services aspirants with foundational coaching,
              quality materials, expert guidance, mentorship and the right direction.
            </p>
          </section>

          {/* Live Countdown Timer */}
          <section className="qualify-countdown-card" aria-label="Event Countdown">
            <CountdownTimer />
          </section>

          {/* Action Toolbar: Add to Calendar, Share & Confetti */}
          <ActionToolbar />

          {/* Chief Guest Section (Golden Laurel Wreath & Red Swallowtail Banner) */}
          <section className="chief-guest-section" aria-label="Chief Guest Details">
            <div className="chief-guest-card">
              {/* Left: Golden Laurel Wreath Circular Avatar */}
              <div className="chief-guest-avatar-col">
                <GoldenLaurelWreath>
                  <Image
                    src="/ias_officer.jpg"
                    alt="Jeenu Jaswanth Chandra - AIR 23, UPSC CSE 2025"
                    width={96}
                    height={96}
                    className="chief-guest-photo"
                    priority
                  />
                </GoldenLaurelWreath>
              </div>

              {/* Right: Ribbon Banner, Name & Credentials */}
              <div className="chief-guest-info-col">
                <ChiefGuestRibbonBanner label="CHIEF GUEST" />
                <div className="guest-mini-filigree" aria-hidden="true">
                  <svg viewBox="0 0 60 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0,4 Q 15,1 30,4 T 60,4" stroke="#c5a059" strokeWidth="1" />
                    <circle cx="30" cy="4" r="1.5" fill="#c5a059" />
                  </svg>
                </div>

                <h2 className="chief-guest-name">Jeenu Jaswanth Chandra</h2>
                <p className="chief-guest-rank">AIR 23, UPSC CSE 2025</p>
                <p className="chief-guest-service">(IPS, CSE 2023 | IRMS, CSE 2022)</p>
              </div>
            </div>
          </section>

          {/* Event Schedule (Date on Left, Venue on Right) */}
          <section className="event-schedule-grid" aria-label="Date and Venue Details">
            {/* Left Card: Red Date & Time Block */}
            <div className="schedule-card-red">
              <div className="schedule-card-inner">
                <div className="schedule-icon-wrap" aria-hidden="true">
                  <IosCalendarIcon size={38} />
                </div>
                <div className="schedule-date-content">
                  <p className="schedule-date-line">16<sup>th</sup> October 2026 | Friday</p>
                  <div className="schedule-line-divider" aria-hidden="true" />
                  <p className="schedule-time-line">11:00 AM onwards</p>
                </div>
              </div>
            </div>

            {/* Right Card: Venue Block */}
            <div className="schedule-card-venue">
              <div className="venue-header-row">
                <span className="venue-heading-text">VENUE</span>
              </div>
              <div className="venue-body-row">
                <div className="venue-icon-box" aria-hidden="true">
                  <GoogleMapsOfficialIcon size={38} />
                </div>
                <div className="venue-address-box">
                  <p className="venue-address-bold">First Floor, Building No. 1-1-726/1</p>
                  <p className="venue-address-sub">Gandhi Nagar Road, Ashok Nagar</p>
                  <p className="venue-city">Hyderabad – 500080</p>
                  <a
                    href={HYDERABAD_VENUE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="venue-map-link"
                  >
                    Location: Available on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Founder & Mentor Section */}
          <section className="founder-mentor-section" aria-label="Founder and Mentor Details">
            <div className="founder-card">
              {/* Left: Avatar with golden laurel sprigs */}
              <div className="founder-avatar-wrap">
                <div className="founder-avatar-circle">
                  <Image
                    src="/founder.jpg"
                    alt="Ramareddipeta Rajinikanth - AIR 587, CSE 2023"
                    width={84}
                    height={84}
                    className="founder-photo"
                    priority
                  />
                </div>
                {/* Golden Leaf Sprig Decoration on Right */}
                <div className="founder-leaves-decor" aria-hidden="true">
                  <svg viewBox="0 0 40 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 5,65 Q 20,40 25,5" stroke="#c5a059" strokeWidth="1.5" />
                    <path d="M 12,50 C 22,46 26,54 20,58 Z" fill="#d4af37" />
                    <path d="M 18,34 C 28,30 32,38 26,42 Z" fill="#d4af37" />
                    <path d="M 22,18 C 32,14 36,22 30,26 Z" fill="#d4af37" />
                    <path d="M 25,5 C 32,0 36,8 30,11 Z" fill="#d4af37" />
                  </svg>
                </div>
              </div>

              {/* Right: Credentials */}
              <div className="founder-info-col">
                <h3 className="founder-name">Ramareddipeta Rajinikanth</h3>
                <p className="founder-rank">AIR 587, CSE 2023</p>
                <p className="founder-role">Founder and Mentor, QUALIFY IAS</p>
              </div>
            </div>
          </section>
        </div>

        {/* FULL WIDTH Location Map (Edge to Edge Google Map) */}
        <section className="map-section map-full-width" aria-label="Location Map">
          <MapCard hyderabadUrl={HYDERABAD_VENUE_MAPS_URL} />
        </section>

        {/* Footer Blessing Note */}
        <div className="qualify-inner-content">
          <footer className="qualify-footer">
            <p className="footer-blessing-text">
              We look forward to your gracious presence and support on this special occasion.
            </p>
          </footer>
        </div>

        {/* Bottom Curved Ceremonial Ribbon Wave */}
        <BottomCeremonialWave />
      </main>

      {/* Floating Bottom Navigation Bar (Docked absolute/fixed at the bottom) */}
      <BottomDirectionBar hyderabadUrl={HYDERABAD_VENUE_MAPS_URL} />
    </div>
  );
}
