import Link from "next/link";
import Image from "next/image";
import SeoData from "@/utils/helpers/seo";
import { RiHomeLine, RiSearchLine, RiQuestionLine } from "react-icons/ri";

export async function generateMetadata() {
  return SeoData({
    title: "404 Sayfa Bulunamadı",
    description: "Aradığınız sayfa bulunamadı.",
    image: "/assets/img/others/404.png",
    robots: false,
  });
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <Image
              src="/assets/img/others/404.png"
              alt="404 Sayfa Bulunamadı"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 mb-4">
            <RiQuestionLine className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! Sayfa Bulunamadı!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            Aradığınız sayfa silinmiş olabilir, adı değiştirilmiş olabilir veya
            geçici olarak kullanılamayabilir.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors shadow-sm hover:shadow-md"
          >
            <RiHomeLine className="w-5 h-5" />
            <span>Anasayfaya Dön</span>
          </Link>
          <Link
            href="/ara"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md"
          >
            <RiSearchLine className="w-5 h-5" />
            <span>Arama Yap</span>
          </Link>
        </div>

        {/* Önerilen Sayfalar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Popüler Sayfalar
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/haberler"
              className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              Haberler
            </Link>
            <Link
              href="/depremler"
              className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              Depremler
            </Link>
            <Link
              href="/hakkimizda"
              className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              Hakkımızda
            </Link>
            <Link
              href="/apps"
              className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              Uygulamalar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
