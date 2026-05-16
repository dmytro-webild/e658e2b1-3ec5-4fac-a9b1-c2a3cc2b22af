"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

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
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="TechFlow"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Innovating the Future of Software"
      description="Streamline your digital operations with our enterprise-grade SaaS platform. Designed for growth, built for scale."
      testimonials={[
        {
          name: "Alex Rivers",
          handle: "@arivers",
          testimonial: "This platform transformed our entire workflow. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport-terminal_107420-85070.jpg",
        },
        {
          name: "Sarah Miller",
          handle: "@smiller",
          testimonial: "The best SaaS solution we have used in years.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-handsome-bearded-male-wearing-stylish-sui_613910-12116.jpg",
        },
        {
          name: "David Chen",
          handle: "@dchen",
          testimonial: "Exceptional support and powerful features.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/inspiring-new-boss_1098-93.jpg",
        },
        {
          name: "Jamie Lee",
          handle: "@jlee",
          testimonial: "Scalable, secure, and incredibly user-friendly.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/senior-businessman-outside-modern-office-building_1139-1076.jpg",
        },
        {
          name: "Elena V.",
          handle: "@elena",
          testimonial: "Changed our business operations for the better.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-happy-middle-aged-business-leader_1262-4823.jpg",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/businessman-studying-infographics-performance-metrics_482257-122632.jpg"
      imageAlt="tech software platform interface"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",
          alt: "Close-up of businessman with tie",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-competitive-employee_1098-2870.jpg",
          alt: "Close-up of competitive employee",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-grey-haired-businessman-standing_74855-10324.jpg",
          alt: "Portrait of grey-haired businessman standing",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-portrait-beautiful-woman_23-2148317338.jpg",
          alt: "Front view portrait of beautiful woman",
        },
        {
          src: "http://img.b2bpic.net/free-photo/people-working-as-team-company_23-2149136872.jpg",
          alt: "People working as a team company",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Built for Innovation"
      description="We are a team of passionate developers and data scientists creating tools to help modern businesses thrive in a digital economy."
      metrics={[
        {
          value: "10k+",
          title: "Users served",
        },
        {
          value: "99.9%",
          title: "Uptime",
        },
        {
          value: "24/7",
          title: "Support",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-equipped-computer-lab_23-2149241200.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
      imageAlt="tech team collaborative space"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Real-time Analytics",
          description: "Get deep insights into your operations instantly.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/modern-smartphone-with-blank-white-screen-white-background_9975-133657.jpg",
            imageAlt: "mobile app dashboard ui",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-business-concept_53876-33533.jpg",
            imageAlt: "data visualization mobile chart",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-studying-infographics-performance-metrics_482257-122632.jpg",
          imageAlt: "mobile app dashboard ui",
        },
        {
          title: "Automated Workflows",
          description: "Reduce manual tasks and speed up your growth.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/modern-smartphone-with-blank-white-screen-dark-background_9975-134305.jpg",
            imageAlt: "mobile app dashboard ui",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/worker-examines-phone-with-greenscreen_482257-76605.jpg",
            imageAlt: "data visualization mobile chart",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/modern-equipped-computer-lab_23-2149241200.jpg",
          imageAlt: "mobile app dashboard ui",
        },
        {
          title: "Secure Cloud Storage",
          description: "Your data is protected with enterprise-level encryption.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/3d-render-code-testing-functional-test-usability_107791-16607.jpg",
            imageAlt: "mobile app dashboard ui",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/worker-holding-device-with-greenscreen_482257-76711.jpg",
            imageAlt: "data visualization mobile chart",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/3d-workstation-with-computer-peripheral-devices_23-2150714179.jpg",
          imageAlt: "mobile app dashboard ui",
        },
      ]}
      showStepNumbers={true}
      title="Powerful Capabilities"
      description="Leverage our features to maximize efficiency and automate your business processes."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Core Platform",
          price: "$99",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-workstation-with-computer-peripheral-devices_23-2150714179.jpg",
          imageAlt: "software product 3d render",
        },
        {
          id: "p2",
          name: "Data Analyst Pro",
          price: "$149",
          imageSrc: "http://img.b2bpic.net/free-photo/glowing-electric-lightning-bolt-icon-dark-smoky-background-energy-concept_84443-91273.jpg",
          imageAlt: "software product 3d render",
        },
        {
          id: "p3",
          name: "Automator Cloud",
          price: "$199",
          imageSrc: "http://img.b2bpic.net/free-photo/white-cell-phone-box-background_58702-4751.jpg",
          imageAlt: "software product 3d render",
        },
        {
          id: "p4",
          name: "Secure Gateway",
          price: "$299",
          imageSrc: "http://img.b2bpic.net/free-photo/view-illustrator-tools-arrangement_23-2150268052.jpg",
          imageAlt: "software product 3d render",
        },
        {
          id: "p5",
          name: "Team Hub",
          price: "$79",
          imageSrc: "http://img.b2bpic.net/free-vector/20-ux-ui-blue-color-icon-pack-like-list-vision-parameters-monitoring-volume_1142-24669.jpg",
          imageAlt: "software product 3d render",
        },
        {
          id: "p6",
          name: "Client Portal",
          price: "$49",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-cyber-monday-package-laptop_23-2148675038.jpg",
          imageAlt: "software product 3d render",
        },
      ]}
      title="Featured Solutions"
      description="Explore our curated products for specific business needs."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          title: "Basic",
          price: "$29",
          period: "/mo",
          features: [
            "Limited support",
            "5 Users",
            "Basic analytics",
          ],
          button: {
            text: "Get Started",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/woman-watching-business-conference-computer-screen-looking-statistics_482257-125563.jpg",
          imageAlt: "Woman watching business conference on computer screen looking over statistics",
        },
        {
          id: "pro",
          title: "Professional",
          price: "$99",
          period: "/mo",
          features: [
            "Priority support",
            "20 Users",
            "Advanced analytics",
          ],
          button: {
            text: "Get Started",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-studying-infographics-performance-metrics_482257-122632.jpg",
          imageAlt: "Woman watching business conference on computer screen looking over statistics",
        },
        {
          id: "enterprise",
          title: "Enterprise",
          price: "$299",
          period: "/mo",
          features: [
            "Dedicated account manager",
            "Unlimited users",
            "Full API access",
          ],
          button: {
            text: "Contact Us",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/modern-equipped-computer-lab_23-2149241200.jpg",
          imageAlt: "Woman watching business conference on computer screen looking over statistics",
        },
      ]}
      title="Flexible Pricing Plans"
      description="Select the plan that best fits your business growth stage."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Proven Performance"
      tag="Reliability"
      metrics={[
        {
          id: "m1",
          value: "500+",
          description: "Enterprise clients served globally.",
        },
        {
          id: "m2",
          value: "98%",
          description: "Customer retention rate.",
        },
        {
          id: "m3",
          value: "4.8/5",
          description: "Customer satisfaction score.",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          title: "Great choice!",
          quote: "The platform is incredibly powerful and stable.",
          name: "Alice Smith",
          role: "CTO",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg",
        },
        {
          id: "t2",
          title: "Game changer!",
          quote: "Automating our data has saved us weeks of work.",
          name: "Bob Jones",
          role: "Founder",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-4107.jpg",
        },
        {
          id: "t3",
          title: "Top notch!",
          quote: "The support team is fast and knowledgeable.",
          name: "Carol White",
          role: "Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman-working-office_1098-22034.jpg",
        },
        {
          id: "t4",
          title: "Perfect fit!",
          quote: "Exactly what we needed to scale our infrastructure.",
          name: "David Brown",
          role: "Lead Dev",
          imageSrc: "http://img.b2bpic.net/free-photo/friendly-successful-business-woman-posing-with-arms-crossed_74855-2813.jpg",
        },
        {
          id: "t5",
          title: "Highly reliable!",
          quote: "Consistently delivers great results for our team.",
          name: "Eve Wilson",
          role: "Product Lead",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-confident-business-leader_1262-4808.jpg",
        },
      ]}
      title="Success Stories"
      description="Join hundreds of forward-thinking businesses using TechFlow."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Let's Connect"
      title="Ready to Start?"
      description="Get in touch with our team today and schedule a demo."
      buttons={[
        {
          text: "Contact Support",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="TechFlow"
      columns={[
        {
          title: "Platform",
          items: [
            {
              label: "Features",
              href: "#",
            },
            {
              label: "Pricing",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 TechFlow. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
