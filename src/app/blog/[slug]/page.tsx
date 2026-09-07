import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./blogDetail.module.css";
import { sanityFetch } from "@/sanity/lib/live";
import { POST_BY_SLUG_QUERY, LATEST_POSTS_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { data: post } = await sanityFetch({ 
    query: POST_BY_SLUG_QUERY, 
    params: { slug: resolvedParams.slug } 
  }) as { data: any };

  if (!post) {
    notFound();
  }

  // Fetch some related/latest posts for the sidebar
  const { data: allLatest } = await sanityFetch({ query: LATEST_POSTS_QUERY }) as { data: any[] };
  const relatedPosts = allLatest.filter((p: any) => p.slug !== post.slug).slice(0, 3);

  const dateStr = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : 'Recently';
    
  const imageUrl = post.mainImage ? urlForImage(post.mainImage)?.url() : "/images/next.jpg";

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
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

        <div className={styles.heroBanner}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl as string}
            alt={post.title}
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <section className={styles.articleSection}>
          <div className={styles.articleLayout}>
            <article className={styles.articleBody}>
              <span className={styles.categoryPill}>{post.category || 'Updates'}</span>

              <h1 className={styles.articleTitle}>{post.title}</h1>

              <div className={styles.articleMeta}>
                <div className={styles.authorArea}>
                  <div className={styles.authorAvatar}>
                    <span className={styles.authorFallback}>M</span>
                  </div>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>Muvad Consults</span>
                    <span className={styles.authorRole}>Estimating Experts</span>
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
                  {dateStr}
                </span>

                <span className={styles.readTimePill}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  5 min read
                </span>
              </div>

              <div className={styles.articleContent}>
                {post.body ? (
                  <PortableText value={post.body} />
                ) : (
                  <p className={styles.articleParagraph}>{post.excerpt}</p>
                )}
              </div>

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

            <aside className={styles.sidebar}>
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

              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Recent Articles</h3>
                {relatedPosts.map((related: any) => {
                  const relDateStr = related.publishedAt 
                    ? new Date(related.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                    : 'Recently';
                  return (
                    <Link
                      key={related._id}
                      href={`/blog/${related.slug}`}
                      className={styles.relatedPost}
                    >
                      <span className={styles.relatedCategory}>{related.category || 'Updates'}</span>
                      <span className={styles.relatedTitle}>{related.title}</span>
                      <span className={styles.relatedDate}>{relDateStr}</span>
                    </Link>
                  )
                })}
              </div>
            </aside>
          </div>
        </section>

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
