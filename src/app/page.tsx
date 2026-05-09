"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, Headphones, Package, ShieldCheck, Smile, Truck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="large"
        background="grid"
        cardStyle="glass-depth"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Features",          id: "features"},
        {
          name: "Products",          id: "products"},
        {
          name: "Reviews",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
        {
          name: "Dashboard",          id: "/product-management"},
      ]}
      brandName="E-Store"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "sparkles-gradient"}}
      title="Elevate Your Lifestyle"
      description="Discover curated collections designed for modern living. Quality, style, and innovation in every detail."
      buttons={[
        {
          text: "Shop Now",          href: "#products"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/orange-minimalist-podium_23-2151934053.jpg"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/woman-with-thumbs-up_1149-1163.jpg",          alt: "Customer profile 1"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-brunette-woman-sitting-with-coffee-using-smartphone-cafe-chatting_1258-199048.jpg",          alt: "Customer profile 2"},
        {
          src: "http://img.b2bpic.net/free-photo/young-beautiful-brunette-woman-wearing-casual-sweater-standing-red-background-pointing-fingers-camera-with-happy-funny-face-good-energy-vibes_839833-6469.jpg",          alt: "Customer profile 3"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-young-businesswoman_23-2149153829.jpg",          alt: "Customer profile 4"},
        {
          src: "http://img.b2bpic.net/free-photo/smart-man_1098-14700.jpg",          alt: "Customer profile 5"},
      ]}
      avatarText="Trusted by 10,000+ customers"
      marqueeItems={[
        {
          type: "text",          text: "Free Global Shipping"},
        {
          type: "text",          text: "30-Day Returns"},
        {
          type: "text",          text: "Secure Checkout"},
        {
          type: "text",          text: "24/7 Support"},
        {
          type: "text",          text: "Premium Quality"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Truck,
          title: "Fast Shipping",          description: "Guaranteed arrival within 3-5 business days."},
        {
          icon: ShieldCheck,
          title: "Secure Payments",          description: "100% encrypted transactions for your peace of mind."},
        {
          icon: Award,
          title: "Quality Assured",          description: "Premium standards across every single item."},
      ]}
      title="Why Shop With Us"
      description="We prioritize your experience from checkout to delivery."
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
          id: "1",          name: "Minimalist Watch",          price: "$129.00",          imageSrc: "http://img.b2bpic.net/free-photo/computer-mouse-paper-bag-blue-background-top-view_169016-43225.jpg"},
        {
          id: "2",          name: "Leather Wallet",          price: "$59.00",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-refillable-reusable-container_23-2150936068.jpg"},
        {
          id: "3",          name: "Smart Speaker",          price: "$199.00",          imageSrc: "http://img.b2bpic.net/free-photo/skin-regeneration-product-still-life_23-2151232242.jpg"},
        {
          id: "4",          name: "Ceramic Mug",          price: "$25.00",          imageSrc: "http://img.b2bpic.net/free-photo/blue-model-career-kit-arrangement_23-2150084003.jpg"},
        {
          id: "5",          name: "Travel Pack",          price: "$89.00",          imageSrc: "http://img.b2bpic.net/free-photo/monochrome-beauty-product-skincare_23-2151307291.jpg"},
        {
          id: "6",          name: "Desk Lamp",          price: "$149.00",          imageSrc: "http://img.b2bpic.net/free-photo/cosmetics-product-with-balloons_187299-46268.jpg"},
      ]}
      title="Latest Collections"
      description="Explore our hand-picked selection of premium goods."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "10k+",          title: "Orders Shipped",          description: "Trusted by thousands daily.",          icon: Package,
        },
        {
          id: "m2",          value: "98%",          title: "Customer Satisfaction",          description: "Highly rated service and products.",          icon: Smile,
        },
        {
          id: "m3",          value: "24/7",          title: "Support Availability",          description: "Always here to help you.",          icon: Headphones,
        },
      ]}
      title="Our Impact"
      description="Building trust through excellence and customer satisfaction."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Sarah J.",          handle: "@sarahj",          testimonial: "Excellent product quality and very fast shipping experience.",          imageSrc: "http://img.b2bpic.net/free-photo/teen-age-youth-style-self-expression-concept-portrait-positive-happy-teenage-girl-with-bob-pinkish-hairstyle-facial-piercing-relaxing-indoors_343059-3781.jpg"},
        {
          id: "t2",          name: "Mark D.",          handle: "@markd",          testimonial: "The best ecommerce experience I've had this year.",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-cafe_273609-12702.jpg"},
        {
          id: "t3",          name: "Emma L.",          handle: "@emmal",          testimonial: "Truly premium items that match the photos perfectly.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-doubtful-gloomy-man-looking-left-sighing-uncertain-standing_1258-26776.jpg"},
        {
          id: "t4",          name: "John K.",          handle: "@johnk",          testimonial: "Customer support was very helpful and responsive.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-woman-posing-fashionable-outfit_23-2149021809.jpg"},
        {
          id: "t5",          name: "Rachel P.",          handle: "@rachelp",          testimonial: "Highly recommended for quality and reliability.",          imageSrc: "http://img.b2bpic.net/free-photo/girl-sitting-table-holding-mobile-phone-indoors_171337-17096.jpg"},
      ]}
      title="Customer Stories"
      description="See why our customers love our collections."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "TechCorp",        "DesignLabs",        "GlobalTrends",        "InnovateXYZ",        "FutureReady",        "Nexus",        "Visionary"]}
      title="Trusted Brands"
      description="Proudly partnering with industry leaders."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "Shipping time?",          content: "3-5 business days."},
        {
          id: "f2",          title: "Return policy?",          content: "30-day hassle-free returns."},
        {
          id: "f3",          title: "Global shipping?",          content: "We ship worldwide."},
      ]}
      title="Need Help?"
      description="Common questions about our store and shipping policy."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get in Touch"
      description="Questions? We are here to help."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "How can we help?",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/contemporary-room-workplace-office-supplies-concept_53876-23184.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",              href: "#"},
            {
              label: "Blog",              href: "#"},
          ],
        },
        {
          items: [
            {
              label: "Shipping",              href: "#"},
            {
              label: "Returns",              href: "#"},
          ],
        },
        {
          items: [
            {
              label: "Instagram",              href: "#"},
            {
              label: "Twitter",              href: "#"},
          ],
        },
      ]}
      logoText="E-Store"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}