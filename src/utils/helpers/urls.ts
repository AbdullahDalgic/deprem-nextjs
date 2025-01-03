import dayjs from "dayjs";
import { IEarthquake } from "../interfaces/earthquakes";
import { INews } from "../interfaces/news";
import { API_URL, SITE_URL } from "../constants";

export const generateSearchLink = (term: string = "") => {
  term = term.toLocaleLowerCase("tr");
  term = term.replace(/ /g, "+");
  term = term.replace(/ç/g, "c");
  term = term.replace(/ğ/g, "g");
  term = term.replace(/ı/g, "i");
  term = term.replace(/ö/g, "o");
  term = term.replace(/ş/g, "s");
  term = term.replace(/ü/g, "u");

  return `/ara?q=${term}`;
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
  console.log("🚀 ~ generateEarthquakeLink ~ earthquake:", earthquake);
  const { eventId = "", eventDate = "" } = earthquake;
  const folder = dayjs(eventDate).format("YYYY-MM-DD");

  return `/depremler/${folder}/${eventId}`;
};

export const generateNewsLink = (news: INews) => {
  const folder = dayjs(news?.created_at).format("YYYY-MM-DD");
  return `/haberler/${folder}/${news?.slug}`;
};
