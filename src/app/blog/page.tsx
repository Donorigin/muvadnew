import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./blog.module.css";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_POSTS_QUERY } from "@/sanity/lib/queries";
import BlogListClient from "./BlogListClient";

export default async function BlogListingPage() {
  const { data: posts } = await sanityFetch({ query: ALL_POSTS_QUERY }) as { data: any[] };

  return (
    <div className={styles.pageWrapper}>
      {/* Global Sticky Navigation */}
      <Header />

      <main className={styles.mainContent}>
        {/* Breadcrumb Navigation */}
        <div className={styles.breadcrumbBar}>
          <div className={styles.breadcrumbContainer}>
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>Blog</span>
          </div>
        </div>

        {/* Page Header */}
        <section className={styles.headerSection}>
          <div className={styles.headerContainer}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span>Industry Insights</span>
            </div>
            <h1 className={styles.pageTitle}>
              Subcontractor Estimating &amp; <span className={styles.titleBlue}>Bidding Blog</span>
            </h1>
            <p className={styles.pageSubtitle}>
              Actionable guides, cost estimation workflows, and bidding strategies to help trade contractors win more profitable contracts with zero upfront risk.
            </p>
          </div>
        </section>

        {/* Client side interactive listing */}
        <BlogListClient posts={posts} />

      </main>

      <Footer />
    </div>
  );
}
