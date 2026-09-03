"use client";

import React from "react";
import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          <span>Risk-Free Partnership</span>
        </div>

        {/* Headline */}
        <h2 className={styles.title}>
          We Help Subcontractors{" "}
          <span className={styles.titleAccent}>Win More Contracts</span>
        </h2>

        {/* Body Copy */}
        <p className={styles.body}>
          We help subcontractors in trades like painting, drywall, electrical, roofing, and cleaning win more contracts. We handle the take-offs and estimating, proposal submissions to the General Contractor, and follow up from start to finish — You only pay when you get paid.
        </p>

        {/* CTA Button → leads to Contact/Form section */}
        <a href="#contact-form" className={styles.ctaBtn}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>Book a Discovery Call</span>
        </a>

      </div>
    </section>
  );
}
