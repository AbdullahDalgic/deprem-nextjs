import React from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { INews } from "@/utils/interfaces/news";
import { generateImageUrl, generateNewsLink } from "@/utils/helpers/urls";

interface ISearchItem {
  news: INews;
}

const NewsItem = ({ news }: ISearchItem) => {
  const url = generateNewsLink(news);

  return (
    <Link
      href={url}
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md hover:border-primary/50 transition-all duration-200 group"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
          <Image
            src={generateImageUrl(`${news?.image_map}`)}
            alt={news?.title}
            width={64}
            height={64}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {dayjs(news?.created_at).format("DD MMMM YYYY")}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-600">•</span>
            <span className="text-xs text-primary font-medium">Haber</span>
          </div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
            {news?.title}
          </h3>
          {news?.meta_description && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {news.meta_description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
