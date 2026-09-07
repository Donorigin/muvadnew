import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Muvad Consults LLC",
  description:
    "Get in touch with Muvad Consults LLC. Book a free discovery call, get a free estimate, or ask us anything about our subcontractor estimating and proposal services.",
};

export default function ContactPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        {/* ── Page Header Banner ── */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span>Get In Touch</span>
            </div>
            <h1 className={styles.heroTitle}>
              Let&apos;s Work <span className={styles.titleAccent}>Together</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Ready to win more profitable contracts? Book a free discovery call or send us your project details — we respond within 2 business hours.
            </p>

            {/* Quick contact pills */}
            <div className={styles.quickContacts}>
              <a href="tel:+14703543663" className={styles.quickContact}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(470) 354-3663</span>
              </a>
              <a href="mailto:projects@muvadconsults.com" className={styles.quickContact}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>projects@muvadconsults.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Info Cards Row ── */}
        <section className={styles.infoCardsSection}>
          <div className={styles.infoCardsContainer}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className={styles.infoCardTitle}>Response Time</h3>
              <p className={styles.infoCardText}>We respond to all inquiries within <strong>2 business hours</strong> during business days.</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className={styles.infoCardTitle}>100% Risk-Free</h3>
              <p className={styles.infoCardText}>We only get paid when <strong>you get paid</strong>. Zero upfront cost, ever.</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className={styles.infoCardTitle}>Direct Line</h3>
              <p className={styles.infoCardText}>Call or text us directly at <strong>(470) 354-3663</strong> for urgent inquiries.</p>
            </div>
          </div>
        </section>

        {/* ── Reuse the ContactSection component ── */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
