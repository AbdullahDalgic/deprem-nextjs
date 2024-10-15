"use client";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
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

export default function Layout({
  children,
  footerClass = "black-bg",
  logoWhite,
}: ILayout) {
  dayjs.locale("tr");

  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const { theme: themeMode } = useTheme();
  const theme = createTheme({
    palette: {
      mode: themeMode == "dark-theme" ? "dark" : "light",
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  });

  useEffect(() => {
    dayjs.locale("tr");
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!loading) return;
    try {
      NEXT_API.get("/visitor-log");
    } catch (error) {
      console.error("Failed to log visitor data.");
    }
  }, [loading, pathname]);

  const handleMobileMenuOpen = () => {
    document.body.classList.add("mobile-menu-visible");
  };

  const handleMobileMenuClose = () => {
    document.body.classList.remove("mobile-menu-visible");
  };

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
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== !!scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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

      <Scripts />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NX6P3CKR55"
        strategy="lazyOnload"
        id="google-analytics-script"
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NX6P3CKR55');
          console.log('loaded google analytics');
        `}
      </Script>
    </ThemeProvider>
  );
}
