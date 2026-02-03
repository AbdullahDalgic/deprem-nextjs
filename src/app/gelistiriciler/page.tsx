import Breadcrumb from "@/components/theme/Breadcrumb";
import { SITE_URL, EMAIL } from "@/utils/constants";
import SeoData from "@/utils/helpers/seo";
import {
  RiCodeSSlashLine,
  RiGitRepositoryLine,
  RiMailLine,
  RiGithubFill,
  RiCodeBoxLine
} from "react-icons/ri";
import { AiOutlineApi } from "react-icons/ai";
import Link from "next/link";
import ShowMail from "@/components/pages/Contact/ShowMail";

export const generateMetadata = async () => {
  return SeoData({
    title: "Geliştiriciler - Deprem Wiki",
    description: "Deprem Wiki API ve geliştirici kaynakları. Deprem verilerine erişmek için API ve webhook talepleri ile bizimle iletişime geçin.",
    url: `${SITE_URL}/gelistiriciler`,
  });
};

export default function Developers() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <Breadcrumb
          breadcrumbPostTitle="Geliştiriciler"
          breadcrumbPostUrl="/gelistiriciler"
        />
      </div>

      <section className="py-8 md:py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 dark:bg-primary/20 mb-6">
              <RiCodeSSlashLine className="text-4xl text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Geliştiriciler İçin
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Deprem verilerine erişmek ve projeye katkıda bulunmak için geliştirici kaynaklarımızı keşfedin
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Açık Kaynak */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-6 md:px-8 py-8 md:py-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <RiGitRepositoryLine className="text-2xl text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      Açık Kaynak Proje
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Açık kaynak yazılımlar, teknoloji dünyasında birlikte çalışmanın ve bilgi paylaşımının en önemli örneklerinden biridir. Bu projeye destek vermek isteyen geliştiriciler, katkıda bulunarak deprem bilgilerini daha erişilebilir hale getirmek için büyük bir fırsata sahiptir.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <RiGithubFill className="text-lg" />
                      <span>Proje açık kaynak olarak geliştirilmektedir</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* API ve Webhook */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-6 md:px-8 py-8 md:py-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <AiOutlineApi className="text-2xl text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      API ve Webhook Erişimi
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      Deprem verilerine erişmek isteyen geliştiriciler, API ve webhook talepleri ile bizimle iletişime geçebilir. Bu sayede, kendi uygulamalarında bu değerli bilgileri kullanabilirler.
                    </p>

                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <RiCodeBoxLine className="text-primary" />
                          API Endpoint'leri
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 ml-6">
                          <li className="list-disc">
                            <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">GET /api/earthquakes</code> - Deprem listesi
                          </li>
                          <li className="list-disc">
                            <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">GET /api/earthquakes/scan</code> - Direkt API çağrısı
                          </li>
                          <li className="list-disc">
                            <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">GET /api/earthquakes/providers</code> - Provider listesi
                          </li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Özellikler
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 ml-6">
                          <li className="list-disc">Pagination desteği</li>
                          <li className="list-disc">Filtreleme (provider, büyüklük, tarih)</li>
                          <li className="list-disc">Sıralama seçenekleri</li>
                          <li className="list-disc">JSON formatında yanıt</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* İletişim */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-6 md:px-8 py-8 md:py-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <RiMailLine className="text-2xl text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      İletişime Geçin
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      API erişimi, webhook entegrasyonu veya projeye katkıda bulunmak için bizimle iletişime geçebilirsiniz. Birlikte, daha güvenli bir toplum oluşturmak için iş birliği yapalım!
                    </p>

                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        <strong className="text-gray-900 dark:text-white">E-posta:</strong>{" "}
                        <ShowMail />
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        API ve webhook talepleri için lütfen e-posta gönderin. Talebinizde kullanım amacınızı ve gereksinimlerinizi belirtmeyi unutmayın.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Katkıda Bulunma */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-lg border border-primary/20 dark:border-primary/30 overflow-hidden">
              <div className="px-6 md:px-8 py-8 md:py-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Katkıda Bulunun
                </h2>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Projeye katkıda bulunmak için GitHub repository'mizi ziyaret edebilir, issue açabilir veya pull request gönderebilirsiniz. Her katkı, deprem bilincini artırmak için değerlidir.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="https://github.com/depremwiki"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                  >
                    <RiGithubFill className="text-xl" />
                    <span>GitHub'da Görüntüle</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
