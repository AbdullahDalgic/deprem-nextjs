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

  return (
    <div className="container mx-auto max-w-6xl px-4">
      {/* Arama Kutusu */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 items-center">
          <label htmlFor="search" className="text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap flex items-center gap-2">
            <RiSearchLine className="text-primary text-lg" />
            <span>Deprem Wiki'de Ara:</span>
          </label>
          <div className="flex-1 w-full">
            <input
              type="text"
              id="search"
              name="search"
              defaultValue={terms}
              placeholder="Deprem Wiki'de Ara..."
              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            Ara
          </button>
        </form>
      </div>

      {/* Sonuç Sayısı */}
      {total !== undefined && (
        <div className="mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">{total}</span> sonuç bulundu
            {terms && (
              <>
                {" "}için{" "}
                <span className="font-semibold text-gray-900 dark:text-white">"{terms}"</span>
              </>
            )}
          </p>
        </div>
      )}

      {/* Sonuçlar */}
      {data && data.length > 0 ? (
        <div className="space-y-4 mb-8">
          {data.map((item, index) => (
            <SearchItem key={index} item={item} />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center">
          <RiSearchLine className="text-6xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Sonuç Bulunamadı
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Aradığınız terim için sonuç bulunamadı. Lütfen farklı bir terim deneyin.
          </p>
        </div>
      )}

      {/* Pagination */}
      {data && data.length > 0 && last_page && last_page > 1 && (
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
