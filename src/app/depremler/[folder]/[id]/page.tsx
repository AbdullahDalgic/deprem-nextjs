import { SITE_URL } from "@/utils/constants";
import Link from "next/link";
import API from "@/utils/api/apiConfig";
import dayjs from "dayjs";
import Zoom from "react-medium-image-zoom";
import LastNewsRightBar from "@/components/elements/news/LastNewsRightBar";
import EarthquakeDataTableMini from "@/components/elements/earthquake/EarthquakeDetailTableMini";
import SeoData from "@/utils/helpers/seo";
import ShareLeftSide from "@/components/elements/share/ShareLeftSide";
import ShareBottomSide from "@/components/elements/share/ShareBottomSide";
import Breadcrumb from "@/components/theme/Breadcrumb";
import { notFound } from "next/navigation";
import {
  generateEarthquakeLink,
  generateSearchLink,
  generateImageUrl,
} from "@/utils/helpers/urls";
import {
  earthquakeDescription,
  earthquakeMetaImage,
  earthquakeTitle,
} from "@/utils/helpers/earthquakeHelper";
import Image from "next/image";
import { PiEyesFill } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa";

interface IEarthquakePage {
  params: Promise<{
    folder: string;
    id: string;
  }>;
}

export async function generateMetadata({ params }: IEarthquakePage) {
  const { id, folder } = await params;
  const { data } = await API.get(`/earthquakes/${folder}/${id}`);

  if (!data) return notFound();

  return SeoData({
    title: earthquakeTitle(data),
    description: earthquakeDescription(data),
    url: generateEarthquakeLink(data),
  });
}

export default async function EarthquakeData({ params }: IEarthquakePage) {
  const { id, folder } = await params;
  const { data } = await API.get(`/earthquakes/${folder}/${id}`);
  dayjs.locale("tr");

  const canonical = generateEarthquakeLink(data);
  const metaImage = earthquakeMetaImage();
  const title = earthquakeTitle(data);
  const description = earthquakeDescription(data);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SpecialAnnouncement",
    name: title,
    category: "https://schema.org/DisasterEvent",
    datePosted: data?.created_at || data?.eventDate || "",
    expires: null,
    text: description,
    spatial: {
      "@type": "Place",
      name: data?.location || "",
      geo: {
        "@type": "GeoCoordinates",
        latitude: data?.lat || 0,
        longitude: data?.lng || 0,
      },
    },
    announcementLocation: {
      "@type": "Place",
      name: "Türkiye",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    publisher: {
      "@type": "Organization",
      name: "Deprem Wiki",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: "150",
        height: "60",
      },
    },
    url: canonical,
  };

  const geoJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: title,
    startDate: data?.eventDate || "",
    description: description,
    location: {
      "@type": "Place",
      name: data?.location || "",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Türkiye",
        addressRegion: data?.location?.split(" ")[0] || "",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: data?.lat || 0,
        longitude: data?.lng || 0,
        elevation: -(data?.depth || 0),
      },
    },
    image: metaImage,
    url: canonical,
  };

  if (!data) {
    return notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(geoJsonLd) }}
      />

      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <Breadcrumb
          breadcrumbCategory={"Depremler"}
          breadcrumbCategoryLink={`${SITE_URL}/depremler`}
          breadcrumbPostUrl={canonical}
          breadcrumbPostTitle={title}
        />
      </div>

      <section className="py-6 md:py-8 bg-white dark:bg-gray-950">
        <div className="relative">
          {/* Sol Sidebar - Share Buttons (Desktop) - Container dışında, absolute */}
          <div className="hidden xl:block absolute top-0" style={{ left: 'max(1rem, calc((100vw - 1152px) / 2 - 80px))' }}>
            <div className="sticky top-24">
              <ShareLeftSide canonical={canonical} title={title} />
            </div>
          </div>

          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-12 gap-6 lg:gap-8">
              {/* Ana İçerik */}
              <main className="col-span-12 lg:col-span-8">
                <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                  {/* Başlık ve Meta Bilgiler */}
                  <div className="px-6 md:px-8 pt-6 md:pt-8 pb-5 md:pb-6 border-b border-gray-200 dark:border-gray-700">
                    <h1 className="text-2xl md:text-1xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
                      {title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <i className="far fa-calendar-alt text-primary"></i>
                        <time dateTime={data?.eventDate} className="font-medium">
                          {dayjs(data?.eventDate).format("DD MMMM YYYY")}
                        </time>
                        <span className="text-gray-400 dark:text-gray-600">•</span>
                        <time dateTime={data?.eventDate} className="font-medium">
                          {dayjs(data?.eventDate).format("HH:mm")}
                        </time>
                      </div>
                      {data?.views && (
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <PiEyesFill className="text-lg text-primary" />
                          <span className="font-medium">{data.views} Okuma</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <FaRegCommentDots className="text-lg text-primary" />
                        <span className="font-medium">0 Yorum</span>
                      </div>
                    </div>
                  </div>

                  {/* Harita Görseli (varsa) */}
                  {(data as any)?.map_image_path && (
                    <div className="relative w-full bg-gray-100 dark:bg-gray-700 overflow-hidden cursor-zoom-in">
                      <div className="max-h-96 md:max-h-[400px] lg:max-h-[450px] overflow-hidden">
                        <Zoom>
                          <Image
                            src={generateImageUrl((data as any).map_image_path)}
                            alt={`${data.location} Deprem Haritası`}
                            width={1200}
                            height={600}
                            className="w-full h-auto object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                          />
                        </Zoom>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-2 pointer-events-none">
                        <span className="text-white text-xs font-medium flex items-center gap-2">
                          <i className="fas fa-search-plus"></i>
                          Tam ekran için tıklayın
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Açıklama */}
                  <div className="px-6 md:px-8 py-6 md:py-8">
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      {description}
                    </p>

                    {/* Deprem Bilgileri */}
                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-5">
                        Deprem Bilgileri
                      </h3>
                      <EarthquakeDataTableMini earthquake={data} />
                    </div>
                  </div>

                  {/* Alt Kısım - Tags ve Share */}
                  <div className="px-6 md:px-8 py-5 md:py-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      {/* Tags */}
                      {data?.meta_keywords && (
                        <div className="flex-1">
                          <div className="flex flex-wrap gap-2">
                            {data.meta_keywords
                              .split(",")
                              .filter(Boolean)
                              .map((tag: string, i: number) => (
                                <Link
                                  key={i}
                                  href={generateSearchLink(tag.trim())}
                                  className="inline-flex items-center px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                                >
                                  #{tag.trim()}
                                </Link>
                              ))}
                          </div>
                        </div>
                      )}

                      {/* Share Buttons (Mobile/Tablet) */}
                      <div className="lg:hidden">
                        <ShareBottomSide canonical={canonical} title={title} />
                      </div>
                    </div>
                  </div>
                </article>
              </main>

              {/* Sağ Sidebar - Son Haberler */}
              <aside className="col-span-12 lg:col-span-4">
                <LastNewsRightBar />
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
