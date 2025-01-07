import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import { INews } from "@/utils/interfaces/news";
import { generateImageUrl, generateNewsLink } from "@/utils/helpers/urls";

interface ISearchItem {
  news: INews;
}

const NewsItem = ({ news }: ISearchItem) => {
  const url = generateNewsLink(news);

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Box width={50} height={50}>
        <Link href={url}>
          <img
            src={generateImageUrl(`${news?.image_map}`)}
            alt={news?.title}
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "50px",
              maxHeight: "50px",
            }}
            loading="lazy"
          />
        </Link>
      </Box>
      <Box
        style={{
          paddingLeft: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" sx={{ fontSize: 10, color: "#888888" }}>
          {dayjs(news?.created_at).format("DD MMMM YYYY")}
        </Typography>
        <Link href={url}>
          <Typography variant="h5" sx={{ fontWeight: 500, fontSize: 12 }}>
            {news?.title}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default NewsItem;
