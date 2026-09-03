import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import IndustriesSection from "@/components/IndustriesSection";
import BlogSection from "@/components/BlogSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      {/* 1. Global Sticky Header */}
      <Header />

      <main>
        {/* 2. Hero */}
        <HeroSection />

        {/* 3. Our Services / Process */}
        <ProcessSection />

        {/* 4. About the Company */}
        <AboutSection />

        {/* 5. Industries We Serve & Our Approach */}
        <IndustriesSection />

        {/* 6. Blog Articles Preview */}
        <BlogSection />

        {/* 7. Full-width CTA Banner */}
        <CtaSection />

        {/* 8. Contact Us (with form) */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
