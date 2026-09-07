"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./ContactSection.module.css";

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceType: string;
  projectDetails: string;
  smsConsent: boolean;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceType: "estimating",
    projectDetails: "",
    smsConsent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.projectDetails) return;
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* ─── LEFT: Info Column ─── */}
          <div className={styles.infoCol}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span>Contact Us</span>
            </div>

            <h2 className={styles.title}>
              Ready to Win{" "}
              <span className={styles.titleBlue}>More Contracts?</span>
            </h2>

            <p className={styles.description}>
              Let&apos;s discuss how Muvad Consults can help you secure more projects and grow your business with our risk-free estimating and proposal services.
            </p>

            {/* Contact Cards */}
            <div className={styles.contactCards}>
              {/* Phone */}
              <a href="tel:+14703543663" className={styles.contactCard}>
                <div className={styles.contactIconCircle}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>Phone</span>
                  <span className={styles.contactValue}>(470) 354 3663</span>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:projects@muvadconsults.com" className={styles.contactCard}>
                <div className={styles.contactIconCircle}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>projects@muvadconsults.com</span>
                </div>
              </a>

              {/* Address */}
              <div className={styles.contactCard} style={{ cursor: "default" }}>
                <div className={styles.contactIconCircle}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>Address</span>
                  <span className={styles.contactValue}>
                    74710 Hwy 111, Palm Desert<br />CA 92260
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Contact Form ─── */}
          <div className={styles.formCol}>
            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Request Received!</h3>
                <p className={styles.successMsg}>
                  Thank you, {form.fullName}! An estimating specialist from Muvad Consults will reach out within 2 business hours.
                </p>
                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ fullName: "", companyName: "", email: "", phone: "", serviceType: "estimating", projectDetails: "", smsConsent: false });
                  }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <h3 className={styles.formTitle}>Get a Free Estimate</h3>
                <p className={styles.formSubtitle}>
                  Fill in your details and we&apos;ll get back to you within 2 business hours.
                </p>

                <form onSubmit={handleSubmit} className={styles.formGrid} noValidate>
                  {/* Full Name + Company Name */}
                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel} htmlFor="contact-fullName">
                        Full Name<span className={styles.required}>*</span>
                      </label>
                      <input
                        id="contact-fullName"
                        type="text"
                        name="fullName"
                        placeholder="John Smith"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        className={styles.fieldInput}
                      />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel} htmlFor="contact-companyName">
                        Company Name
                      </label>
                      <input
                        id="contact-companyName"
                        type="text"
                        name="companyName"
                        placeholder="Your Company"
                        value={form.companyName}
                        onChange={handleChange}
                        className={styles.fieldInput}
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel} htmlFor="contact-email">
                        Email Address<span className={styles.required}>*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={styles.fieldInput}
                      />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel} htmlFor="contact-phone">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        placeholder="(555) 123-4567"
                        value={form.phone}
                        onChange={handleChange}
                        className={styles.fieldInput}
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel} htmlFor="contact-serviceType">
                      Service Type<span className={styles.required}>*</span>
                    </label>
                    <select
                      id="contact-serviceType"
                      name="serviceType"
                      value={form.serviceType}
                      onChange={handleChange}
                      className={styles.fieldSelect}
                    >
                      <option value="estimating">Estimating &amp; Take-Offs</option>
                      <option value="proposals">Proposal Writing</option>
                      <option value="followup">GC Follow-Up &amp; Bid Tracking</option>
                      <option value="full-service">Full-Service Package</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel} htmlFor="contact-projectDetails">
                      Project Details<span className={styles.required}>*</span>
                    </label>
                    <textarea
                      id="contact-projectDetails"
                      name="projectDetails"
                      placeholder="Tell us about your project..."
                      required
                      value={form.projectDetails}
                      onChange={handleChange}
                      className={styles.fieldTextarea}
                    />
                  </div>

                  {/* SMS Consent Checkbox */}
                  <div className={styles.checkboxGroup}>
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        name="smsConsent"
                        checked={form.smsConsent}
                        onChange={handleCheckboxChange}
                        className={styles.checkboxInput}
                      />
                      <span className={styles.checkboxText}>
                        By checking this box, I consent to receive SMS messages from Muvad Consults LLC regarding appointment scheduling, project updates, and service notifications. Message frequency varies. Message &amp; data rates may apply. Reply STOP to opt out at any time. Reply HELP for help. Consent is not a condition of purchase. View our{" "}
                        <Link href="/policy" className={styles.inlineLink}>Privacy Policy</Link>
                        {" "}and{" "}
                        <Link href="/terms-and-condition" className={styles.inlineLink}>Terms &amp; Conditions</Link>.
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <button type="submit" className={styles.submitBtn}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Submit Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
