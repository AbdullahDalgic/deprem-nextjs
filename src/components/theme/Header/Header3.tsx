import { Container } from "@mui/material";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import HeaderTop from "./HeaderTop";

interface IHeader3 {
  scroll: boolean;
  handleMobileMenuOpen: () => void;
  handleMobileMenuClose: () => void;
  langToggle: boolean;
  handleLangToggle: () => void;
  handleSidebarClose: () => void;
  handleSidebarOpen: () => void;
}

export default function Header3({
  scroll,
  handleMobileMenuOpen,
  handleMobileMenuClose,
  handleSidebarOpen,
}: IHeader3) {
  return (
    <>
      <HeaderTop />

      <header className="header__style-two header__style-three">
        <div
          id="header-fixed-height"
          className={`${scroll ? "active-height" : ""}`}
        />
        <div
          id="sticky-header"
          className={`tg-header__area ${scroll ? "sticky-menu" : ""}`}
        >
          <Container maxWidth="lg">
            <Menu
              handleMobileMenuOpen={handleMobileMenuOpen}
              handleSidebarOpen={handleSidebarOpen}
              logoAlt
              white
            />
            <MobileMenu handleMobileMenuClose={handleMobileMenuClose} />
          </Container>
        </div>
      </header>
    </>
  );
}
