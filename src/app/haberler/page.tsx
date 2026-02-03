import API from "@/utils/api/apiConfig";
import { PAGINATION_LIMIT, SITE_URL } from "@/utils/constants";
import SeoData from "@/utils/helpers/seo";
import Breadcrumb from "@/components/theme/Breadcrumb";
import { INews } from "@/utils/interfaces/news";
import { unstable_noStore as noStore } from "next/cache";
import NewsSection from "@/components/pages/News";
import { IPagination } from "@/utils/interfaces/pagination";

export const generateMetadata = async () => {
  return SeoData({
    title: "Haberler - Deprem Wiki",
    description:
      "Deprem haberleri, son depremler ve deprem ile ilgili güncel haberler. Türkiye'deki tüm deprem haberlerine buradan ulaşabilirsiniz.",
    url: `${SITE_URL}/haberler`,
  });
};

export default async function News() {
  noStore();
  const url = `/news?page=1&limit=${PAGINATION_LIMIT}`;
  const data: IPagination<INews> = (await API.get(url))?.data || null;
  
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Haberler yüklenirken bir sorun oluştu.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <Breadcrumb
          breadcrumbPostUrl={"/haberler"}
          breadcrumbPostTitle={"Haberler"}
        />
      </div>

      <NewsSection data={data} />
    </>
  );
}
