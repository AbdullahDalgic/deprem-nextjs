import { useState } from "react";
import { Box, Typography } from "@mui/material";
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
  const [searchToggle, setSearchToggle] = useState(false);
  const searchHandle = () => setSearchToggle(!searchToggle);

  return (
    <>
      <div className="tgmenu__wrap">
        <nav className="tgmenu__nav">
          {logoAlt && (
            <div className="d-flex gap-4 align-items-center">
              <Link href="/" title="home">
                <Box alignItems={"center"} gap={2} display={"flex"}>
                  <Image
                    src={`/assets/img/logo/${white ? "w_logo" : "logo"}.png`}
                    alt="Logo"
                    width={50}
                    height={50}
                    priority={true}
                    style={{ width: "auto" }}
                  />
                  <Typography
                    style={{ color: white ? "#fff" : "#000" }}
                    variant="h5"
                    component={"h1"}
                    fontSize={[16, 18]}
                  >
                    Deprem Wiki - Türkiye
                  </Typography>
                </Box>
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
          <Box
            className="tgmenu__navbar-wrap tgmenu__main-menu"
            display={{ xs: "none", md: "flex" }}
          >
            <ul className="navigation">
              <li>
                <Link href="/">Anasayfa</Link>
              </li>
              <li>
                <Link href="/haberler">Haberler</Link>
              </li>
              <li>
                <Link href="/depremler">Depremler</Link>
              </li>
              <li>
                <Link href="/apps">Uygulamalar</Link>
              </li>
            </ul>
          </Box>
          <div className="tgmenu__action">
            <ul className="list-wrap">
              {/* <li className="mode-switcher">
                <ThemeSwitch />
              </li> */}

              <li className="header-search">
                <Link href="#" aria-label="search">
                  <i
                    className={`${
                      searchToggle ? "far fa-search fa-times" : "far fa-search"
                    } `}
                    onClick={searchHandle}
                  />
                </Link>
                <div className="header__style-two">
                  <div
                    className={`header__top-search ${
                      searchToggle ? "d-block" : "d-none"
                    }`}
                  >
                    <form action="#">
                      <input type="text" placeholder="Search here..." />
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className="mobile-nav-toggler"
          onClick={handleMobileMenuOpen}
          aria-label="Open main navigation"
        >
          <i className="fas fa-bars" />
        </div>
      </div>
    </>
  );
}
