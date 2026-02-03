import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
          <div className="hidden md:flex tgmenu__navbar-wrap tgmenu__main-menu ml-auto">
            <ul className="navigation" style={{ margin: '0 0 0 auto' }}>
              <li>
                <Link href="/" prefetch={true}>Anasayfa</Link>
              </li>
              <li>
                <Link href="/haberler" prefetch={true}>Haberler</Link>
              </li>
              <li>
                <Link href="/depremler" prefetch={true}>Depremler</Link>
              </li>
              <li>
                <Link href="/hakkimizda" prefetch={true}>Hakkımızda</Link>
              </li>
              <li>
                <Link href="/apps" prefetch={true}>Uygulamalar</Link>
              </li>
              <li>
                <Link href="/ara" prefetch={true}>Ara</Link>
              </li>
            </ul>
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
