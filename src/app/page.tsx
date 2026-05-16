"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { CheckCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="blurBottom"
        cardStyle="inset"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Features", id: "features" },
        { name: "Pricing", id: "pricing" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Shiv Enterprise"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      title="Shiv Enterprise"
      description="Scaling your business vision with precision and innovation. We deliver enterprise-grade solutions built to last."
      background={{ variant: "sparkles-gradient" }}
      leftCarouselItems={[{ imageSrc: "https://img.b2bpic.net/free-photo/modern-office-space-with-employees_23-2148767749.jpg" }]}
      rightCarouselItems={[{ imageSrc: "https://img.b2bpic.net/free-photo/team-working-on-project_23-2148767756.jpg" }]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      title="About Shiv Enterprise"
      description="We define industry standards through relentless innovation and commitment to quality."
      bulletPoints={[
          { title: "Strategic Growth", description: "Tailored roadmaps for sustainable scaling." },
          { title: "Technical Excellence", description: "Top-tier engineering and architecture." }
      ]}
      useInvertedBackground={false}
      textboxLayout="split"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      title="Our Core Competencies"
      features={[
          { id: "f1", label: "Enterprise Solutions", title: "Full-Scale Strategy", items: ["Market Analysis", "Growth Hacking"] },
          { id: "f2", label: "Operations", title: "Optimized Workflows", items: ["Automation", "Resource Management"] }
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      gridVariant="three-columns-all-equal-width"
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Products & Solutions"
      products={[
          { id: "1", name: "Enterprise ERP", price: "$499", variant: "Standard", imageSrc: "https://img.b2bpic.net/free-photo/data-analysis-chart_23-2148675038.jpg" }
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      title="Transparent Pricing"
      plans={[
          { id: "p1", badge: "Core", price: "$299", subtitle: "Best for growing companies", features: ["Access to basic tools", "Email support"], buttons: [{ text: "Get Started" }] }
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      gridVariant="uniform-all-items-equal"
      animationType="slide-up"
      textboxLayout="default"
      title="Impact in Numbers"
      metrics={[
          { id: "1", value: "100+", description: "Happy Partners" },
          { id: "2", value: "250+", description: "Completed Projects" }
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      showRating={true}
      animationType="slide-up"
      textboxLayout="default"
      title="Client Success"
      testimonials={[
          { id: "1", name: "Jane Doe", handle: "@janedoe", testimonial: "Shiv Enterprise exceeded our expectations in every phase of the project.", rating: 5 }
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      tag="Contact Us"
      title="Let's build together"
      description="Ready to discuss your next project? Get in touch with our team."
      buttons={[{ text: "Send Message" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Shiv Enterprise"
      socialLinks={[{ icon: CheckCircle, href: "#", ariaLabel: "Social" }]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}