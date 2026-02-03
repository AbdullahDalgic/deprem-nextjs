import SectionTitle from "@/components/elements/SectionTitle";
import Breadcrumb from "@/components/theme/Breadcrumb";
import ShowMail from "@/components/pages/Contact/ShowMail";
import SeoData from "@/utils/helpers/seo";
import { SITE_URL, EMAIL, SOCIAL } from "@/utils/constants";
import { 
  RiMailLine, 
  RiGlobalLine, 
  RiMessage3Line,
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill
} from "react-icons/ri";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const generateMetadata = async () => {
  return SeoData({
    title: "İletişim - Deprem Wiki",
    description: "Deprem Wiki ile iletişime geçin. Sorularınız, önerileriniz veya destek talepleriniz için bizimle iletişime geçebilirsiniz.",
    url: `${SITE_URL}/iletisim`,
  });
};

export default function Contact() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <Breadcrumb
          breadcrumbPostTitle="İletişim"
          breadcrumbPostUrl="/iletisim"
        />
      </div>

      <section className="py-8 md:py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 dark:bg-primary/20 mb-6">
              <RiMessage3Line className="text-4xl text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              İletişim
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Sorularınız, önerileriniz veya destek talepleriniz için bizimle iletişime geçebilirsiniz
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* İletişim Bilgileri Kartı */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
              <div className="px-6 md:px-8 py-8 md:py-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <RiMailLine className="text-primary" />
                  İletişim Bilgileri
                </h2>

                <div className="space-y-6">
                  {/* E-posta */}
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                      <RiMailLine className="text-xl text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">E-posta</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong className="text-gray-900 dark:text-white">E-posta:</strong>{" "}
                        <ShowMail />
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Bizimle iletişime geçmek için yukarıdaki e-posta adresine mail atabilirsiniz.
                      </p>
                    </div>
                  </div>

                  {/* Web Sitesi */}
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                      <RiGlobalLine className="text-xl text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Web Sitesi</h3>
                      <a
                        href="https://deprem.wiki"
                        target="_blank"
                        rel="noreferrer nofollow"
                        className="text-primary hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                      >
                        https://deprem.wiki
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Web sitemizden güncel deprem haberlerine ve bilgilere ulaşabilirsiniz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sosyal Medya */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-6 md:px-8 py-8 md:py-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Sosyal Medya
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Bizi sosyal medya platformlarında takip ederek güncel haberlerden haberdar olabilirsiniz.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                  >
                    <FaInstagram className="text-xl" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={SOCIAL.facebook}
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                  >
                    <FaFacebook className="text-xl" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href={SOCIAL.twitter}
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="flex items-center gap-3 px-6 py-3 bg-sky-500 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                  >
                    <FaTwitter className="text-xl" />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
