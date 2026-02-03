import Breadcrumb from "@/components/theme/Breadcrumb";
import SeoData from "@/utils/helpers/seo";
import {
  APP_NAME,
  AUTHOR,
  LOGO,
  META,
  SITE_URL,
  SOCIAL,
} from "@/utils/constants";
import CustomLink from "@/components/elements/CustomLink";
import { RiEarthquakeLine, RiTeamLine, RiHeartLine, RiShieldCheckLine, RiGlobalLine } from "react-icons/ri";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export const generateMetadata = async () => {
  return SeoData({
    title: "Hakkımızda - Deprem Wiki",
    url: `${SITE_URL}/hakkimizda`,
    description:
      "Deprem Wiki, tamamen ücretsiz olarak sunulan, deprem haberlerine anlık erişim sağlayan ve deprem güvenliğini artırmayı amaçlayan sosyal sorumluluk projesidir.",
  });
};

export default function About() {
  const jsonTld = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: APP_NAME,
    operatingSystem: "Web, Android, iOS, Browser Extensions",
    applicationCategory: "NewsApplication",
    description: META.description,
    image: LOGO.white,
    url: "https://deprem.wiki",
    datePublished: "2025-04-14",
    creator: {
      "@type": "Person",
      name: AUTHOR,
      url: "https://abdullahdalgic.com.tr",
    },
    isAccessibleForFree: true,
    license: "https://opensource.org/licenses",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY",
    },
    inLanguage: "tr",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1000",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://deprem.wiki/ara?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonTld) }}
      />

      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <Breadcrumb
          breadcrumbPostTitle="Hakkımızda"
          breadcrumbPostUrl="/hakkimizda"
        />
      </div>

      <section className="py-8 md:py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 dark:bg-primary/20 mb-6">
              <RiEarthquakeLine className="text-4xl text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Hakkımızda
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Deprem bilincini artırmak ve toplumu bilgilendirmek için çalışan bir sosyal sorumluluk projesi
            </p>
          </div>

          {/* Ana İçerik */}
          <div className="max-w-4xl mx-auto">
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-6 md:px-8 py-8 md:py-10">
                {/* Giriş Paragrafı */}
                <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Depremler, yaşamı derinden etkileyen ciddi doğal afetlerdir.
                    Bu bilinçle hayata geçen <strong className="text-gray-900 dark:text-white">Deprem Wiki</strong>, deprem
                    haberlerini anlık ve doğru şekilde sunan; web sitesi, sosyal
                    medya hesapları, mobil uygulamalar ve tarayıcı uzantıları
                    aracılığıyla toplumu bilgilendiren yenilikçi bir platformdur.
                  </p>

                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    İlk yayını <strong className="text-gray-900 dark:text-white">Temmuz 2023</strong>'te gerçekleştiren
                    projemiz, Hatay'da depremden etkilenen bir depremzede olan
                    yazılımcı{" "}
                    <CustomLink
                      href="https://abdullahdalgic.com.tr"
                      target="_blank"
                      doFollow={true}
                      className="text-primary hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                    >
                      Abdullah Dalgıç
                    </CustomLink>
                    'ın önderliğinde, deprem bilincini toplumda artırmak ve
                    güvenli yaşam alanları oluşturmak amacıyla hayata
                    geçirilmiştir.
                  </p>

                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Abdullah Dalgıç, yaşadığı acıyı toplumla paylaşarak, deprem
                    güvenliğine dair farkındalığı artırmak ve her bireyin
                    hazırlıklı olmasını sağlamak için bu projeyi sosyal sorumluluk
                    ruhuyla geliştirmiştir. Projemiz, en güncel deprem haberlerine
                    ve gelişmelere ulaşmanızı sağlarken;{" "}
                    <CustomLink 
                      title="Instagram" 
                      href={SOCIAL.instagram}
                      className="text-primary hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                    />,{" "}
                    <CustomLink 
                      title="Facebook" 
                      href={SOCIAL.facebook}
                      className="text-primary hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                    />,{" "}
                    <CustomLink 
                      title="Twitter" 
                      href={SOCIAL.twitter}
                      className="text-primary hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                    /> gibi
                    sosyal medya platformları üzerinden de sizlere destek
                    olmaktadır.
                  </p>

                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Amacımız; birlikte hareket ederek, toplumun her kesiminin
                    deprem konusunda bilgi sahibi olmasını ve olası risklere karşı
                    hazırlıklı olmasını sağlamaktır. Daha fazla bilgi almak,
                    projeye katkıda bulunmak veya destek olmak için{" "}
                    <CustomLink 
                      href="https://deprem.wiki"
                      className="text-primary hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                    >
                      web sitemiz
                    </CustomLink>{" "}
                    ve{" "}
                    <CustomLink
                      href="https://abdullahdalgic.com.tr"
                      target="_blank"
                      className="text-primary hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                    >
                      kişisel web sayfamız
                    </CustomLink>{" "}
                    üzerinden bizlere ulaşabilirsiniz.
                  </p>
                </div>

                {/* Değerlerimiz */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <RiHeartLine className="text-primary" />
                    Değerlerimiz
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                        <RiShieldCheckLine className="text-xl text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Güvenilirlik</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Doğru ve güncel bilgi sunmak için sürekli çalışıyoruz
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                        <RiGlobalLine className="text-xl text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Erişilebilirlik</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Herkesin ücretsiz erişebileceği bir platform sunuyoruz
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                        <RiTeamLine className="text-xl text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Toplumsal Sorumluluk</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Deprem bilincini artırmak için sosyal sorumluluk projesi olarak çalışıyoruz
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                        <RiHeartLine className="text-xl text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Şeffaflık</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Tüm işlemlerimizde şeffaf ve açık olmayı benimsiyoruz
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sosyal Medya */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Bizi Takip Edin
                  </h2>
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={SOCIAL.instagram}
                      target="_blank"
                      rel="noreferrer nofollow"
                      className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                    >
                      <FaInstagram className="text-xl" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href={SOCIAL.facebook}
                      target="_blank"
                      rel="noreferrer nofollow"
                      className="flex items-center gap-3 px-5 py-3 bg-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                    >
                      <FaFacebook className="text-xl" />
                      <span>Facebook</span>
                    </a>
                    <a
                      href={SOCIAL.twitter}
                      target="_blank"
                      rel="noreferrer nofollow"
                      className="flex items-center gap-3 px-5 py-3 bg-sky-500 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                    >
                      <FaTwitter className="text-xl" />
                      <span>Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
