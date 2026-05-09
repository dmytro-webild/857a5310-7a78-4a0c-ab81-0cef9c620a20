"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';

export default function DashboardPage() {
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
              { name: "Home", id: "/" },
              { name: "Dashboard", id: "/dashboard" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="E-Store Admin"
          />
        </div>

        <div id="metrics" data-section="metrics" className="pt-24">
          <MetricCardTwo
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={false}
            title="Product Management Overview"
            description="Real-time inventory and sales metrics."
            metrics={[
              { id: "1", value: "142", description: "Active Products" },
              { id: "2", value: "$12,450", description: "Total Revenue" },
              { id: "3", value: "84%", description: "Stock Efficiency" }
            ]}
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardFour
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            title="Product Inventory"
            description="Manage your catalog items."
            products={[
              { id: "p1", name: "Minimalist Watch", price: "$129", variant: "In Stock", imageSrc: "http://img.b2bpic.net/free-photo/computer-mouse-paper-bag-blue-background-top-view_169016-43225.jpg" },
              { id: "p2", name: "Leather Wallet", price: "$59", variant: "Low Stock", imageSrc: "http://img.b2bpic.net/free-photo/still-life-refillable-reusable-container_23-2150936068.jpg" },
              { id: "p3", name: "Smart Speaker", price: "$199", variant: "In Stock", imageSrc: "http://img.b2bpic.net/free-photo/skin-regeneration-product-still-life_23-2151232242.jpg" }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
            <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Catalog", href: "#" }, { label: "Settings", href: "#" }] }
            ]}
            logoText="E-Store"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}