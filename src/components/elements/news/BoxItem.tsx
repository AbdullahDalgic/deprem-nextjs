import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { INews } from "@/utils/interfaces/news";
import { PiEyesFill } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { generateImageUrl, generateNewsLink } from "@/utils/helpers/urls";

interface IBoxItem {
  news: INews;
  index?: number;
}

const BoxItem = ({ news }: IBoxItem) => {
  const url = generateNewsLink(news);

  return (
    <div className="trending__post">
      <div className="trending__post-thumb tgImage__hover">
        {/* <Link href="/#" className="addWish">
          <i className="fal fa-heart" />
        </Link> */}
        <Link href={url}>
          <img
            src={generateImageUrl(`${news?.image_map}`)}
            alt={news?.title}
            style={{ width: "100%", maxWidth: "700px" }}
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
            <PiEyesFill /> {news.views}
          </li>
          <li>
            <Link href={url}>
              <FaRegCommentDots /> 0
            </Link>
          </li>
          <li>
            <IoShareSocialSharp /> 0
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BoxItem;
