"use client";
import NEXT_API from "@/utils/api/apiConfigNextjs";
import SectionTitle from "@/components/elements/SectionTitle";
import BoxItem from "@/components/elements/news/BoxItem";
import { Container, Grid2, CircularProgress, debounce } from "@mui/material";
import { PAGINATION_LIMIT } from "@/utils/constants";
import { INews } from "@/utils/interfaces/news";
import { IPagination, IGetParams } from "@/utils/interfaces/pagination";
import { useEffect, useState } from "react";

interface INewsSection {
  data: IPagination<INews>;
}

const NewsSection = ({ data }: INewsSection) => {
  const [newsData, setNewsData] = useState<INews[]>(data?.data);
  const [params, setParams] = useState<IGetParams>({
    limit: PAGINATION_LIMIT,
    page: 1,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const url = `/news?page=${params.page + 1}&limit=${params.limit}`;
      const { data } = await NEXT_API.get(url);

      setNewsData((prevItems) => [...prevItems, ...data?.data]);
      setParams((prevParams) => ({ ...prevParams, page: prevParams.page + 1 }));
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  const debouncedFetch = debounce(fetchData, 100);

  const handleScroll = () => {
    if (isLoading) return;

    const footerHeight = document.querySelector("footer")?.clientHeight || 0;

    if (
      window.innerHeight +
        document.documentElement.scrollTop +
        footerHeight +
        200 >=
      document.documentElement.offsetHeight
    ) {
      debouncedFetch();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <section>
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Grid2 container spacing={2}>
          <Grid2 size={12}>
            <SectionTitle title="Son Deprem Haberleri" />
          </Grid2>

          {!!newsData?.length &&
            newsData.map((item, i) => (
              <Grid2 key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                <BoxItem news={item} index={i} />
              </Grid2>
            ))}

          {isLoading && (
            <Grid2 size={12} sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress size="3rem" color="inherit" />
            </Grid2>
          )}
        </Grid2>
      </Container>
    </section>
  );
};

export default NewsSection;
