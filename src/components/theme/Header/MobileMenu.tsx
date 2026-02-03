"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { generateAssetsUrl, generateSearchLink } from "@/utils/helpers/urls";
import { APP_LINKS, APP_SOCIALS } from "@/utils/constants/links";
import { RiHomeLine, RiNewspaperLine, RiEarthquakeLine, RiAppsLine, RiCloseLine, RiSearchLine } from "react-icons/ri";
import { FaChrome, FaGooglePlay, FaAppStore, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiMicrosoftedge } from "react-icons/si";

interface IMobileMenu {
  handleMobileMenuClose: () => void;
}

const MobileMenu = ({ handleMobileMenuClose }: IMobileMenu) => {
  const pathname = usePathname();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(generateSearchLink(searchTerm.trim()));
      handleMobileMenuClose();
    }
  };

  const isActive = (path: string) => pathname === path;

  const menuItems = [
    { href: "/", label: "Anasayfa", icon: RiHomeLine },
    { href: "/haberler", label: "Haberler", icon: RiNewspaperLine },
    { href: "/depremler", label: "Depremler", icon: RiEarthquakeLine },
    { href: "/apps", label: "Uygulamalar", icon: RiAppsLine },
    { href: "/ara", label: "Ara", icon: RiSearchLine },
  ];

  const getAppIcon = (title: string) => {
    if (title.includes("Chrome")) return FaChrome;
    if (title.includes("Edge")) return SiMicrosoftedge;
    if (title.includes("Android") || title.includes("Google Play")) return FaGooglePlay;
    if (title.includes("Apple") || title.includes("App Store")) return FaAppStore;
    return null;
  };

  const getSocialIcon = (title: string) => {
    if (title.includes("Facebook")) return FaFacebook;
    if (title.includes("Twitter") || title.includes("X")) return FaTwitter;
    if (title.includes("Instagram")) return FaInstagram;
    return null;
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[98] transition-opacity duration-300 opacity-0 pointer-events-none mobile-menu-backdrop"
        onClick={handleMobileMenuClose}
      />

      {/* Mobile Menu */}
      <div className="fixed right-0 top-0 h-full w-[320px] max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl z-[99] transform translate-x-full transition-transform duration-300 ease-out overflow-y-auto mobile-menu-slide">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <Link href="/" onClick={handleMobileMenuClose} className="flex items-center gap-2">
              <Image
                src={generateAssetsUrl(`/assets/img/logo/logo.png`)}
                alt="Logo"
                width={40}
                height={40}
                priority={false}
                className="w-auto h-10 dark:hidden"
              />
              <Image
                src={generateAssetsUrl(`/assets/img/logo/w_logo.png`)}
                alt="Logo"
                width={40}
                height={40}
                priority={false}
                className="w-auto h-10 hidden dark:block"
              />
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Deprem Wiki
              </span>
            </Link>

            {/* Close Button */}
            <button
              onClick={handleMobileMenuClose}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Menüyü Kapat"
            >
              <RiCloseLine className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Search Box */}
        <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSearch} className="space-y-3">
            <label htmlFor="mobile-search" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              <span className="flex items-center gap-2">
                <RiSearchLine className="text-primary text-lg" />
                <span>Ara</span>
              </span>
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="mobile-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Deprem Wiki'de Ara..."
                className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors flex items-center justify-center"
                aria-label="Ara"
              >
                <RiSearchLine className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-2">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={handleMobileMenuClose}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      active
                        ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-400 font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-base">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Apps & Social Links */}
        <div className="px-4 py-6 border-t border-gray-200 dark:border-gray-700 mt-auto">
          {/* Apps Section */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-4">
              Uygulamalar
            </h3>
            <div className="flex flex-wrap gap-3 px-4">
              {APP_LINKS.map((app, index) => {
                const Icon = getAppIcon(app.title);
                return (
                  <Link
                    key={index}
                    href={app.link}
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/20 border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-200 group"
                    title={app.title}
                  >
                    {Icon ? (
                      <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary-400 transition-colors" />
                    ) : (
                      <Image
                        src={app.image}
                        alt={app.title}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 dark:bg-gray-700 my-6" />

          {/* Social Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-4">
              Sosyal Medya
            </h3>
            <div className="flex flex-wrap gap-3 px-4">
              {APP_SOCIALS.map((social, index) => {
                const Icon = getSocialIcon(social.title);
                const getSocialColor = (title: string) => {
                  if (title.includes("Facebook")) return "hover:bg-blue-500 hover:border-blue-500";
                  if (title.includes("Twitter") || title.includes("X")) return "hover:bg-black dark:hover:bg-white hover:border-black dark:hover:border-white";
                  if (title.includes("Instagram")) return "hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:border-transparent";
                  return "";
                };
                return (
                  <Link
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer nofollow"
                    className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-200 group ${getSocialColor(social.title)}`}
                    title={social.title}
                  >
                    {Icon ? (
                      <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                    ) : (
                      <Image
                        src={social.image}
                        alt={social.title}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
