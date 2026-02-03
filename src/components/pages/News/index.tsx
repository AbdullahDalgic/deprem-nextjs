"use client";
import NEXT_API from "@/utils/api/apiConfigNextjs";
import SectionTitle from "@/components/elements/SectionTitle";
import BoxItem from "@/components/elements/news/BoxItem";
import { PAGINATION_LIMIT } from "@/utils/constants";
import { INews } from "@/utils/interfaces/news";
import { IPagination, IGetParams } from "@/utils/interfaces/pagination";
import { useEffect, useState, useCallback } from "react";

interface INewsSection {
  data: IPagination<INews>;
}

const NewsSection = ({ data }: INewsSection) => {
  const [newsData, setNewsData] = useState<INews[]>(data?.data || []);
  const [params, setParams] = useState<IGetParams>({
    limit: PAGINATION_LIMIT,
    page: 1,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [hasMore, setHasMore] = useState(data?.last_page > data?.current_page);

  const fetchData = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    setError(null);

    try {
      const url = `/news?page=${params.page + 1}&limit=${params.limit}`;
      const { data: responseData } = await NEXT_API.get(url);

      if (responseData?.data && responseData.data.length > 0) {
        setNewsData((prevItems) => [...prevItems, ...responseData.data]);
        setParams((prevParams) => ({ ...prevParams, page: prevParams.page + 1 }));
        setHasMore(responseData.current_page < responseData.last_page);
      } else {
        setHasMore(false);
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
      setHasMore(false);
    }
  }, [isLoading, hasMore, params.page, params.limit]);

  const handleScroll = useCallback(() => {
    if (isLoading || !hasMore) return;

    const footerHeight = document.querySelector("footer")?.clientHeight || 0;
    const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
    const documentHeight = document.documentElement.offsetHeight - footerHeight - 200;

    if (scrollPosition >= documentHeight) {
      fetchData();
    }
  }, [isLoading, hasMore, fetchData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionTitle title="Son Deprem Haberleri" />

        {error && (
          <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-800 dark:text-red-200">
              Haberler yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.
            </p>
          </div>
        )}

        {newsData && newsData.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {newsData.map((item, i) => (
                <BoxItem key={`${item.id}-${i}`} news={item} index={i} />
              ))}
            </div>

            {isLoading && (
              <div className="flex justify-center items-center py-12">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-primary/30 border-t-transparent rounded-full animate-spin" style={{ animationDirection: "reverse" }}></div>
                  </div>
                </div>
              </div>
            )}

            {!hasMore && newsData.length > 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                  Tüm haberler görüntülendi
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
              <i className="far fa-newspaper text-3xl text-gray-400 dark:text-gray-600"></i>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Henüz haber bulunmamaktadır.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
