"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./blogDetail.module.css";
import { BLOG_POSTS } from "@/data/blogData";

interface PageProps {
  params: { slug: string };
}

export default function BlogDetailPage({ params }: PageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  const [avatarError, setAvatarError] = useState(false);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

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
            <Link href="/blog" className={styles.breadcrumbLink}>
              Blog
            </Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>{post.title}</span>
          </div>
        </div>

        {/* Hero Image Banner */}
        <div className={styles.heroBanner}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className={styles.heroImage}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/next.jpg";
            }}
          />
          <div className={styles.heroOverlay} />
        </div>

        {/* Main Article Section */}
        <section className={styles.articleSection}>
          <div className={styles.articleLayout}>
            {/* --- LEFT: Article Body --- */}
            <article className={styles.articleBody}>
              {/* Category Tag */}
              <span className={styles.categoryPill}>{post.category}</span>

              {/* Title */}
              <h1 className={styles.articleTitle}>{post.title}</h1>

              {/* Author & Meta Row */}
              <div className={styles.articleMeta}>
                <div className={styles.authorArea}>
                  <div className={styles.authorAvatar}>
                    {!avatarError ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className={styles.authorAvatarImg}
                        onError={() => setAvatarError(true)}
                      />
                    ) : (
                      <span className={styles.authorFallback}>
                        {post.author.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{post.author.name}</span>
                    <span className={styles.authorRole}>{post.author.role}</span>
                  </div>
                </div>

                <div className={styles.metaDivider} />

                <span className={styles.metaDate}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {post.date}
                </span>

                <span className={styles.readTimePill}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {post.readTime}
                </span>
              </div>

              {/* Article Content */}
              <div className={styles.articleContent}>
                {post.content.map((paragraph, index) => (
                  <p key={index} className={styles.articleParagraph}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Inline CTA Banner */}
              <div className={styles.inlineCtaBanner}>
                <h3>Ready to Stop Losing Contracts to Bad Estimates?</h3>
                <p>
                  Muvad Consults delivers accurate take-offs, precision cost estimates, and winning proposals — with zero upfront cost. We only get paid when you get paid.
                </p>
                <Link href="/#discovery-call" className={styles.ctaBtn}>
                  <span>Book a Free Discovery Call</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </article>

            {/* --- RIGHT: Sidebar --- */}
            <aside className={styles.sidebar}>
              {/* Quick CTA Card */}
              <div className={styles.quickCtaCard}>
                <h3>Win More Bids. Pay Later.</h3>
                <p>
                  Get comprehensive take-offs and expert proposals for your next ITB with zero financial risk. Book a 15-minute discovery call today.
                </p>
                <Link href="/#discovery-call" className={styles.quickCtaBtn}>
                  <span>Book a Discovery Call</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>

              {/* Related Posts */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Related Articles</h3>
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className={styles.relatedPost}
                  >
                    <span className={styles.relatedCategory}>{related.category}</span>
                    <span className={styles.relatedTitle}>{related.title}</span>
                    <span className={styles.relatedDate}>{related.date}</span>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* Back to Blog */}
        <div className={styles.backToBlogSection}>
          <div className={styles.backToBlogContainer}>
            <Link href="/blog" className={styles.backBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span>Back to All Articles</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
