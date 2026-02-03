"use client";
import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { generateSearchLink } from "@/utils/helpers/urls";
import { IEarthquake } from "@/utils/interfaces/earthquakes";
import { IPagination } from "@/utils/interfaces/pagination";
import SearchItem from "./SearchItem";
import PaginationComponent from "./Pagination";
import { useSearchParams, useRouter } from "next/navigation";

interface ISearchPage {
  data: IPagination<IEarthquake>;
}

const SearchPage = (props: ISearchPage) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data, current_page, last_page, total }: IPagination<IEarthquake> =
    props.data || {};

  const q = searchParams.get("q") || "";
  // URL'den gelen parametreyi decode et
  const terms = q ? decodeURIComponent(q).replace(/\+/g, " ") : "";

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get("search") as string;
    if (searchTerm.trim()) {
      router.push(generateSearchLink(searchTerm.trim()));
    }
  };

  const hasQuery = terms.trim().length > 0;
  const hasResults = data && data.length > 0;

  return (
    <div className="container mx-auto max-w-6xl px-4">
      {/* Arama Kutusu - Enhanced */}
      <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8 mb-8">
        {!hasQuery && (
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary/10 dark:bg-primary/20 rounded-full mb-4">
              <RiSearchLine className="text-3xl md:text-4xl text-primary" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Deprem Wiki'de Ara
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              Depremler, haberler ve daha fazlasını arayın
            </p>
          </div>
        )}
        
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
          <div className="flex-1 w-full relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <RiSearchLine className="text-gray-400 dark:text-gray-500 text-xl" />
            </div>
            <input
              type="text"
              id="search"
              name="search"
              defaultValue={terms}
              placeholder="Örn: İstanbul deprem, son depremler..."
              autoFocus={!hasQuery}
              className="w-full pl-12 pr-4 py-3 md:py-3.5 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm md:text-base"
            />
          </div>
          <button
            type="submit"
            className="px-6 md:px-8 py-3 md:py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-600 dark:hover:bg-primary-700 transition-all whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm md:text-base"
          >
            Ara
          </button>
        </form>
      </div>

      {/* Sonuç Sayısı */}
      {hasQuery && total !== undefined && total > 0 && (
        <div className="mb-6">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">{total}</span> sonuç bulundu
            {" "}için{" "}
            <span className="font-semibold text-primary">"{terms}"</span>
          </p>
        </div>
      )}

      {/* Sonuçlar */}
      {hasQuery && hasResults ? (
        <div className="space-y-4 mb-8">
          {data.map((item, index) => (
            <SearchItem key={index} item={item} />
          ))}
        </div>
      ) : hasQuery && !hasResults ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-12 md:p-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gray-100 dark:bg-gray-700 rounded-full mb-6">
            <RiSearchLine className="text-4xl md:text-5xl text-gray-400 dark:text-gray-500" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Sonuç Bulunamadı
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-md mx-auto">
            Aradığınız terim <span className="font-semibold text-primary">"{terms}"</span> için sonuç bulunamadı. Lütfen farklı bir terim deneyin veya arama kriterlerinizi genişletin.
          </p>
        </div>
      ) : null}

      {/* Pagination */}
      {hasQuery && hasResults && last_page && last_page > 1 && (
        <PaginationComponent
          current_page={current_page}
          last_page={last_page}
          url={generateSearchLink(terms)}
        />
      )}
    </div>
  );
};

export default SearchPage;
