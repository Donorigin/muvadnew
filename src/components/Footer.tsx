"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topGrid}>
          {/* Col 1: Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoArea}>
              <div className={styles.logoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <span className={styles.logoText}>
                MUVAD <span>CONSULTS</span>
              </span>
            </Link>
            <p className={styles.brandDesc}>
              Empowering subcontractors with expert take-offs, precision estimating, and winning proposals — with zero upfront cost.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/#services" className={styles.linkItem}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className={styles.linkItem}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#industries" className={styles.linkItem}>
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.linkItem}>
                  Blog &amp; Articles
                </Link>
              </li>
              <li>
                <Link href="/#discovery-call" className={styles.linkItem}>
                  Book a Discovery Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className={styles.colTitle}>Trades</h4>
            <ul className={styles.linksList}>
              <li><Link href="/#industries" className={styles.linkItem}>Painting Contractors</Link></li>
              <li><Link href="/#industries" className={styles.linkItem}>Drywall &amp; Framing</Link></li>
              <li><Link href="/#industries" className={styles.linkItem}>Electrical Estimating</Link></li>
              <li><Link href="/#industries" className={styles.linkItem}>Roofing Services</Link></li>
              <li><Link href="/#industries" className={styles.linkItem}>Concrete &amp; Masonry</Link></li>
              <li><Link href="/#industries" className={styles.linkItem}>Post-Construction Cleaning</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <div className={styles.contactInfo}>
              <a href="tel:+14703543663" className={styles.contactLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+1 (470) 354-3663</span>
              </a>
              <a href="mailto:projects@muvadconsults.com" className={styles.contactLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>projects@muvadconsults.com</span>
              </a>
              <div className={styles.contactLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Mon – Fri: 8:00 AM – 6:00 PM EST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Muvad Consults. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/policy" className={styles.bottomLink}>Privacy Policy</Link>
            <Link href="/terms-and-condition" className={styles.bottomLink}>Terms of Service</Link>
            <a href="#" className={styles.bottomLink}>Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
