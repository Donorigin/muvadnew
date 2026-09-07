"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import styles from "./blog.module.css";
import { urlForImage } from "@/sanity/lib/image";

const CATEGORIES = ["All", "Estimating Tips", "Bidding Strategy", "Tips & Tricks"];

export default function BlogListClient({ posts }: { posts: any[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const titleStr = post.title || "";
      const excerptStr = post.excerpt || "";
      const matchesSearch =
        titleStr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        excerptStr.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, posts]);

  return (
    <>
      {/* Filters & Search */}
      <section className={styles.filterSection}>
        <div className={styles.filterContainer}>
          {/* Category Pills */}
          <div className={styles.categoriesGroup}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.categoryBtn} ${
                  selectedCategory === cat ? styles.categoryBtnActive : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className={styles.searchBox}>
            <svg
              className={styles.searchIcon}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className={styles.articlesSection}>
        <div className={styles.articlesContainer}>
          {filteredPosts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#64748b" }}>
              <p style={{ fontSize: "1.2rem", fontWeight: 600 }}>No articles found matching your criteria.</p>
              <button
                type="button"
                className={styles.categoryBtn}
                style={{ marginTop: "16px" }}
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className={styles.grid}>
              {filteredPosts.map((post) => {
                const dateStr = post.publishedAt 
                  ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                  : 'Recently';
                const imageUrl = post.mainImage ? urlForImage(post.mainImage)?.url() : "/images/next.jpg";

                return (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    className={styles.card}
                  >
                    <div className={styles.thumbnailWrapper}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imageUrl as string}
                        alt={post.title}
                        className={styles.thumbnail}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/images/next.jpg";
                        }}
                      />
                    </div>

                    <div className={styles.metaRow}>
                      <span className={styles.categoryPill}>{post.category || 'Updates'}</span>
                      <div className={styles.dividerLine} />
                      <span className={styles.date}>{dateStr}</span>
                    </div>

                    <h2 className={styles.cardTitle}>{post.title}</h2>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>

                    <div className={styles.cardFooter}>
                      <span className={styles.readTime}>{"5 min read"}</span>
                      <div className={styles.arrowCircle} aria-hidden="true">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Bottom CTA Banner */}
          <div className={styles.ctaBanner}>
            <div className={styles.bannerText}>
              <h3>Ready to Win More Subcontracting Bids?</h3>
              <p>
                Partner with Muvad Consults. Get accurate take-offs, custom proposals, and dedicated follow-up with zero upfront fees.
              </p>
            </div>
            <Link href="/#discovery-call" className={styles.bannerCta}>
              <span>Book a Discovery Call</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
