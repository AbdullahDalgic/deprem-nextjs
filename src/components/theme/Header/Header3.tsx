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

      <header className="header__style-two header__style-three bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 border-b border-gray-700 dark:border-gray-800">
        <div
          id="header-fixed-height"
          className={`${scroll ? "active-height" : ""}`}
        />
        <div
          id="sticky-header"
          className={`tg-header__area ${scroll ? "sticky-menu bg-gray-900 dark:bg-gray-950" : ""}`}
        >
          <div className="container mx-auto max-w-6xl px-4">
            <Menu
              handleMobileMenuOpen={handleMobileMenuOpen}
              handleSidebarOpen={handleSidebarOpen}
              logoAlt
              white
            />
            <MobileMenu handleMobileMenuClose={handleMobileMenuClose} />
          </div>
        </div>
      </header>
    </>
  );
}
