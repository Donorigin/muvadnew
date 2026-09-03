"use client";

import React from "react";
import styles from "./ProcessSection.module.css";

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Project Search and Estimating",
    description:
      "We find active projects near you and prepare accurate take-offs and detailed cost estimates for ITBs you receive.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Proposal Writing",
    description:
      "Win more bids with expertly written proposals submitted on your company's letterhead.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Follow-Up",
    description:
      "We follow up regularly with the GC until we receive the award status.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "No Upfront Cost",
    description:
      "Pay only when you get paid. No upfront costs — we wait with you until the GC pays you, then you pay us.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section id="services" className={styles.processSection}>
      <div className={styles.processContainer}>
        {/* Header: Centered Badge & Title */}
        <div className={styles.headerArea}>
          <div className={styles.processBadge}>
            <span className={styles.badgeDot}></span>
            <span>Our Process</span>
          </div>
          <h2 className={styles.sectionTitle}>
            A <span className={styles.highlightBlue}>Seamless Process</span>{" "}
            Start To Finish
          </h2>
        </div>

        {/* 4 Steps Flow */}
        <div className={styles.stepsGrid}>
          {STEPS.map((step, index) => (
            <div key={step.number} className={styles.stepCard}>
              {/* Icon Circle with Number Badge */}
              <div className={styles.iconWrapper}>
                <div className={styles.stepNumberBadge}>{step.number}</div>
                <div className={styles.iconCircle}>{step.icon}</div>
              </div>

              {/* Title & Description */}
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>

              {/* Curved Dashed Connector Arrow (shown on desktop between steps) */}
              {index < STEPS.length - 1 && (
                <div className={styles.arrowContainer} aria-hidden="true">
                  <svg
                    className={styles.connectorSvg}
                    viewBox="0 0 70 30"
                    fill="none"
                  >
                    <path
                      d="M 2,16 Q 35,-4 62,14"
                      stroke="#94a3b8"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                    <polygon
                      points="66,16 57,11 60,19"
                      fill="#64748b"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
