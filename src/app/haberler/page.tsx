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
    title: "Haberler",
    description:
      "Deprem haberleri, son depremler ve deprem ile ilgili güncel haberler",
    url: `${SITE_URL}/haberler`,
  });
};

export default async function News() {
  noStore();
  const url = `/news?page=1&limit=${PAGINATION_LIMIT}`;
  const data: IPagination<INews> = (await API.get(url))?.data || null;
  if (!data) return null;

  return (
    <>
      <Breadcrumb
        breadcrumbPostUrl={"/haberler"}
        breadcrumbPostTitle={"Haberler"}
      />

      <NewsSection data={data} />
    </>
  );
}
