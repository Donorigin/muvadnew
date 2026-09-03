"use client";

import React, { useState } from "react";
import styles from "./HeroSection.module.css";

// =========================================================================
// CUSTOM IMAGE PATH CONFIGURATION:
// Leave your images in the `public/images/` directory with these filenames,
// or change these paths to point to any image file of your choice.
// =========================================================================
export const HERO_BG_IMAGE = "/images/next.jpg";
export const TESTIMONIAL_AVATAR_IMAGE = "/images/testimonial-avatar.jpg";

export default function HeroSection() {
  const [avatarError, setAvatarError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    serviceType: "take-offs",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert("Please enter your name and email address.");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <>
      {/* ----------------------------------------------------------------------
          1. MAIN HERO WRAPPER & BACKGROUND
          ---------------------------------------------------------------------- */}
      <section
        className={styles.heroWrapper}
        style={{
          backgroundImage: `url('${HERO_BG_IMAGE}')`,
        }}
      >
        <div className={styles.heroOverlay} />

        {/* Hero Content Area */}
        <div className={styles.heroMain}>
          <div className={styles.heroContentGrid}>
            {/* Left Column: Badge, H1, Subheading, Ratings */}
            <div className={styles.heroLeft}>
              {/* Badge Pill */}
              <div className={styles.heroBadge}>
                <span className={styles.badgeDot}></span>
                <span>NO-COST ESTIMATING • 100% RISK-FREE</span>
              </div>

              {/* Main Headline */}
              <h1 className={styles.heroTitle}>
                Win More Contracts <br className={styles.desktopBr} />
                With <span className={styles.highlightOrange}>NO-COST</span> Estimating
              </h1>

              {/* Sub-Copy */}
              <p className={styles.heroDescription}>
                We help subcontractors win profitable projects with expert take-offs, estimating &amp; proposals — at zero upfront cost.
              </p>

              {/* CTA Buttons Row */}
              <div className={styles.heroCtas}>
                <a href="#contact-form" className={styles.heroPrimaryBtn}>
                  <span>Book a Discovery Call</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <span className={styles.heroTrust}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Pay only when you get paid — zero risk
                </span>
              </div>
            </div>

            {/* Right Column: Frosted Glass Testimonial Card */}
            <div className={styles.heroRight}>
              {/* Desktop 3-dot pagination */}
              <div className={styles.paginationDots} aria-hidden="true">
                <span className={styles.dotActive}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>

              {/* Frosted Glass Testimonial Card */}
              <div className={styles.testimonialCard}>
                <div className={styles.avatarContainer}>
                  {!avatarError ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={TESTIMONIAL_AVATAR_IMAGE}
                      alt="David M."
                      className={styles.avatarImage}
                      onError={() => setAvatarError(true)}
                    />
                  ) : (
                    <span className={styles.avatarFallback}>DM</span>
                  )}
                </div>
                <div className={styles.testimonialText}>
                  <p className={styles.testimonialQuote}>
                    &ldquo;Providing accurate take-offs &amp; winning bids with trust &amp; care since 2020&rdquo;
                  </p>
                  <h4 className={styles.testimonialAuthor}>David M.</h4>
                  <span className={styles.testimonialRole}>Managing Director, Muvad Consults</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          2. FLOATING DISCOVERY CALL FORM BAR
          ---------------------------------------------------------------------- */}
      <section id="contact-form" className={styles.bottomFormSection}>
        <div className={styles.floatingFormCard}>
          {formSubmitted ? (
            <div className={styles.submitSuccess}>
              <div>
                <strong>Thank you! Your Discovery Call request has been received.</strong>
                <p style={{ fontSize: "0.88rem", marginTop: "4px", color: "#15803d" }}>
                  An estimating strategist from Muvad Consults will connect with you within 2 business hours.
                </p>
              </div>
              <button
                className={styles.submitSuccessBtn}
                onClick={() => setFormSubmitted(false)}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.formGrid}>
              {/* Full Name */}
              <div className={styles.inputGroup}>
                <span className={styles.inputIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              </div>

              {/* Email Address */}
              <div className={styles.inputGroup}>
                <span className={styles.inputIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              </div>

              {/* Type of Service */}
              <div className={styles.inputGroup}>
                <span className={styles.inputIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </span>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className={styles.formSelect}
                  aria-label="Type of service"
                >
                  <option value="take-offs">Take-Offs &amp; Estimating</option>
                  <option value="proposals">Full Proposal Preparation</option>
                  <option value="bidding">GC Bidding &amp; Follow-up</option>
                  <option value="all-in-one">Complete All-in-One Package</option>
                </select>
              </div>

              {/* Message */}
              <div className={styles.inputGroup}>
                <span className={styles.inputIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="message"
                  placeholder="Project details / message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              </div>

              {/* Submit CTA Button */}
              <button type="submit" className={styles.submitBtn}>
                <span>Book a Discovery Call</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
