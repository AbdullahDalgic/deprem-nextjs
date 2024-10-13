import React from "react";
import SeoData from "@/utils/helpers/seo";
import { unstable_noStore as noStore } from "next/cache";
import API from "@/utils/api/apiConfig";
import { generateSearchLink } from "@/utils/helpers/urls";
import { IEarthquake } from "@/utils/interfaces/earthquakes";
import { IPagination } from "@/utils/interfaces/pagination";
import SearchPage from "@/components/pages/Search";
import { headers } from "next/headers";

export async function generateMetadata() {
  noStore();

  const headersList = headers();
  const referer = headersList.get("referer") || "";
  const url = new URL(referer);
  const q = url.searchParams.get("q") || "";
  const terms = q.replace(/%2B/g, " ");

  return SeoData({
    title: `Arama Sonuçları: ${terms}`,
    description: `Arama sonuçları: ${terms}. Deprem Wiki'de arama yapın.`,
    url: generateSearchLink(terms),
  });
}

export default async function Search() {
  noStore();

  const headersList = headers();
  const referer = headersList.get("referer") || "";
  const url = new URL(referer);
  const q = url.searchParams.get("q") || "";
  const page = url.searchParams.get("page");

  const terms = q.replace(/%2B/g, "+");

  const api_url = `/search?q=${terms}&page=${page || 1}`;
  const data: IPagination<IEarthquake> = (await API.get(api_url))?.data || null;

  if (!data) return null;

  return <SearchPage data={data} terms={terms} />;
}
