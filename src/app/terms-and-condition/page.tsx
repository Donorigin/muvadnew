import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./terms.module.css";

export const metadata: Metadata = {
  title: "Terms and Conditions | Muvad Consults LLC",
  description:
    "Read the Terms and Conditions for using Muvad Consults LLC services, including SMS Terms of Service, User Accounts, Intellectual Property, and Limitation of Liability.",
};

const TOC_ITEMS = [
  { id: "introduction", label: "Introduction" },
  { id: "use", label: "1. Use of Our Services" },
  { id: "sms", label: "2. SMS Terms of Service" },
  { id: "accounts", label: "3. User Accounts" },
  { id: "liability", label: "4. Limitation of Liability" },
  { id: "intellectual", label: "5. Intellectual Property" },
  { id: "changes", label: "6. Changes to These Terms" },
  { id: "contact", label: "7. Contact Us" },
];

export default function TermsAndConditionsPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumbBar}>
          <div className={styles.breadcrumbContainer}>
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>Terms and Conditions</span>
          </div>
        </div>

        {/* Hero Header */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span>Legal</span>
            </div>
            <h1 className={styles.heroTitle}>
              Terms and <span className={styles.titleAccent}>Conditions</span>
            </h1>
            <p className={styles.heroDates}>
              <span>Effective Date: May 15, 2025</span>
              <span className={styles.dateSep}>|</span>
              <span>Last Updated: May 15, 2025</span>
            </p>
          </div>
        </section>

        {/* Content Area */}
        <section className={styles.contentSection}>
          <div className={styles.contentContainer}>

            {/* Table of Contents Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.tocCard}>
                <h2 className={styles.tocTitle}>Contents</h2>
                <nav aria-label="Table of contents">
                  <ul className={styles.tocList}>
                    {TOC_ITEMS.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className={styles.tocLink}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Main Legal Content */}
            <article className={styles.article}>

              {/* Introduction */}
              <div id="introduction" className={styles.section}>
                <h2 className={styles.sectionTitle}>Introduction</h2>
                <p className={styles.paragraph}>
                  Welcome to Muvad Consults LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using our website{" "}
                  <a href="https://muvadconsults.com" className={styles.inlineLink} target="_blank" rel="noopener noreferrer">
                    muvadconsults.com
                  </a>{" "}
                  (&ldquo;Website&rdquo;) and our services, you agree to be bound by these Terms and Conditions (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use our services.
                </p>
              </div>

              {/* 1. Use of Our Services */}
              <div id="use" className={styles.section}>
                <h2 className={styles.sectionTitle}>1. Use of Our Services</h2>
                <ul className={styles.bulletList}>
                  <li>You must be at least 18 years old to use our services.</li>
                  <li>You agree to use our website and services only for lawful purposes.</li>
                  <li>
                    We reserve the right to suspend or terminate your access if we suspect any unauthorized use or violation of these Terms.
                  </li>
                </ul>
              </div>

              {/* 2. SMS Terms of Service */}
              <div id="sms" className={styles.section}>
                <h2 className={styles.sectionTitle}>2. SMS Terms of Service</h2>
                <p className={styles.paragraph}>
                  By opting into SMS notifications through a web form or other medium, you consent to receive SMS messages from Muvad Consults LLC, including:
                </p>
                <p className={styles.paragraph} style={{ marginTop: '-8px' }}>
                  Appointment scheduling and reminders, estimate and project updates, proposal follow-ups, and service notifications.
                </p>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Message Frequency:</span>
                    <span className={styles.infoValue}>Messaging frequency varies.</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Message &amp; Data Rates:</span>
                    <span className={styles.infoValue}>Standard message and data rates may apply.</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Opt-Out:</span>
                    <span className={styles.infoValue}>You can opt out at any time by replying STOP to any message.</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Help:</span>
                    <span className={styles.infoValue}>
                      Text HELP for assistance, email{" "}
                      <a href="mailto:aduvie@muvadconsults.com" className={styles.inlineLink}>
                        aduvie@muvadconsults.com
                      </a>
                      , or call (470) 354-3663.
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Privacy Policy:</span>
                    <span className={styles.infoValue}>
                      Visit our{" "}
                      <Link href="/policy" className={styles.inlineLink}>
                        Privacy Policy
                      </Link>{" "}
                      page for details on data collection and protection.
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. User Accounts */}
              <div id="accounts" className={styles.section}>
                <h2 className={styles.sectionTitle}>3. User Accounts</h2>
                <ul className={styles.bulletList}>
                  <li>You may need to create an account to access certain services.</li>
                  <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                  <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
                </ul>
              </div>

              {/* 4. Limitation of Liability */}
              <div id="liability" className={styles.section}>
                <h2 className={styles.sectionTitle}>4. Limitation of Liability</h2>
                <ul className={styles.bulletList}>
                  <li>We do not guarantee uninterrupted or error-free service.</li>
                  <li>
                    We are not liable for indirect, incidental, or consequential damages arising from your use of our services.
                  </li>
                </ul>
              </div>

              {/* 5. Intellectual Property */}
              <div id="intellectual" className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Intellectual Property</h2>
                <ul className={styles.bulletList}>
                  <li>All content on this Website, including text, logos, and graphics, is owned by Muvad Consults LLC.</li>
                  <li>You may not use our content without prior written permission.</li>
                </ul>
              </div>

              {/* 6. Changes to These Terms */}
              <div id="changes" className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Changes to These Terms</h2>
                <p className={styles.paragraph}>
                  We may update these Terms from time to time. Any changes will be posted on this page with an updated &ldquo;Effective Date.&rdquo; Your continued use of our website constitutes acceptance of any revisions.
                </p>
              </div>

              {/* 7. Contact Us */}
              <div id="contact" className={styles.section}>
                <h2 className={styles.sectionTitle}>7. Contact Us</h2>
                <p className={styles.paragraph}>
                  If you have any questions regarding these Terms and Conditions, please contact us at:
                </p>
                <div className={styles.contactCard}>
                  <p className={styles.contactName}>Muvad Consults LLC</p>
                  <p className={styles.contactDetail}>
                    <span>Email:</span>{" "}
                    <a href="mailto:projects@muvadconsults.com" className={styles.inlineLink}>
                      projects@muvadconsults.com
                    </a>
                  </p>
                  <p className={styles.contactDetail}>
                    <span>Website:</span>{" "}
                    <a href="https://muvadconsults.com" className={styles.inlineLink} target="_blank" rel="noopener noreferrer">
                      https://muvadconsults.com/
                    </a>
                  </p>
                </div>
              </div>

              {/* Acknowledgement */}
              <div className={styles.acknowledgement}>
                <p>
                  By using our services, you acknowledge and agree to these Terms. For more details on how we handle your data, please refer to our{" "}
                  <Link href="/policy" className={styles.inlineLink}>
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
