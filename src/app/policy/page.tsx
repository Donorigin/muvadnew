import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./policy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Muvad Consults LLC",
  description:
    "Learn how Muvad Consults LLC collects, uses, and protects your personal data. Our Privacy Policy covers data sharing, cookies, your rights, and GDPR/CCPA compliance.",
};

const TOC_ITEMS = [
  { id: "introduction", label: "Introduction" },
  { id: "information", label: "1. Information We Collect" },
  { id: "usage", label: "2. How We Use Your Information" },
  { id: "sharing", label: "3. Data Sharing and Disclosure" },
  { id: "cookies", label: "4. Cookies and Tracking" },
  { id: "security", label: "5. Data Storage and Security" },
  { id: "rights", label: "6. Your Rights" },
  { id: "children", label: "7. Children's Privacy" },
  { id: "changes", label: "8. Changes to This Policy" },
  { id: "contact", label: "9. Contact Us" },
];

export default function PrivacyPolicyPage() {
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
            <span className={styles.breadcrumbCurrent}>Privacy Policy</span>
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
              Privacy <span className={styles.titleAccent}>Policy</span>
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
                  Muvad Consults LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting it through this Privacy Policy. This policy describes how we collect, use, disclose, and safeguard your information when you visit our website{" "}
                  <a href="https://muvadconsults.com" className={styles.inlineLink} target="_blank" rel="noopener noreferrer">
                    muvadconsults.com
                  </a>{" "}
                  (&ldquo;Website&rdquo;).
                </p>
              </div>

              {/* 1. Information We Collect */}
              <div id="information" className={styles.section}>
                <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
                <p className={styles.paragraph}>
                  We collect only the following personal information when you voluntarily provide it through our contact forms and account registration:
                </p>
                <ul className={styles.bulletList}>
                  <li>Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                </ul>
                <div className={styles.noteBox}>
                  <strong>Note:</strong> We do not collect sensitive personal data such as payment details, addresses, or other identifying information.
                </div>
              </div>

              {/* 2. How We Use Your Information */}
              <div id="usage" className={styles.section}>
                <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
                <p className={styles.paragraph}>We use the collected information for the following purposes:</p>
                <ul className={styles.bulletList}>
                  <li>To communicate with you regarding our services</li>
                  <li>To send you marketing emails or newsletters (you may unsubscribe at any time)</li>
                  <li>To respond to inquiries submitted through our contact forms</li>
                  <li>To manage user accounts and provide customer support</li>
                </ul>
                <p className={styles.paragraph} style={{ marginTop: "16px" }}>
                  We do not use the collected data for automated decision-making or profiling.
                </p>
              </div>

              {/* 3. Data Sharing and Disclosure */}
              <div id="sharing" className={styles.section}>
                <h2 className={styles.sectionTitle}>3. Data Sharing and Disclosure</h2>
                <p className={styles.paragraph}>
                  We do not sell, trade, rent, or share your personal information with third parties. Your data is not transferred to any external parties except as required by law or to comply with legal obligations. SMS consent is not shared with third parties or affiliates. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging opt-in data and consent will not be shared with any third parties.
                </p>
              </div>

              {/* 4. Cookies and Tracking Technologies */}
              <div id="cookies" className={styles.section}>
                <h2 className={styles.sectionTitle}>4. Cookies and Tracking Technologies</h2>
                <p className={styles.paragraph}>
                  We do not use cookies or tracking technologies on our website.
                </p>
              </div>

              {/* 5. Data Storage and Security */}
              <div id="security" className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Data Storage and Security</h2>
                <p className={styles.paragraph}>
                  We take reasonable technical and organizational security measures to protect your personal data, including:
                </p>
                <ul className={styles.bulletList}>
                  <li>Secure hosting of our website</li>
                  <li>Industry-standard security protocols to prevent unauthorized access</li>
                  <li>Encryption and secure communication practices</li>
                </ul>
                <p className={styles.paragraph} style={{ marginTop: "16px" }}>
                  We retain user data for as long as necessary for business purposes or until a deletion request is received.
                </p>
              </div>

              {/* 6. Your Rights */}
              <div id="rights" className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Your Rights</h2>
                <p className={styles.paragraph}>
                  As a user, you have the following rights concerning your personal data:
                </p>
                <div className={styles.rightsGrid}>
                  <div className={styles.rightItem}>
                    <span className={styles.rightLabel}>Access</span>
                    <span className={styles.rightDesc}>You may request a copy of the personal data we have about you.</span>
                  </div>
                  <div className={styles.rightItem}>
                    <span className={styles.rightLabel}>Correction</span>
                    <span className={styles.rightDesc}>You may request corrections to inaccurate or incomplete data.</span>
                  </div>
                  <div className={styles.rightItem}>
                    <span className={styles.rightLabel}>Deletion</span>
                    <span className={styles.rightDesc}>You may request that we delete your personal information.</span>
                  </div>
                  <div className={styles.rightItem}>
                    <span className={styles.rightLabel}>Unsubscribe</span>
                    <span className={styles.rightDesc}>You may opt out of marketing emails by clicking the unsubscribe link in our emails.</span>
                  </div>
                </div>
                <p className={styles.paragraph} style={{ marginTop: "20px" }}>
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:projects@muvadconsults.com" className={styles.inlineLink}>
                    projects@muvadconsults.com
                  </a>
                  .
                </p>
              </div>

              {/* 7. Children's Privacy */}
              <div id="children" className={styles.section}>
                <h2 className={styles.sectionTitle}>7. Children&apos;s Privacy</h2>
                <p className={styles.paragraph}>
                  Our website and services are not intended for individuals under the age of 18, and we do not knowingly collect personal data from minors.
                </p>
              </div>

              {/* 8. Changes to This Policy */}
              <div id="changes" className={styles.section}>
                <h2 className={styles.sectionTitle}>8. Changes to This Policy</h2>
                <p className={styles.paragraph}>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &ldquo;Effective Date.&rdquo; Your continued use of our website constitutes acceptance of any revisions.
                </p>
              </div>

              {/* 9. Contact Us */}
              <div id="contact" className={styles.section}>
                <h2 className={styles.sectionTitle}>9. Contact Us</h2>
                <p className={styles.paragraph}>
                  If you have any questions about this Privacy Policy, or wish to exercise your rights, please contact us at:
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
                      muvadconsults.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Legal Compliance Note */}
              <div className={styles.acknowledgement}>
                <p>
                  This Privacy Policy is designed to ensure compliance with applicable privacy laws, including GDPR (General Data Protection Regulation) and CCPA (California Consumer Privacy Act) where applicable. If additional legal compliance is required, we recommend seeking professional legal advice.
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
