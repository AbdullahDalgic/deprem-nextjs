"use client";
import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import API from "@/utils/api/apiConfig";
import { INews } from "@/utils/interfaces/news";
import { generateImageUrl, generateNewsLink } from "@/utils/helpers/urls";
import Image from "next/image";

const LastNewsRightBar = () => {
  const [loading, setLoading] = React.useState(true);
  const [news, setNews] = React.useState<INews[]>();

  React.useEffect(() => {
    if (loading) {
      API.get(`/news?limit=10`).then(({ data }) => {
        setNews(data?.data);
        setLoading(false);
      });
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse flex gap-3 p-3">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 sticky top-24">
      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
          Son Haberler
        </h4>
      </div>

      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        {news &&
          news?.map((item, index) => {
            const url = generateNewsLink(item);
            return (
              <Link
                key={index}
                href={url}
                className="flex gap-3 p-3 group hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
              >
                <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={generateImageUrl(`${item?.image_map}`)}
                    alt={item?.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center gap-0.5">
                  <time className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {dayjs(item?.created_at).format("DD MMMM YYYY")}
                  </time>
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                    {item?.title}
                  </h5>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default LastNewsRightBar;
