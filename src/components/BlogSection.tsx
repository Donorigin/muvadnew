import React from "react";
import Link from "next/link";
import styles from "./BlogSection.module.css";
import { sanityFetch } from "@/sanity/lib/live";
import { LATEST_POSTS_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export default async function BlogSection() {
  const { data: posts } = await sanityFetch({ query: LATEST_POSTS_QUERY }) as { data: any[] };

  return (
    <section id="blog" className={styles.blogSection}>
      <div className={styles.container}>
        {/* Header Area */}
        <div className={styles.headerArea}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span>Articles</span>
          </div>
          <h2 className={styles.title}>
            Discover <span className={styles.highlightBlue}>Estimating Guides</span> And Trends
          </h2>
        </div>

        {/* 3-Column Articles Grid */}
        <div className={styles.grid}>
          {posts.map((post: any) => {
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
                {/* Thumbnail Image */}
                <div className={styles.thumbnailWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl as string}
                    alt={post.title}
                    className={styles.thumbnail}
                  />
                </div>

                {/* Meta Row: Category --- Line --- Date */}
                <div className={styles.metaRow}>
                  <span className={styles.categoryPill}>{post.category || 'Updates'}</span>
                  <div className={styles.dividerLine} />
                  <span className={styles.date}>{dateStr}</span>
                </div>

                {/* Title & Arrow Row */}
                <div className={styles.titleRow}>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <div className={styles.arrowCircle} aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
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
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCtaWrapper}>
          <Link href="/blog" className={styles.viewAllBtn}>
            <span>View All Posts</span>
            <div className={styles.ctaArrowCircle}>
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
          </Link>
        </div>
      </div>
    </section>
  );
}
