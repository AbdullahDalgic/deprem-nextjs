import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { INews } from "@/utils/interfaces/news";
import { PiEyesFill } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { generateImageUrl, generateNewsLink } from "@/utils/helpers/urls";
import Image from "next/image";

interface IBoxItem {
  news: INews;
  index?: number;
}

const BoxItem = ({ news }: IBoxItem) => {
  const url = generateNewsLink(news);

  return (
    <article className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary/50">
      <div className="trending__post-thumb relative overflow-hidden bg-gray-200 dark:bg-gray-700">
        <Link href={url} className="block aspect-video">
          {/* <Image
            src={generateImageUrl(`${news?.image_map}`)}
            alt={news?.title}
            width={700}
            height={400}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          /> */}
          <img
            src={generateImageUrl(`${news?.image_map}`)}
            alt={news?.title}
            width={700}
            height={400}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="trending__post-content p-5">
        <div className="flex items-center gap-2 mb-3">
          <time
            dateTime={news.created_at}
            className="text-xs font-medium text-gray-500 dark:text-gray-400"
          >
            {dayjs(news.created_at).format("DD MMMM YYYY")}
          </time>
          <span className="text-gray-300 dark:text-gray-600">•</span>
          <time
            dateTime={news.created_at}
            className="text-xs font-medium text-gray-500 dark:text-gray-400"
          >
            {dayjs(news.created_at).format("HH:mm")}
          </time>
        </div>
        <h3 className="title mb-4">
          <Link
            href={url}
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary-400 transition-colors line-clamp-2 group-hover:text-primary"
          >
            {news.title}
          </Link>
        </h3>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1.5">
              <PiEyesFill className="text-base" />
              <span className="font-medium">{news.views}</span>
            </div>
            <Link
              href={url}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <FaRegCommentDots className="text-base" />
              <span className="font-medium">0</span>
            </Link>
          </div>
          <Link
            href={url}
            className="text-primary hover:text-primary-700 dark:hover:text-primary-400 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
          >
            Devamını Oku
            <i className="far fa-arrow-right text-xs" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BoxItem;
