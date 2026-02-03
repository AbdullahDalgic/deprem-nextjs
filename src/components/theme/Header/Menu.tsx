"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiHomeLine, RiNewspaperLine, RiEarthquakeLine, RiInformationLine, RiAppsLine, RiSearchLine } from "react-icons/ri";
import { IconType } from "react-icons";
// import ThemeSwitch from "@/components/elements/ThemeSwitch";

interface IMenu {
  handleMobileMenuOpen: () => void;
  handleSidebarOpen: () => void;
  offCanvasNav?: boolean;
  logoAlt?: boolean;
  white?: boolean;
}

interface MenuItem {
  href: string;
  label: string;
  mobileLabel?: string; // Mobilde farklı label gösterilecekse
  icon: IconType;
}

export default function Menu({
  handleMobileMenuOpen,
  handleSidebarOpen,
  offCanvasNav,
  logoAlt,
  white,
}: IMenu) {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  const menuItems: MenuItem[] = [
    { href: "/", label: "Anasayfa", icon: RiHomeLine },
    { href: "/haberler", label: "Haberler", icon: RiNewspaperLine },
    { href: "/depremler", label: "Depremler", icon: RiEarthquakeLine },
    { href: "/hakkimizda", label: "Hakkımızda", icon: RiInformationLine },
    { href: "/apps", label: "Uygulamalar", mobileLabel: "Apps", icon: RiAppsLine },
    { href: "/ara", label: "Ara", icon: RiSearchLine },
  ];
  return (
    <>
      <div className="tgmenu__wrap">
        <nav className="tgmenu__nav">
          {logoAlt && (
            <div className="flex gap-4 items-center">
              <Link href="/" title="home">
                <div className="flex items-center gap-2">
                  <Image
                    src={`/assets/img/logo/${white ? "w_logo" : "logo"}.png`}
                    alt="Logo"
                    width={50}
                    height={50}
                    priority={true}
                    className="w-auto"
                  />
                  <h1
                    className={`text-base sm:text-lg font-bold ${white ? "text-white" : "text-black dark:text-white"
                      }`}
                  >
                    Deprem Wiki - Türkiye
                  </h1>
                </div>
              </Link>
            </div>
          )}
          {offCanvasNav && (
            <div className="offcanvas-toggle" onClick={handleSidebarOpen}>
              <a href="#" aria-label="offcanvas toggle">
                <i className="flaticon-menu-bar" />
              </a>
            </div>
          )}
          <div className="tgmenu__navbar-wrap tgmenu__main-menu ml-auto">
            <nav className="flex items-center gap-0.5 lg:gap-1 xl:gap-1 flex-wrap justify-end" style={{ margin: '0 0 0 auto' }}>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={true}
                    className={`group relative px-1.5 lg:px-2.5 xl:px-3 py-1.5 lg:py-2 rounded-lg transition-all duration-200 flex items-center gap-0.5 lg:gap-1.5 xl:gap-2 font-medium text-xs lg:text-sm whitespace-nowrap ${
                      active
                        ? "text-white bg-primary/20 dark:bg-primary/30 font-semibold"
                        : "text-gray-200 dark:text-gray-300 hover:text-white hover:bg-white/10 dark:hover:bg-white/5"
                    }`}
                  >
                    <Icon className={`w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 flex-shrink-0 hidden lg:block transition-opacity ${
                      active ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                    }`} />
                    {item.mobileLabel ? (
                      <>
                        <span className="hidden xl:inline">{item.label}</span>
                        <span className="xl:hidden">{item.mobileLabel}</span>
                      </>
                    ) : (
                      <span>{item.label}</span>
                    )}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-200 ${
                      active ? "w-full" : "w-0 group-hover:w-3/4"
                    }`}></span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </nav>
        <div
          className="mobile-nav-toggler"
          onClick={handleMobileMenuOpen}
          title="Open main navigation"
        >
          <i className="fas fa-bars" />
        </div>
      </div>
    </>
  );
}
