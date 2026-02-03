import React from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { IEarthquake } from "@/utils/interfaces/earthquakes";
import {
  earthquakeMetaImage,
  earthquakeTitle,
} from "@/utils/helpers/earthquakeHelper";
import { generateEarthquakeLink } from "@/utils/helpers/urls";
import { RiEarthquakeLine } from "react-icons/ri";

interface ISearchItem {
  earthquake: IEarthquake;
}

const EarthquakeItem = ({ earthquake }: ISearchItem) => {
  const url = generateEarthquakeLink(earthquake);
  const title = earthquakeTitle(earthquake);

  return (
    <Link
      href={url}
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md hover:border-primary/50 transition-all duration-200 group"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center overflow-hidden">
          <RiEarthquakeLine className="text-2xl text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {dayjs(earthquake?.created_at).format("DD MMMM YYYY")}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-600">•</span>
            <span className="text-xs text-primary font-medium">Deprem</span>
          </div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <div className="mt-2 flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
            <span>Büyüklük: <strong className="text-gray-900 dark:text-white">{earthquake.magnitude}</strong></span>
            <span>•</span>
            <span>Derinlik: <strong className="text-gray-900 dark:text-white">{earthquake.depth} km</strong></span>
            <span>•</span>
            <span className="truncate">{earthquake.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EarthquakeItem;
