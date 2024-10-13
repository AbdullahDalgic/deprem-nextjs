import { INews } from "./news";

export interface IEarthquake {
  eventId: number;
  location: string;
  provider: string;
  lat: number;
  lng: number;
  depth: number;
  magnitude: number;
  eventDate: string;
  created_at: string;
  updated_at: string;
  news?: INews;
}
