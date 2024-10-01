import { Metadata } from "next";
import { API_URL, SITE_URL } from "../constants";

interface ISeo {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  meta_description?: string;
  image?: string;
  url?: string;
  created_at?: string;
  updated_at?: string;
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
    image = `${SITE_URL}/assets/img/logo/logo.png`,
    author = "Deprem Wiki",
    url = SITE_URL,
  } = data;

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
    robots: "index, follow",
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
      icon: `${SITE_URL}/assets/img/logo/logo.png`,
      apple: `${SITE_URL}/assets/img/logo/logo.png`,
    },
    verification: {},
  };
  return metaData;
}
