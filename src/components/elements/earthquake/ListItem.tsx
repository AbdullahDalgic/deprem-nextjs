import React from "react";
import Link from "next/link";
import { API_URL } from "@/utils/constants";
import dayjs from "dayjs";
import Image from "next/image";

interface IListItem {
  earthquake: any;
  index?: number;
}

const ListItem = ({ earthquake, index }: IListItem) => {
  const date = dayjs(earthquake?.created_at).format("YYYY-MM-DD");
  const url = `/haberler/${date}/${earthquake?.slug}`;

  return (
    <div className="latest__post-item">
      <div className="latest__post-thumb tgImage__hover">
        <Link href={url}>
          <Image
            src={`${API_URL}${earthquake?.image}`}
            alt={earthquake?.title}
            style={{ width: "100%" }}
            width={700}
            height={700}
            loading="lazy"
          />
        </Link>
      </div>
      <div className="latest__post-content">
        <ul className="tgbanner__content-meta list-wrap">
          <li>
            <time dateTime={earthquake.created_at}>
              {dayjs(earthquake.created_at).format("DD MMMM YYYY")}
            </time>{" "}
            tarihinde, saat{" "}
            <time dateTime={earthquake.created_at}>
              {dayjs(earthquake.created_at).format("HH:mm")}
            </time>
            'de yayımlandı.
          </li>
        </ul>
        <h3 className="title tgcommon__hover">
          <Link href={url}>{earthquake.title} </Link>
        </h3>
        <p>{earthquake.meta_description}...</p>
        <ul className="post__activity list-wrap">
          <li>
            <i className="fal fa-signal" /> {earthquake.views}
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

export default ListItem;
