import { Metadata } from "next";
import { API_URL, SITE_URL } from "../constants";
import { generateAssetsUrl } from "./urls";

interface ISeo {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  meta_description?: string;
  image?: string;
  url?: string;
  robots?: boolean;
  created_at?: string;
  updated_at?: string;
  preload?: string[];
}

export default async function SeoData(data: ISeo) {
  if (!data?.title) {
    data.title =
      "Deprem Wiki - Türkiye ve Dünya'da meydana gelen son depremler";
  } else {
    data.title = data.title + " - Deprem Wiki";
  }

  const {
    title,
    description = "Türkiye'deki son depremler ve deprem haberleri",
    image = generateAssetsUrl(`/assets/img/logo/logo.png`),
    author = "Deprem Wiki",
    url = SITE_URL,
    robots = true,
    preload = [],
  } = data;

  const preloadUrls = ["https://fonts.gstatic.com/", API_URL, ...preload];

  const metaData: Metadata = {
    title: title,
    description: description,
    authors: {
      name: author,
    },
    category: "news",
    classification: "news",
    applicationName: "Deprem Wiki",
    creator: author,
    alternates: {
      canonical: {
        title: title,
        url: url,
      },
      types: {
        "application/rss+xml": [
          {
            title: "Deprem Wiki Haberler",
            url: `${API_URL}/feeds/news`,
          },
          {
            title: "Deprem Wiki Depremler",
            url: `${API_URL}/feeds/earthquakes`,
          },
        ],
      },
    },
    other: {
      preload: preloadUrls,
      "dns-prefetch": preloadUrls,
      preconnect: preloadUrls,
    },
    robots: robots ? "index, follow" : "noindex, nofollow",
    openGraph: {
      title: title,
      description: description,
      images: image,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      site: "@depremwiki",
      creator: "@depremwiki",
      title: title,
      description: description,
      images: image,
    },
    icons: {
      icon: generateAssetsUrl(`/assets/img/logo/logo.png`),
      apple: generateAssetsUrl(`/assets/img/logo/logo.png`),
    },
    verification: {
      other: {
        "fediverse:creator": "@depremwiki@sosyal.teknofest.app",
      },
    },
  };
  return metaData;
}
