import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiHomeLine, RiNewspaperLine, RiEarthquakeLine, RiInformationLine, RiAppsLine, RiSearchLine } from "react-icons/ri";
// import ThemeSwitch from "@/components/elements/ThemeSwitch";

interface IMenu {
  handleMobileMenuOpen: () => void;
  handleSidebarOpen: () => void;
  offCanvasNav?: boolean;
  logoAlt?: boolean;
  white?: boolean;
}

export default function Menu({
  handleMobileMenuOpen,
  handleSidebarOpen,
  offCanvasNav,
  logoAlt,
  white,
}: IMenu) {
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
              <Link
                href="/"
                prefetch={true}
                className="group relative px-1.5 lg:px-2.5 xl:px-3 py-1.5 lg:py-2 rounded-lg text-gray-200 dark:text-gray-300 hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-200 flex items-center gap-0.5 lg:gap-1.5 xl:gap-2 font-medium text-xs lg:text-sm whitespace-nowrap"
              >
                <RiHomeLine className="w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0 hidden lg:block" />
                <span>Anasayfa</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-200"></span>
              </Link>
              <Link
                href="/haberler"
                prefetch={true}
                className="group relative px-1.5 lg:px-2.5 xl:px-3 py-1.5 lg:py-2 rounded-lg text-gray-200 dark:text-gray-300 hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-200 flex items-center gap-0.5 lg:gap-1.5 xl:gap-2 font-medium text-xs lg:text-sm whitespace-nowrap"
              >
                <RiNewspaperLine className="w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0 hidden lg:block" />
                <span>Haberler</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-200"></span>
              </Link>
              <Link
                href="/depremler"
                prefetch={true}
                className="group relative px-1.5 lg:px-2.5 xl:px-3 py-1.5 lg:py-2 rounded-lg text-gray-200 dark:text-gray-300 hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-200 flex items-center gap-0.5 lg:gap-1.5 xl:gap-2 font-medium text-xs lg:text-sm whitespace-nowrap"
              >
                <RiEarthquakeLine className="w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0 hidden lg:block" />
                <span>Depremler</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-200"></span>
              </Link>
              <Link
                href="/hakkimizda"
                prefetch={true}
                className="group relative px-1.5 lg:px-2.5 xl:px-3 py-1.5 lg:py-2 rounded-lg text-gray-200 dark:text-gray-300 hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-200 flex items-center gap-0.5 lg:gap-1.5 xl:gap-2 font-medium text-xs lg:text-sm whitespace-nowrap"
              >
                <RiInformationLine className="w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0 hidden lg:block" />
                <span>Hakkımızda</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-200"></span>
              </Link>
              <Link
                href="/apps"
                prefetch={true}
                className="group relative px-1.5 lg:px-2.5 xl:px-3 py-1.5 lg:py-2 rounded-lg text-gray-200 dark:text-gray-300 hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-200 flex items-center gap-0.5 lg:gap-1.5 xl:gap-2 font-medium text-xs lg:text-sm whitespace-nowrap"
              >
                <RiAppsLine className="w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0 hidden lg:block" />
                <span className="hidden xl:inline">Uygulamalar</span>
                <span className="xl:hidden">Apps</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-200"></span>
              </Link>
              <Link
                href="/ara"
                prefetch={true}
                className="group relative px-1.5 lg:px-2.5 xl:px-3 py-1.5 lg:py-2 rounded-lg text-gray-200 dark:text-gray-300 hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-200 flex items-center gap-0.5 lg:gap-1.5 xl:gap-2 font-medium text-xs lg:text-sm whitespace-nowrap"
              >
                <RiSearchLine className="w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0 hidden lg:block" />
                <span>Ara</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-200"></span>
              </Link>
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
