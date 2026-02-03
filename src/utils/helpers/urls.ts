import dayjs from "dayjs";
import { IEarthquake } from "../interfaces/earthquakes";
import { INews } from "../interfaces/news";
import { API_URL, SITE_URL } from "../constants";

export const generateSearchLink = (term: string = "") => {
  if (!term || !term.trim()) {
    return `/ara`;
  }
  
  // Trim ve normalize et
  term = term.trim();
  
  // URL encoding yap (Türkçe karakterler dahil)
  const encodedTerm = encodeURIComponent(term);
  
  return `/ara?q=${encodedTerm}`;
};

export const generateImageUrl = (imagePath: string) => {
  if (imagePath.startsWith(API_URL)) {
    return imagePath;
  }

  if (!imagePath.startsWith("/")) {
    imagePath = `/${imagePath}`;
  }

  return API_URL + imagePath;
};

export const generateAssetsUrl = (imagePath: string) => {
  if (imagePath.startsWith(SITE_URL)) {
    return imagePath;
  }

  if (!imagePath.startsWith("/")) {
    imagePath = `/${imagePath}`;
  }

  return SITE_URL + imagePath;
};

export const generateEarthquakeLink = (earthquake: IEarthquake) => {
  const { eventId = "", eventDate = "" } = earthquake;
  const folder = dayjs(eventDate).format("YYYY-MM-DD");

  return `/depremler/${folder}/${eventId}`;
};

export const generateNewsLink = (news: INews) => {
  const folder = dayjs(news?.created_at).format("YYYY-MM-DD");
  return `/haberler/${folder}/${news?.slug}`;
};
