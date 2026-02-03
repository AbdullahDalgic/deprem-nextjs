import Image from "next/image";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import SeoData from "@/utils/helpers/seo";
import { APPS } from "@/utils/constants";
import Breadcrumb from "@/components/theme/Breadcrumb";
import { SITE_URL } from "@/utils/constants";
import {
  RiSmartphoneLine,
  RiGlobalLine,
  RiNotificationLine,
  RiSettingsLine,
  RiChromeFill,
  // RiMicrosoftEdgeFill
} from "react-icons/ri";
import { FaEdge } from "react-icons/fa6";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";

export async function generateMetadata() {
  return SeoData({
    title: "Uygulamalar - Deprem Wiki",
    description: "Deprem Wiki mobil uygulamaları ve tarayıcı eklentileri hakkında bilgi alabilirsiniz. Android, iOS ve Chrome/Edge eklentileri.",
    image: "https://deprem.wiki/assets/img/apps/extension/extension-img-1.png",
    url: `${SITE_URL}/apps`,
  });
}

export default function Apps() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <Breadcrumb
          breadcrumbPostTitle="Uygulamalar"
          breadcrumbPostUrl="/apps"
        />
      </div>

      <section className="py-8 md:py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 dark:bg-primary/20 mb-6">
              <RiSmartphoneLine className="text-4xl text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Deprem Wiki Uygulamaları
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Depremleri anlık takip etmek için mobil uygulamalarımız ve tarayıcı eklentilerimizi keşfedin
            </p>
          </div>

          <div className="space-y-8">
            {/* Mobil Uygulama */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-6 md:px-8 py-8 md:py-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <RiSmartphoneLine className="text-2xl text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      Deprem Wiki Mobil Uygulama
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      Türkiye'deki depremleri anlık olarak takip etmek artık çok kolay! Mobil uygulamamız, güvenilir kaynaklardan
                      aldığı verilerle, meydana gelen depremler hakkında hızlı ve doğru bilgilendirme sağlar.
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <RiNotificationLine className="text-primary" />
                        Öne Çıkan Özellikler:
                      </h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>
                            <strong className="text-gray-900 dark:text-white">Anlık Bildirimler:</strong> Depremlerle
                            ilgili güncel bilgileri anında alın.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>
                            <strong className="text-gray-900 dark:text-white">Kişiselleştirilebilir Ayarlar:</strong>{" "}
                            Bildirim tercihlerinizi özelleştirin.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>
                            <strong className="text-gray-900 dark:text-white">Kullanıcı Dostu Arayüz:</strong> Herkes için
                            kolay kullanım.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href={APPS.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                      >
                        <FaGooglePlay className="text-2xl" />
                        <span>Google Play'den İndir</span>
                      </Link>
                      <Link
                        href={APPS.apple}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                      >
                        <FaAppStore className="text-2xl" />
                        <span>App Store'dan İndir</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Browser Extension */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-6 md:px-8 py-8 md:py-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <RiGlobalLine className="text-2xl text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      Deprem Wiki Browser Eklentisi
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      Chrome, Edge tarayıcınıza anlık deprem uyarıları sunan güçlü bir araçtır! Artık Türkiye depremleri anlık olarak takip etmek çok kolay.
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <RiSettingsLine className="text-primary" />
                        Özellikler:
                      </h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>
                            <strong className="text-gray-900 dark:text-white">Anlık Bildirimler:</strong> Uygulama,
                            Türkiye içinde meydana gelen depremler hakkında anlık bildirimler gönderir, böylece kullanıcılar acil
                            durumlarda hızlı bir şekilde bilgilendirilir.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>
                            <strong className="text-gray-900 dark:text-white">Kişiselleştirilmiş Ayarlar:</strong>{" "}
                            Kullanıcılar, hangi büyüklükteki depremler için bildirim almak istediklerini ve nasıl bildirim
                            alacaklarını kolayca ayarlayabilirler.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-8">
                      <Link
                        href={APPS.chrome}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Deprem Wiki Chrome Eklentisi"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                      >
                        <RiChromeFill className="text-2xl" />
                        <span>Chrome Eklentisini İndir</span>
                      </Link>
                      <Link
                        href={APPS.edge}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Deprem Wiki Edge Eklentisi"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                      >
                        <FaEdge className="text-2xl" />
                        <span>Edge Eklentisini İndir</span>
                      </Link>
                    </div>

                    {/* Extension Screenshots */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                        Eklenti Görselleri
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                          <Zoom>
                            <Image
                              src="/assets/img/apps/extension/extension-img-1.png"
                              width={600}
                              height={600}
                              loading="lazy"
                              sizes="(max-width: 768px) 100vw, 33vw"
                              alt="Deprem Wiki Chrome Eklentisi - Ekran Görüntüsü 1"
                              className="w-full h-auto object-cover cursor-zoom-in"
                            />
                          </Zoom>
                        </div>
                        <div className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                          <Zoom>
                            <Image
                              src="/assets/img/apps/extension/extension-img-2.png"
                              width={600}
                              height={600}
                              loading="lazy"
                              sizes="(max-width: 768px) 100vw, 33vw"
                              alt="Deprem Wiki Chrome Eklentisi - Ekran Görüntüsü 2"
                              className="w-full h-auto object-cover cursor-zoom-in"
                            />
                          </Zoom>
                        </div>
                        <div className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                          <Zoom>
                            <Image
                              src="/assets/img/apps/extension/extension-img-3.png"
                              width={400}
                              height={400}
                              loading="lazy"
                              sizes="(max-width: 768px) 100vw, 33vw"
                              alt="Deprem Wiki Chrome Eklentisi - Ekran Görüntüsü 3"
                              className="w-full h-auto object-cover cursor-zoom-in"
                            />
                          </Zoom>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
