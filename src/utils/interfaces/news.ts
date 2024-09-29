import { IEarthquake } from "./earthquakes";

export interface INews {
  id: number;
  title: string;
  content: string;
  slug: string;
  image: string;
  image_map: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  meta_image: string;
  meta_url: string;
  views: number;
  earthquake_id: number;
  created_at: string;
  updated_at: string;
  earthquake?: IEarthquake;
}
