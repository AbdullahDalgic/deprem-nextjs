import dayjs from "dayjs";
import { IEarthquake } from "../interfaces/earthquakes";
import { INews } from "../interfaces/news";

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

export const generateEarthquakeLink = (earthquake: IEarthquake) => {
  const { eventId, eventDate } = earthquake;
  const folder = dayjs(eventDate).format("YYYY-MM-DD");

  return `/depremler/${folder}/${eventId}`;
};

export const generateNewsLink = (news: INews) => {
  const folder = dayjs(news?.created_at).format("YYYY-MM-DD");
  return `/haberler/${folder}/${news?.slug}`;
};
