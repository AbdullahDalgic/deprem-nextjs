import React from "react";
import API from "@/utils/api/apiConfig";
import SectionTitle from "@/components/elements/SectionTitle";
import EarthquakeTable from "@/components/elements/EarthquakeTable";
import HeroStats from "@/components/elements/HeroStats";
import Link from "next/link";
import BoxItem from "@/components/elements/news/BoxItem";
import SeoData from "@/utils/helpers/seo";
import { IEarthquake } from "@/utils/interfaces/earthquakes";
import { INews } from "@/utils/interfaces/news";
import { unstable_noStore as noStore } from "next/cache";
import { generateImageUrl } from "@/utils/helpers/urls";
import { RiEarthquakeLine } from "react-icons/ri";

export async function generateMetadata() {
  noStore();
  const { data = [] } = await API.get("/news_home");
  // 3 item
  const preloadImages = data?.news
    ?.slice(0, 3)
    .map((item: INews) => generateImageUrl(`${item?.image}`));
  return SeoData({
    preload: preloadImages,
  });
}

export default async function Home() {
  noStore();
  const { data } = await API.get("/news_home");
  const last_earthquakes: IEarthquake[] = data?.last_earthquakes || [];
  const news: INews[] = data?.news || [];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-primary-900 dark:via-primary-800 dark:to-primary-900">
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('/assets/img/pattern.svg')] opacity-5"></div>
        <div className="relative container mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <RiEarthquakeLine className="text-4xl text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Türkiye Deprem
              <span className="block text-primary-200">Bilgi Merkezi</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Son depremler, güncel haberler ve detaylı bilgilerle güvenliğiniz için buradayız
            </p>
          </div>
          
          {/* İstatistikler */}
          <HeroStats earthquakes={last_earthquakes} />
        </div>
      </section>

      {/* Son Depremler Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle
            title="Son Depremler"
            link="/depremler"
            linkText="Tümünü Gör"
          />
          <div className="mt-6">
            <EarthquakeTable earthquakes={last_earthquakes} pagination={false} />
          </div>
        </div>
      </section>

      {/* Son Deprem Haberleri Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle
            title="Son Deprem Haberleri"
            link="/haberler"
            linkText="Tüm Haberler"
          />
          
          {news && news.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {news.map((item, i) => (
                  <BoxItem key={i} news={item} index={i} />
                ))}
              </div>
              <div className="text-center mt-12">
                <Link 
                  href="/haberler" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>Tüm Haberleri Gör</span>
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Henüz haber bulunmamaktadır.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-800 dark:to-primary-900">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Deprem Bilgilerine Anında Erişin
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Mobil uygulamalarımız ve tarayıcı uzantılarımızla deprem bilgilerini her zaman yanınızda taşıyın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apps"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <i className="fas fa-mobile-alt" />
              <span>Uygulamaları İncele</span>
            </Link>
            <Link
              href="/depremler"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-800 text-white rounded-xl hover:bg-primary-900 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <i className="fas fa-list" />
              <span>Deprem Listesi</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
