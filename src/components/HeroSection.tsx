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
                Win More Contracts<br className={styles.desktopBr} />
                With <span className={styles.highlightOrange}>NO-COST</span> Estimating
              </h1>

              {/* Sub-Copy */}
              <p className={styles.heroDescription}>
                We help subcontractors win profitable projects with expert take-offs, estimating &amp; proposals — at zero upfront cost.
              </p>

              {/* Social Proof Badges (Google + Facebook/Verified ratings) */}
              <div className={styles.ratingsRow}>
                {/* Google Rating */}
                <div className={styles.ratingCard}>
                  <div className={styles.ratingIconCircle}>
                    <svg width="22" height="22" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                  </div>
                  <div className={styles.ratingDetails}>
                    <div className={styles.starsAndScore}>
                      <div className={styles.stars}>★★★★★</div>
                      <span className={styles.scoreNumber}>4.9</span>
                    </div>
                    <span className={styles.reviewCount}>2k+ Reviews</span>
                  </div>
                </div>

                <div className={styles.ratingsDivider} />

                {/* Facebook / Verified Rating */}
                <div className={styles.ratingCard}>
                  <div className={styles.ratingIconCircle}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div className={styles.ratingDetails}>
                    <div className={styles.starsAndScore}>
                      <div className={styles.stars}>★★★★★</div>
                      <span className={styles.scoreNumber}>5.0</span>
                    </div>
                    <span className={styles.reviewCount}>1.2k+ Reviews</span>
                  </div>
                </div>
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
