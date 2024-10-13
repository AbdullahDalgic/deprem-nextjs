import React from "react";
import { IEarthquake } from "@/utils/interfaces/earthquakes";
import NewsItem from "./NewsItem";
import EarthquakeItem from "./EarthquakeItem";

interface ISearchItem {
  item: IEarthquake;
}

const SearchItem = ({ item }: ISearchItem) => {
  if (!item) return null;

  if (item?.news) {
    return <NewsItem news={item.news} />;
  }

  return <EarthquakeItem earthquake={item} />;
};

export default SearchItem;
