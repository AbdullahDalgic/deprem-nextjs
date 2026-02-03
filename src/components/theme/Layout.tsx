"use client";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { usePathname } from "next/navigation";
import useTheme from "@/utils/store";
import React from "react";
import Header3 from "./Header/Header3";
import Footer3 from "./Footer/Footer3";
import BackToTop from "@/components/elements/BackToTop";
import NEXT_API from "@/utils/api/apiConfigNextjs";
import "dayjs/locale/tr";
import Scripts from "./Scripts";
import Script from "next/script";
import {
  APP_NAME,
  APPS,
  AUTHOR,
  LOGO,
  META,
  PUBLISHER,
} from "@/utils/constants";

interface ILayout {
  children: React.ReactNode;
  headerStyle?: number;
  footerStyle?: number;
  breadcrumbCategory?: string;
  breadcrumbCategoryLink?: string;
  breadcrumbPostUrl?: string;
  breadcrumbPostTitle?: string;
  footerClass?: string;
  headTitle?: string;
  logoWhite?: boolean;
}

const jsonLdMobileApp = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: APP_NAME,
  operatingSystem: "iOS, Android",
  applicationCategory: "NewsApplication",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1000",
  },
  isAccessibleForFree: true,
  license: "https://opensource.org/licenses",
  offers: {
    "@type": "Offer",
    price: 0,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  description: META.description,
  image: LOGO.white,
  author: {
    "@type": "Person",
    name: AUTHOR,
  },
  publisher: {
    "@type": "Organization",
    name: PUBLISHER,
  },
  downloadUrl: [APPS.android, APPS.apple],
  sameAs: [APPS.android, APPS.apple],
};

export default function Layout({
  children,
  footerClass = "black-bg",
  logoWhite,
}: ILayout) {
  dayjs.locale("tr");

  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const { theme: themeMode } = useTheme();

  // Dark mode class'ını html elementine ekle/kaldır
  useEffect(() => {
    const root = document.documentElement;
    if (themeMode === "dark-theme") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [themeMode]);

  useEffect(() => {
    dayjs.locale("tr");
    setLoading(true);
  }, []);

  // Visitor log - debounce ile optimize edildi
  useEffect(() => {
    if (!loading) return;
    
    // Debounce için timer
    const timer = setTimeout(() => {
      try {
        NEXT_API.get("/visitor-log").catch(() => {
          // Silent fail - visitor log kritik değil
        });
      } catch (error) {
        // Silent fail
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [loading, pathname]);

  const handleMobileMenuOpen = () => {
    document.body.classList.add("mobile-menu-visible");
  };

  const handleMobileMenuClose = () => {
    document.body.classList.remove("mobile-menu-visible");
    // Ensure backdrop is also removed
    if (typeof window !== "undefined") {
      const backdrop = document.querySelector(".mobile-menu-backdrop");
      if (backdrop) {
        backdrop.classList.remove("opacity-100", "pointer-events-auto", "visible");
        backdrop.classList.add("opacity-0", "pointer-events-none");
      }
    }
  };

  // Clean up on mount/unmount
  useEffect(() => {
    // Remove mobile menu class on mount if it exists
    if (typeof document !== "undefined") {
      document.body.classList.remove("mobile-menu-visible");
    }
    
    return () => {
      // Clean up on unmount
      if (typeof document !== "undefined") {
        document.body.classList.remove("mobile-menu-visible");
      }
    };
  }, []);

  const handleSidebarOpen = () => {
    document.body.classList.add("offCanvas__menu-visible");
  };

  const handleSidebarClose = () => {
    document.body.classList.remove("offCanvas__menu-visible");
  };

  //Language Toggle
  const [langToggle, setLangToggle] = useState(false);
  const handleLangToggle = () => setLangToggle(!langToggle);
  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 100;
      setScroll((prev) => {
        if (scrollCheck !== prev) {
          return scrollCheck;
        }
        return prev;
      });
    };

    // Throttle için
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header3
        handleMobileMenuOpen={handleMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        scroll={scroll}
        langToggle={langToggle}
        handleLangToggle={handleLangToggle}
        handleSidebarOpen={handleSidebarOpen}
        handleSidebarClose={handleSidebarClose}
      />

      <main className="main">{children}</main>

      <Footer3 footerClass={footerClass} logoWhite={!!logoWhite} />
      <BackToTop />

      <a
        rel="me"
        href="https://sosyal.teknofest.app/@depremwiki"
        className="hidden"
      >
        teknofest sosyal
      </a>

      <Script
        id="mobile-app-ld+json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMobileApp) }}
      />

      <Scripts />
    </div>
  );
}
