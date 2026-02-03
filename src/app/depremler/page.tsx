import API from "@/utils/api/apiConfig";
import EarthquakeTable from "@/components/elements/EarthquakeTable";
import SectionTitle from "@/components/elements/SectionTitle";
import Breadcrumb from "@/components/theme/Breadcrumb";
import { SITE_URL } from "@/utils/constants";
import SeoData from "@/utils/helpers/seo";
import { IEarthquake } from "@/utils/interfaces/earthquakes";
import { unstable_noStore as noStore } from "next/cache";

export async function generateMetadata() {
  return SeoData({
    title: "Depremler - Deprem Wiki",
    description: "Türkiye'deki son depremler, deprem listesi ve detaylı deprem bilgileri. Güncel deprem verilerine buradan ulaşabilirsiniz.",
    url: `${SITE_URL}/depremler`,
  });
}

export default async function Earthquakes() {
  noStore();
  const { data } = await API.get("/earthquakes");
  const earthquakes: IEarthquake[] = data || [];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Deprem verileri yüklenirken bir sorun oluştu.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <Breadcrumb
          breadcrumbPostTitle="Depremler"
          breadcrumbPostUrl={`${SITE_URL}/depremler`}
        />
      </div>

      <section className="py-6 md:py-8 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle title="Son Depremler" />
          
          <div className="mt-6">
            <EarthquakeTable earthquakes={earthquakes} pagination={true} />
          </div>
        </div>
      </section>
    </>
  );
}
