import Image from "next/image";
import Link from "next/link";
import { SOCIAL } from "@/utils/constants";

interface IFooter3 {
  footerClass: string;
  logoWhite: boolean;
}

export default function Footer3({ footerClass, logoWhite }: IFooter3) {
  return (
    <>
      <footer className={`footer-area ${footerClass}`}>
        <div className="container mx-auto max-w-6xl px-4 mt-8">
          <div className="footer__logo-wrap">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-6">
                <div className="flex justify-center md:justify-start">
                  <Link
                    href="/"
                    className={logoWhite ? "logo-dark" : "logo-light"}
                    title="home"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src={`/assets/img/logo/${
                          logoWhite ? "logo" : "w_logo"
                        }.png`}
                        alt="Logo"
                        width={50}
                        height={50}
                        priority={false}
                        className="w-auto"
                      />

                      <h1 className="text-white text-xl font-bold">
                        Deprem Wiki - Türkiye
                      </h1>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end">
                <div className="footer__social">
                  <ul className="list-wrap">
                    {Object.entries(SOCIAL).map(([key, value], i) => (
                      <li key={i}>
                        <Link href={value} target="_blank" rel="noreferrer nofollow" aria-label={key}>
                          <i className={`fab fa-${key}`} /> {key}{" "}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-span-12">
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-300 dark:text-gray-400">
                    Depremler, yaşamı etkileyen ciddi doğal afetlerdir. Bu
                    nedenle, toplumu bilgilendirmek ve hazırlıklı hale getirmek
                    amacıyla geliştirdiğimiz bu açık kaynak yazılımlar ile,
                    depremler hakkında en güncel ve doğru bilgileri sağlamayı
                    hedeflemektedir. Ayrıca, bu platforma entegre ettiğimiz{" "}
                    <Link href="/apps" target="_blank" className="text-gray-400 hover:text-gray-300">
                      tarayıcı uzantısı
                    </Link>{" "}
                    sayesinde kullanıcılarımız, deprem haberlerine anlık erişim
                    sağlayabilir.
                  </p>

                  <p className="text-sm text-gray-300 dark:text-gray-400">
                    Sosyal medya hesaplarımız (Instagram, Facebook, Twitter)
                    aracılığıyla da topluluk ile etkileşimde bulunarak, deprem
                    güvenliği ve farkındalığı konusunda bilinçlendirme
                    faaliyetleri yürütmekteyiz. Amacımız, her bireyin bu konuda
                    bilgi sahibi olması ve olası bir deprem durumuna karşı
                    hazırlıklı olmasını sağlamak.
                  </p>

                  <p className="text-sm text-gray-300 dark:text-gray-400">
                    Birlikte hareket ederek daha güvenli bir toplum oluşturmayı
                    umuyoruz. Projemiz hakkında daha fazla bilgi almak veya
                    katkıda bulunmak isterseniz, lütfen sosyal medya
                    hesaplarımızı takip edin veya iletişime geçin.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-4 flex justify-center md:justify-start">
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  © {new Date().getFullYear()}{" "}
                  <Link href="https://deprem.wiki" className="text-gray-400 hover:text-gray-300">
                    deprem.wiki
                  </Link>{" "}
                  - Tüm Hakları Saklıdır.
                </p>
              </div>
              <div className="col-span-12 md:col-span-8 flex justify-center md:justify-end">
                <div className="copyright__menu">
                  <ul className="list-wrap">
                    <li>
                      <Link href="/sayfalar/gizlilik-politikasi">
                        Gizlilik Politikası
                      </Link>
                    </li>
                    <li>
                      <Link href="/sayfalar/kullanim-kosullari">
                        Kullanım Koşulları
                      </Link>
                    </li>
                    <li>
                      <Link href="/iletisim">İletişim</Link>
                    </li>
                    <li>
                      <Link href="/gelistiriciler">Geliştiriciler</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
              Bu uygulama{" "}
              <Link
                href={"https://abdullahdalgic.com.tr"}
                target="_blank"
                title="Abdullah Dalgıç | Yazılım Geliştirme & Danışmanlık"
                rel="dofollow"
                className="hover:text-gray-300"
              >
                Abdullah Dalgıç | Yazılım Geliştirme & Danışmanlık
              </Link>{" "}
              tarafından hazırlandı.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
