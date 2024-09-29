"use client";
import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import API from "@/utils/api/apiConfig";
import Image from "next/image";
import { API_URL } from "@/utils/constants";
import { Box, Grid2, Typography } from "@mui/material";
import { INews } from "@/utils/interfaces/news";

const LastNewsRightBar = () => {
  const [news, setNews] = React.useState<INews[]>();
  React.useEffect(() => {
    API.get(`/news?limit=10`).then(({ data }) => {
      setNews(data?.data);
    });
  }, []);

  return (
    <div className="widget sidebar-widget widget_categories">
      <h4 className="widget-title">Son Haberler</h4>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {news &&
          news?.map((item, index) => {
            const date = dayjs(item?.created_at).format("YYYY-MM-DD");
            const url = `/haberler/${date}/${item?.slug}`;
            return (
              <Grid2 key={index} container spacing={2} alignItems="center">
                {/* <Col span={6}> */}
                <Grid2 size={3}>
                  <Link href={url}>
                    <Image
                      src={`${API_URL}${item?.image_map}`}
                      alt={item?.title}
                      style={{ width: "auto", height: "auto" }}
                      width={100}
                      height={100}
                      loading="lazy"
                    />
                  </Link>
                </Grid2>
                <Grid2
                  size={9}
                  style={{
                    paddingLeft: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {/* <Text>{dayjs(item?.created_at).format("DD MMMM YYYY")}</Text> */}
                  <Typography
                    variant="body1"
                    sx={{ fontSize: 10, color: "#888888" }}
                  >
                    {dayjs(item?.created_at).format("DD MMMM YYYY")}
                  </Typography>
                  <Link href={url}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 500, fontSize: 12 }}
                    >
                      {item?.title}
                    </Typography>
                  </Link>
                </Grid2>
              </Grid2>
            );
          })}
      </Box>
    </div>
  );
};

export default LastNewsRightBar;
