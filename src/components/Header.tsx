"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 1. TOP UTILITY BAR (Desktop) */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topBarNotice}>
            <span>Looking for expert estimating services? We&apos;re just a call away!</span>
          </div>
          <div className={styles.topBarContacts}>
            <a href="tel:+14703543663" className={styles.topBarLink}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+1 (470) 354-3663</span>
            </a>
            <span className={styles.topBarDivider}>|</span>
            <a href="mailto:projects@muvadconsults.com" className={styles.topBarLink}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>projects@muvadconsults.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. STICKY HEADER (Full Width, No Margins/Paddings, 0 Border Radius) */}
      <header className={styles.stickyHeader}>
        <div className={styles.navContainer}>
          {/* Mobile Hamburger Button */}
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

          {/* Brand Logo */}
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

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className={styles.desktopNavLinks}>
              <li>
                <Link href="/#services" className={styles.navLink}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className={styles.navLink}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#industries" className={styles.navLink}>
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.navLink}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.navLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <a href="/#contact-form" className={styles.desktopNavCta}>
            <span>Book a Discovery Call</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          {/* Mobile Fast CTA Button */}
          <a href="/#contact-form" className={styles.mobileNavCta}>
            Book Call
          </a>

          {/* Mobile Drawer Dropdown */}
          {mobileMenuOpen && (
            <div className={styles.mobileDrawer}>
              <ul className={styles.mobileDrawerLinks}>
                <li>
                  <Link
                    href="/#services"
                    className={styles.mobileDrawerLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className={styles.mobileDrawerLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#industries"
                    className={styles.mobileDrawerLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={styles.mobileDrawerLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={styles.mobileDrawerLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <a
                href="/#contact-form"
                className={styles.mobileDrawerCta}
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Discovery Call
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
