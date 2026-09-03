# Image Replacement Guide

To add or replace images, place them in this folder (`public/images/`):

1. **Hero Background Image**:
   - **Path**: `public/images/hero-bg.jpg`
   - **Usage**: Background for the entire hero section.
   - **Recommended specs**: `1920x1080` or higher, JPG/WebP.
   - *Note*: An ambient soft overlay is applied in CSS to guarantee text contrast while keeping the photo brightly visible.

2. **Testimonial / Director Avatar**:
   - **Path**: `public/images/testimonial-avatar.jpg`
   - **Usage**: Avatar image in the frosted glass testimonial card.
   - **Recommended specs**: `400x400` square, JPG/PNG/WebP.
   - *Note*: If not found, a gradient monogram automatically displays as fallback.

3. **About Section Image**:
   - **Path**: `public/images/next.jpg`
   - **Usage**: Full-width rounded team / office image for the "About Us" section.
   - **Recommended specs**: `1600x900` or `1920x1080`, JPG/WebP.

You can adjust paths directly in:
- `src/components/HeroSection.tsx` (`HERO_BG_IMAGE` & `TESTIMONIAL_AVATAR_IMAGE`)
- `src/components/AboutSection.tsx` (`ABOUT_IMAGE`)
