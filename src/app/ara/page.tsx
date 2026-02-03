import { unstable_noStore as noStore } from "next/cache";
import React from "react";
import SeoData from "@/utils/helpers/seo";
import API from "@/utils/api/apiConfig";
import { generateSearchLink } from "@/utils/helpers/urls";
import { IEarthquake } from "@/utils/interfaces/earthquakes";
import { IPagination } from "@/utils/interfaces/pagination";
import Breadcrumb from "@/components/theme/Breadcrumb";
import SearchPage from "@/components/pages/Search";
import { SITE_URL } from "@/utils/constants";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps) {
  noStore();

  const params = await searchParams;
  const q = params?.q || "";
  const terms = q ? decodeURIComponent(q).replace(/\+/g, " ") : "";

  return SeoData({
    title: terms ? `Arama Sonuçları: ${terms}` : "Arama Sonuçları",
    description: terms
      ? `Arama sonuçları: ${terms}. Deprem Wiki'de arama yapın.`
      : `Deprem Wiki'de arama yapın.`,
    url: generateSearchLink(terms),
  });
}

export default async function Search({ searchParams }: SearchPageProps) {
  noStore();

  const params = await searchParams;
  const q = params?.q || "";
  const page = Number(params?.page) || 1;

  // URL'den gelen parametreyi decode et
  const decodedQuery = q ? decodeURIComponent(q).replace(/\+/g, " ") : "";

  // Backend + işaretine göre split ediyor, bu yüzden boşlukları + ile değiştir
  // Backend'in beklediği format: "term1+term2+term3"
  const apiQuery = decodedQuery ? decodedQuery.trim().replace(/\s+/g, "+") : "";

  // Eğer query boşsa, arama kutusu göster
  if (!apiQuery || !apiQuery.trim()) {
    const emptyData: IPagination<IEarthquake> = {
      data: [],
      current_page: 1,
      last_page: 1,
      per_page: 10,
      from: 0,
      to: 0,
      total: 0,
    };
    
    return (
      <>
        <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <Breadcrumb
            breadcrumbCategory="Arama"
            breadcrumbCategoryLink="/ara"
            breadcrumbPostTitle=""
            breadcrumbPostUrl="/ara"
          />
        </div>
        <section className="py-8 md:py-12 bg-white dark:bg-gray-950">
          <SearchPage data={emptyData} />
        </section>
      </>
    );
  }

  // Backend + işaretini korumak için özel encoding
  // Backend explode('+', $query) yapıyor, bu yüzden + işaretini korumalıyız
  // Her terimi ayrı ayrı encode edip + ile birleştirmeliyiz
  const encodedQuery = apiQuery
    .split('+')
    .map(term => encodeURIComponent(term.trim()))
    .filter(term => term.length > 0)
    .join('+');

  const api_url = `/search?q=${encodedQuery}&page=${page}`;

  const response = await API.get(api_url);
  const data: IPagination<IEarthquake> = response?.data || null;

  // Backend'den hata geldiyse kontrol et
  if (response?.data?.error) {
    return (
      <>
        <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <Breadcrumb
            breadcrumbCategory="Arama Sonuçları"
            breadcrumbCategoryLink="/ara"
            breadcrumbPostTitle={decodedQuery}
            breadcrumbPostUrl={generateSearchLink(decodedQuery)}
          />
        </div>
        <section className="py-8 md:py-12 bg-white dark:bg-gray-950">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center">
              <p className="text-red-600 dark:text-red-400">
                {response.data.error || "Arama sırasında bir hata oluştu."}
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <Breadcrumb
            breadcrumbCategory="Arama Sonuçları"
            breadcrumbCategoryLink="/ara"
            breadcrumbPostTitle={decodedQuery}
            breadcrumbPostUrl={generateSearchLink(decodedQuery)}
          />
        </div>
        <section className="py-8 md:py-12 bg-white dark:bg-gray-950">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Arama sonuçları yüklenirken bir sorun oluştu.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <Breadcrumb
          breadcrumbCategory="Arama Sonuçları"
          breadcrumbCategoryLink="/ara"
          breadcrumbPostTitle={decodedQuery}
          breadcrumbPostUrl={generateSearchLink(decodedQuery)}
        />
      </div>

      <section className="py-8 md:py-12 bg-white dark:bg-gray-950">
        <SearchPage data={data} />
      </section>
    </>
  );
}
