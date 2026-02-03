"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

interface IPagination {
  last_page: number;
  current_page: number;
  url: string;
}

const PaginationComponent = (props: IPagination) => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { last_page, url } = props;

  const generateLinkUrl = (pageNum: number | null) => {
    if (!pageNum || pageNum === 1) {
      // Sayfa 1 ise page parametresini kaldır
      const urlObj = new URL(url, "http://localhost");
      urlObj.searchParams.delete("page");
      const search = urlObj.search;
      return urlObj.pathname + (search ? search : "");
    }
    // Sayfa numarasını ekle veya güncelle
    const urlObj = new URL(url, "http://localhost");
    urlObj.searchParams.set("page", pageNum.toString());
    return urlObj.pathname + urlObj.search;
  };

  if (!last_page || last_page <= 1) return null;

  const pages = [];
  // Mobilde daha az sayfa göster (3), desktop'ta daha fazla (5)
  // CSS ile kontrol edilecek, burada sabit değer kullanıyoruz
  const maxVisible = 3; // Mobil için optimize edilmiş
  let startPage = Math.max(1, page - Math.floor(maxVisible / 2));
  let endPage = Math.min(last_page, startPage + maxVisible - 1);

  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-8 px-2">
      {/* Önceki Sayfa */}
      {page > 1 ? (
        <Link
          href={generateLinkUrl(page - 1)}
          className="px-2 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-primary transition-all flex items-center gap-1 sm:gap-2 text-sm sm:text-base whitespace-nowrap"
        >
          <RiArrowLeftLine className="w-4 h-4" />
          <span className="hidden sm:inline">Önceki</span>
        </Link>
      ) : (
        <div className="px-2 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed flex items-center gap-1 sm:gap-2 opacity-50 text-sm sm:text-base whitespace-nowrap">
          <RiArrowLeftLine className="w-4 h-4" />
          <span className="hidden sm:inline">Önceki</span>
        </div>
      )}

      {/* Sayfa Numaraları - Mobilde sadece mevcut sayfa ve yakın sayfalar */}
      {startPage > 1 && (
        <>
          <Link
            href={generateLinkUrl(1)}
            className="hidden sm:block px-2 sm:px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-primary transition-all text-sm sm:text-base"
          >
            1
          </Link>
          {startPage > 2 && (
            <span className="hidden sm:block px-1 sm:px-2 text-gray-400 dark:text-gray-600 text-sm">...</span>
          )}
        </>
      )}

      {pages.map((pageNum) => (
        <Link
          key={pageNum}
          href={generateLinkUrl(pageNum)}
          className={`px-2 sm:px-3 md:px-4 py-2 border rounded-lg transition-all text-sm sm:text-base whitespace-nowrap ${
            pageNum === page
              ? "bg-primary text-white border-primary font-semibold"
              : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-primary"
          }`}
        >
          {pageNum}
        </Link>
      ))}

      {endPage < last_page && (
        <>
          {endPage < last_page - 1 && (
            <span className="hidden sm:block px-1 sm:px-2 text-gray-400 dark:text-gray-600 text-sm">...</span>
          )}
          <Link
            href={generateLinkUrl(last_page)}
            className="hidden sm:block px-2 sm:px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-primary transition-all text-sm sm:text-base"
          >
            {last_page}
          </Link>
        </>
      )}

      {/* Sonraki Sayfa */}
      {page < last_page ? (
        <Link
          href={generateLinkUrl(page + 1)}
          className="px-2 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-primary transition-all flex items-center gap-1 sm:gap-2 text-sm sm:text-base whitespace-nowrap"
        >
          <span className="hidden sm:inline">Sonraki</span>
          <RiArrowRightLine className="w-4 h-4" />
        </Link>
      ) : (
        <div className="px-2 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed flex items-center gap-1 sm:gap-2 opacity-50 text-sm sm:text-base whitespace-nowrap">
          <span className="hidden sm:inline">Sonraki</span>
          <RiArrowRightLine className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};

export default PaginationComponent;
