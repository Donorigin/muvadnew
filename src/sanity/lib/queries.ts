import { defineQuery } from 'next-sanity'

export const ALL_POSTS_QUERY = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    category,
    mainImage
  }
`)

export const LATEST_POSTS_QUERY = defineQuery(`
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    category,
    mainImage
  }
`)

export const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    category,
    mainImage,
    body
  }
`)
