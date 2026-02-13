import Image from "next/image";
import Link from "next/link";
import { SOCIAL } from "@/utils/constants";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { RiGlobalLine, RiShieldCheckLine, RiFileTextLine, RiContactsLine, RiCodeSSlashLine } from "react-icons/ri";

interface IFooter3 {
  footerClass: string;
  logoWhite: boolean;
}

const getSocialIcon = (key: string) => {
  const lowerKey = key.toLowerCase();
  if (lowerKey.includes("facebook")) return FaFacebook;
  if (lowerKey.includes("twitter") || lowerKey.includes("x")) return FaTwitter;
  if (lowerKey.includes("instagram")) return FaInstagram;
  return RiGlobalLine;
};

export default function Footer3({ footerClass, logoWhite }: IFooter3) {
  return (
    <>
      <footer className={`footer-area ${footerClass} bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-t border-gray-800 dark:border-gray-800`}>
        <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
          {/* Logo and Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-gray-800 dark:border-gray-800">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <Link
                href="/"
                className={logoWhite ? "logo-dark" : "logo-light"}
                title="home"
              >
                <div className="flex items-center gap-3">
                  {/* <Image
                    src={`/assets/img/logo/${
                      logoWhite ? "logo" : "w_logo"
                    }.png`}
                    alt="Logo"
                    width={50}
                    height={50}
                    priority={false}
                    className="w-auto"
                  /> */}
                  <img
                    src={`/assets/img/logo/${logoWhite ? "logo" : "w_logo"
                      }.png`}
                    alt="Logo"
                    style={{ width: "50px", height: "50px" }}
                    className="w-auto"
                  />
                  <h1 className="text-white text-xl md:text-2xl font-bold">
                    Deprem Wiki - Türkiye
                  </h1>
                </div>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-end items-center">
              <div className="flex items-center gap-4">
                {Object.entries(SOCIAL).map(([key, value], i) => {
                  const Icon = getSocialIcon(key);
                  return (
                    <Link
                      key={i}
                      href={value}
                      target="_blank"
                      rel="noreferrer nofollow"
                      aria-label={key}
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 dark:bg-gray-800 border border-gray-700 dark:border-gray-700 text-gray-300 dark:text-gray-400 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200"
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mb-12">
            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-base text-gray-300 dark:text-gray-400 leading-relaxed">
                Depremler, yaşamı etkileyen ciddi doğal afetlerdir. Bu
                nedenle, toplumu bilgilendirmek ve hazırlıklı hale getirmek
                amacıyla geliştirdiğimiz bu açık kaynak yazılımlar ile,
                depremler hakkında en güncel ve doğru bilgileri sağlamayı
                hedeflemektedir. Ayrıca, bu platforma entegre ettiğimiz{" "}
                <Link href="/apps" target="_blank" className="text-primary-400 hover:text-primary-300 dark:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors">
                  tarayıcı uzantısı
                </Link>{" "}
                sayesinde kullanıcılarımız, deprem haberlerine anlık erişim
                sağlayabilir.
              </p>

              <p className="text-sm md:text-base text-gray-300 dark:text-gray-400 leading-relaxed">
                Sosyal medya hesaplarımız (Instagram, Facebook, Twitter)
                aracılığıyla da topluluk ile etkileşimde bulunarak, deprem
                güvenliği ve farkındalığı konusunda bilinçlendirme
                faaliyetleri yürütmekteyiz. Amacımız, her bireyin bu konuda
                bilgi sahibi olması ve olası bir deprem durumuna karşı
                hazırlıklı olmasını sağlamak.
              </p>

              <p className="text-sm md:text-base text-gray-300 dark:text-gray-400 leading-relaxed">
                Birlikte hareket ederek daha güvenli bir toplum oluşturmayı
                umuyoruz. Projemiz hakkında daha fazla bilgi almak veya
                katkıda bulunmak isterseniz, lütfen sosyal medya
                hesaplarımızı takip edin veya iletişime geçin.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 dark:border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Copyright Text */}
              <div className="flex justify-center md:justify-start">
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  © {new Date().getFullYear()}{" "}
                  <Link href="https://deprem.wiki" className="text-primary-400 hover:text-primary-300 dark:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors">
                    deprem.wiki
                  </Link>{" "}
                  - Tüm Hakları Saklıdır.
                </p>
              </div>

              {/* Footer Menu */}
              <div className="flex justify-center md:justify-end">
                <nav className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 sm:gap-2 md:gap-3">
                  <Link
                    href="/sayfalar/gizlilik-politikasi"
                    className="group relative px-2 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-gray-800/50 dark:bg-gray-800/30 border border-gray-700/50 dark:border-gray-700/30 text-xs sm:text-sm text-gray-300 dark:text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 dark:hover:bg-primary/10 dark:hover:border-primary/40 transition-all duration-200 flex items-center gap-1 sm:gap-2 whitespace-nowrap"
                  >
                    <RiShieldCheckLine className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    <span className="font-medium hidden sm:inline">Gizlilik Politikası</span>
                    <span className="font-medium sm:hidden">Gizlilik</span>
                    <span className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm"></span>
                  </Link>
                  <Link
                    href="/sayfalar/kullanim-kosullari"
                    className="group relative px-2 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-gray-800/50 dark:bg-gray-800/30 border border-gray-700/50 dark:border-gray-700/30 text-xs sm:text-sm text-gray-300 dark:text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 dark:hover:bg-primary/10 dark:hover:border-primary/40 transition-all duration-200 flex items-center gap-1 sm:gap-2 whitespace-nowrap"
                  >
                    <RiFileTextLine className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    <span className="font-medium hidden sm:inline">Kullanım Koşulları</span>
                    <span className="font-medium sm:hidden">Koşullar</span>
                    <span className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm"></span>
                  </Link>
                  <Link
                    href="/iletisim"
                    className="group relative px-2 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-gray-800/50 dark:bg-gray-800/30 border border-gray-700/50 dark:border-gray-700/30 text-xs sm:text-sm text-gray-300 dark:text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 dark:hover:bg-primary/10 dark:hover:border-primary/40 transition-all duration-200 flex items-center gap-1 sm:gap-2 whitespace-nowrap"
                  >
                    <RiContactsLine className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    <span className="font-medium">İletişim</span>
                    <span className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm"></span>
                  </Link>
                  <Link
                    href="/gelistiriciler"
                    className="group relative px-2 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-gray-800/50 dark:bg-gray-800/30 border border-gray-700/50 dark:border-gray-700/30 text-xs sm:text-sm text-gray-300 dark:text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 dark:hover:bg-primary/10 dark:hover:border-primary/40 transition-all duration-200 flex items-center gap-1 sm:gap-2 whitespace-nowrap"
                  >
                    <RiCodeSSlashLine className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    <span className="font-medium hidden sm:inline">Geliştiriciler</span>
                    <span className="font-medium sm:hidden">Dev</span>
                    <span className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm"></span>
                  </Link>
                </nav>
              </div>
            </div>

            {/* Developer Credit */}
            <div className="text-center pt-6 border-t border-gray-800 dark:border-gray-800">
              <p className="text-xs text-gray-500 dark:text-gray-600">
                Bu uygulama{" "}
                <Link
                  href={"https://abdullahdalgic.com.tr"}
                  target="_blank"
                  title="Abdullah Dalgıç | Yazılım Geliştirme & Danışmanlık"
                  rel="dofollow"
                  className="text-gray-400 dark:text-gray-500 hover:text-primary-400 dark:hover:text-primary-500 transition-colors font-medium"
                >
                  Abdullah Dalgıç | Yazılım Geliştirme & Danışmanlık
                </Link>{" "}
                tarafından hazırlandı.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
