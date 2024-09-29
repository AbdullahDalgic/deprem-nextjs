import React from "react";
import Link from "next/link";
import { API_URL } from "@/utils/constants";
import dayjs from "dayjs";
import Image from "next/image";
import { INews } from "@/utils/interfaces/news";

interface IBoxItem {
  news: INews;
  index?: number;
}

const BoxItem = ({ news }: IBoxItem) => {
  const date = dayjs(news?.created_at).format("YYYY-MM-DD");
  const url = `/haberler/${date}/${news?.slug}`;

  return (
    <div className="trending__post">
      <div className="trending__post-thumb tgImage__hover">
        <Link href="/#" className="addWish">
          <i className="fal fa-heart" />
        </Link>
        <Link href={url}>
          <Image
            src={`${API_URL}${news?.image_map}`}
            alt={news?.title}
            style={{ width: "100%" }}
            width={700}
            height={700}
            // priority={index < 3 ? true : false}
            loading="lazy"
          />
        </Link>
        {/* {item.trending && (
          <span className="is_trend">
            <i className="fas fa-bolt" />
          </span>
        )} */}
      </div>
      <div className="trending__post-content">
        <ul className="tgbanner__content-meta list-wrap">
          <li>
            <time dateTime={news.created_at}>
              {dayjs(news.created_at).format("DD MMMM YYYY")}
            </time>{" "}
            <time dateTime={news.created_at}>
              {dayjs(news.created_at).format("HH:mm")}
            </time>
          </li>
        </ul>
        <h4 className="title tgcommon__hover">
          <Link href={url}>{news.title} </Link>
        </h4>
        <ul className="post__activity list-wrap">
          <li>
            <i className="fal fa-signal" /> {news.views}
          </li>
          <li>
            <Link href={url}>
              <i className="fal fa-comment-dots" /> 0
            </Link>
          </li>
          <li>
            <i className="fal fa-share-alt" /> 0
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BoxItem;
