import { unstable_noStore as noStore } from "next/cache";
import { headers } from "next/headers";
import React from "react";
import SeoData from "@/utils/helpers/seo";
import API from "@/utils/api/apiConfig";
import { generateSearchLink } from "@/utils/helpers/urls";
import { IEarthquake } from "@/utils/interfaces/earthquakes";
import { IPagination } from "@/utils/interfaces/pagination";
import Breadcrumb from "@/components/theme/Breadcrumb";
import SearchPage from "@/components/pages/Search";
import { SITE_URL } from "@/utils/constants";

export async function generateMetadata() {
  noStore();

  const headersList = headers();
  const referer = headersList.get("referer") || SITE_URL;

  try {
    const url = new URL(referer);
    const q = url?.searchParams.get("q") || "";
    const terms = q.replace(/%2B/g, " ");

    return SeoData({
      title: `Arama Sonuçları: ${terms}`,
      description: `Arama sonuçları: ${terms}. Deprem Wiki'de arama yapın.`,
      url: generateSearchLink(terms),
    });
  } catch (error) {
    return SeoData({
      title: `Arama Sonuçları:`,
      description: `Deprem Wiki'de arama yapın.`,
      url: generateSearchLink(""),
    });
  }
}

export default async function Search() {
  noStore();

  const headersList = headers();
  const referer = headersList.get("referer") || SITE_URL;
  const url = new URL(referer);

  const q = url?.searchParams.get("q") || "";
  const page = Number(url?.searchParams.get("page")) || 1;
  const terms = q.replace(/%2B/g, "+");

  const api_url = `/search?q=${terms}&page=${page || 1}`;
  const data: IPagination<IEarthquake> = (await API.get(api_url))?.data || null;

  if (!data) return null;

  return (
    <>
      <Breadcrumb
        breadcrumbCategory="Arama Sonuçları"
        breadcrumbCategoryLink="/ara"
        breadcrumbPostTitle={terms}
        breadcrumbPostUrl={generateSearchLink(terms)}
      />

      <section>
        <SearchPage data={data} />
      </section>
    </>
  );
}
