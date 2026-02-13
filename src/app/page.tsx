import React from "react";
import Image from "next/image";
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
      <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* <Image
            src="/assets/img/bg/hero-3.jpg"
            alt="Earth from space"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          /> */}
          <img
            src="/assets/img/bg/hero-3.jpg"
            alt="Earth from space"
            className="object-cover"
          />
          {/* Image Overlay for better contrast */}
          <div className="absolute inset-0 bg-black/30 dark:bg-black/40"></div>
        </div>

        {/* Semi-transparent Color Overlay - Primary colors with transparency */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/60 via-primary-700/50 to-primary-800/60 dark:from-primary-900/70 dark:via-primary-800/60 dark:to-primary-900/70"></div>

        {/* Animated Orb Shapes - More transparent */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-300/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Animated Background Gradient Layers - More transparent */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_60%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_70%)] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Animated Grid Pattern - Subtle matrix style */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Animated Wave Pattern - More transparent */}
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none">
            <path d="M0,300 Q360,200 720,300 T1440,300 L1440,600 L0,600 Z" fill="white" className="animate-wave"></path>
            <path d="M0,400 Q360,300 720,400 T1440,400 L1440,600 L0,600 Z" fill="white" className="animate-wave" style={{ animationDelay: '1s' }}></path>
          </svg>
        </div>

        {/* Glassmorphism Overlay with Gradient - More transparent to show background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-600/20 to-primary-800/30 dark:via-primary-900/25 dark:to-primary-900/35"></div>

        {/* Animated Particles Effect - More visible */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Content Container with Enhanced Glassmorphism */}
        <div className="relative container mx-auto max-w-6xl px-4 py-16 md:py-24 z-10">
          <div className="text-center mb-12">
            {/* Icon with enhanced glassmorphism and glow */}
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/15 dark:bg-white/8 backdrop-blur-lg rounded-full mb-6 border-2 border-white/30 dark:border-white/15 shadow-2xl hover:scale-110 hover:bg-white/20 transition-all duration-300 relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
              <RiEarthquakeLine className="text-4xl md:text-5xl text-white drop-shadow-2xl relative z-10" />
            </div>

            {/* Title with enhanced text shadow and glow */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-normal md:leading-tight drop-shadow-2xl relative">
              <span className="relative z-10 block">Türkiye Deprem</span>
              <span className="block text-primary-100 dark:text-primary-200 bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent animate-gradient relative z-10 mt-2 leading-normal md:leading-tight">
                Bilgi Merkezi
              </span>
              {/* Text glow effect */}
              <span className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold text-white/20 blur-xl -z-10 leading-normal md:leading-tight">
                Türkiye Deprem<br />Bilgi Merkezi
              </span>
            </h1>

            {/* Description with enhanced glassmorphism background */}
            <div className="inline-block px-8 py-4 rounded-2xl bg-white/15 dark:bg-white/8 backdrop-blur-lg border-2 border-white/25 dark:border-white/15 shadow-xl mb-4 hover:bg-white/20 dark:hover:bg-white/12 transition-all duration-300">
              <p className="text-lg md:text-xl lg:text-2xl text-white max-w-2xl mx-auto font-semibold drop-shadow-lg">
                Son depremler, güncel haberler ve detaylı bilgilerle güvenliğiniz için buradayız
              </p>
            </div>
          </div>

          {/* İstatistikler with enhanced glassmorphism */}
          <div className="relative">
            <HeroStats earthquakes={last_earthquakes} />
          </div>
        </div>

        {/* Bottom Wave Decoration - Mobile Optimized */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg
            className="w-full h-8 sm:h-12 md:h-20 lg:h-28"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simple, smooth wave - optimized for mobile */}
            <path
              d="M0,100 Q360,70 720,85 Q1080,100 1440,75 L1440,120 L0,120 Z"
              fill="white"
              className="dark:fill-gray-950"
            />
          </svg>
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
