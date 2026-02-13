"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { RiErrorWarningLine, RiHomeLine, RiRefreshLine } from "react-icons/ri";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    document.title = "Bir hata oluştu - Deprem Wiki";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* <Image
              src="/assets/img/others/500.svg"
              alt="Hata"
              fill
              className="object-contain"
              priority
            /> */}
            <img
              src="/assets/img/others/500.svg"
              alt="Hata"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
            <RiErrorWarningLine className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Bir hata oluştu
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            {error.message ||
              "Bir hata oluştu. Lütfen daha sonra tekrar deneyin."}
          </p>
          {error.digest && (
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Hata Kodu: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors shadow-sm hover:shadow-md"
          >
            <RiRefreshLine className="w-5 h-5" />
            <span>Tekrar Dene</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md"
          >
            <RiHomeLine className="w-5 h-5" />
            <span>Anasayfaya Dön</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
