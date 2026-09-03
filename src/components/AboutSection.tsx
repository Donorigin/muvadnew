"use client";

import React, { useState } from "react";
import styles from "./AboutSection.module.css";

// =========================================================================
// CUSTOM IMAGE PATH CONFIGURATION:
// Leave your team/about image in `public/images/` or adjust the path below.
// =========================================================================
export const ABOUT_IMAGE = "/images/next.jpg";

export default function AboutSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          {/* ------------------------------------------------------------------
              Top Grid: Two Columns on Desktop, Stacked on Mobile
              ------------------------------------------------------------------ */}
          <div className={styles.topGrid}>
            {/* Left Column: Badge & Main Headline */}
            <div className={styles.leftCol}>
              {/* Badge: • ABOUT US */}
              <div className={styles.aboutBadge}>
                <span className={styles.badgeDot}></span>
                <span>About Us</span>
              </div>

              {/* Main Headline */}
              <h2 className={styles.aboutTitle}>
                <span className={styles.highlightBlue}>Your Partner</span> in{" "}
                Subcontracting Success
              </h2>
            </div>

            {/* Right Column: Lead Statement, Body Copy & Action Buttons */}
            <div className={styles.rightCol}>
              {/* Lead Paragraph */}
              <p className={styles.leadText}>
                Muvad Consults is dedicated to making your journey as a
                subcontractor smoother, more efficient, and more successful. Our
                team of experienced Quantity Surveyors and outbound sales experts
                craft tailored solutions that ensure your success.
              </p>

              {/* Body Paragraph */}
              <p className={styles.bodyText}>
                What sets us apart? We take the risk with you. With our
                no-upfront-cost model, you only pay us when you get paid. This
                unique approach aligns our interests perfectly with yours.
              </p>

              {/* Action Buttons Row */}
              <div className={styles.actionsRow}>
                {/* Primary CTA: More About Us */}
                <a href="#contact-form" className={styles.primaryCta}>
                  <span>More About Us</span>
                  <div className={styles.ctaArrowCircle}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </a>

                {/* Secondary CTA: Watch Video */}
                <button
                  type="button"
                  className={styles.watchVideoBtn}
                  onClick={() => setVideoModalOpen(true)}
                  aria-label="Watch video about Muvad Consults"
                >
                  <div className={styles.playCircle}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <span>Watch Video</span>
                </button>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------
              Bottom Row: Large Rounded Image Container
              ------------------------------------------------------------------ */}
          <div className={styles.imageWrapper}>
            {!imageError ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={ABOUT_IMAGE}
                alt="Muvad Consults Team - Quantity Surveyors and Estimators"
                className={styles.aboutImage}
                onError={() => setImageError(true)}
              />
            ) : (
              <div
                style={{
                  height: "440px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, #0b1a30 0%, #0052cc 100%)",
                  color: "#ffffff",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                }}
              >
                Place your team image at public/images/next.jpg
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          Video Modal Dialog
          ---------------------------------------------------------------------- */}
      {videoModalOpen && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>How Muvad Consults Works</h3>
              <button
                className={styles.modalCloseBtn}
                onClick={() => setVideoModalOpen(false)}
                aria-label="Close video dialog"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className={styles.modalBody}>
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  borderRadius: "12px",
                  backgroundColor: "#061121",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    textAlign: "center",
                    padding: "24px",
                    background:
                      "linear-gradient(135deg, rgba(6, 17, 33, 0.95) 0%, rgba(0, 82, 204, 0.9) 100%)",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      backgroundColor: "#ff5722",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                      boxShadow: "0 6px 20px rgba(255, 87, 34, 0.4)",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <h4
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      marginBottom: "8px",
                    }}
                  >
                    Muvad Consults Discovery Video
                  </h4>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "#cbd5e1",
                      maxWidth: "420px",
                    }}
                  >
                    Learn how our zero-upfront-cost estimating and proposal
                    system wins multi-million dollar contracts for
                    subcontractors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
