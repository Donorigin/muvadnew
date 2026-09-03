import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#ffffff" }}>
      <Header />
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "100px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "6rem", fontWeight: 900, color: "#0052cc", margin: 0, lineHeight: 1 }}>404</h1>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0b1a30", margin: "16px 0 24px 0", letterSpacing: "-0.02em" }}>
          Page Not Found
        </h2>
        <p style={{ fontSize: "1.05rem", color: "#64748b", maxWidth: "460px", marginBottom: "40px", lineHeight: 1.6 }}>
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track to winning more contracts.
        </p>
        <Link href="/" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#ff5722",
          color: "#ffffff",
          padding: "14px 28px",
          borderRadius: "9999px",
          fontSize: "0.95rem",
          fontWeight: 700,
          textDecoration: "none",
          transition: "transform 0.2s, box-shadow 0.2s",
          boxShadow: "0 4px 14px rgba(255, 87, 34, 0.3)"
        }}>
          Return to Homepage
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
