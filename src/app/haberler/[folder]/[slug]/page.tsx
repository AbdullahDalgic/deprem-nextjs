import { SITE_URL } from "@/utils/constants";
import Link from "next/link";
import API from "@/utils/api/apiConfig";
import dayjs from "dayjs";
import Zoom from "react-medium-image-zoom";
import SeoData from "@/utils/helpers/seo";
import ShareLeftSide from "@/components/elements/share/ShareLeftSide";
import ShareBottomSide from "@/components/elements/share/ShareBottomSide";
import LastNewsRightBar from "@/components/elements/news/LastNewsRightBar";
import EarthquakeDataTableMini from "@/components/elements/earthquake/EarthquakeDetailTableMini";
import Breadcrumb from "@/components/theme/Breadcrumb";
import { INews } from "@/utils/interfaces/news";
import { notFound } from "next/navigation";
import {
  generateImageUrl,
  generateNewsLink,
  generateSearchLink,
} from "@/utils/helpers/urls";
import Image from "next/image";
import { PiEyesFill } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa";

interface INewsPage {
  params: Promise<{
    folder: string;
    slug: string;
  }>;
}

export const generateMetadata = async (props: INewsPage) => {
  const { folder, slug } = await props.params;
  const date = dayjs(folder).format("YYYY-MM-DD");
  const { data }: { data: INews } = await API.get(`/news/${date}/${slug}`);

  if (!data) return notFound();

  return SeoData({
    title: data?.title,
    description: data?.meta_description,
    image: generateImageUrl(data?.image),
    url: generateNewsLink(data),
    preload: [generateImageUrl(data?.image)],
  });
};

export default async function NewsDetail(props: INewsPage) {
  const { folder, slug } = await props.params;
  const date = dayjs(folder).format("YYYY-MM-DD");
  const { data }: { data: INews } = await API.get(`/news/${date}/${slug}`);
  dayjs.locale("tr");

  const canonical = generateNewsLink(data);
  const metaImage = generateImageUrl(data?.image);

  // Deprem verileri için ikinci bir JSON-LD nesnesi oluşturalım
  const earthquakeData = data?.earthquake
    ? {
      "@context": "https://schema.org",
      "@type": "SpecialAnnouncement",
      name: `${data?.earthquake?.location || ""} Depremi`,
      category: "https://schema.org/DisasterEvent",
      datePosted: data?.created_at,
      expires: null,
      text: `${data?.earthquake?.location || ""} bölgesinde ${data?.earthquake?.magnitude || ""
        } büyüklüğünde deprem meydana geldi.`,
      spatialCoverage: {
        "@type": "Place",
        name: data?.earthquake?.location || "",
        geo: {
          "@type": "GeoCoordinates",
          latitude: data?.earthquake?.lat || 0,
          longitude: data?.earthquake?.lng || 0,
        },
      },
      announcementLocation: {
        "@type": "Place",
        name: "Türkiye",
      },
    }
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: data?.title || "",
    name: data?.title || "",
    description: data?.meta_description || "",
    datePublished: data?.created_at || "",
    dateModified: data?.updated_at || data?.created_at || "",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    image: [metaImage],
    author: {
      "@type": "Organization",
      name: "Deprem Wiki",
      url: SITE_URL,
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
    articleBody: data?.content?.replace(/<[^>]*>/g, "") || "",
    articleSection: "Haberler",
    keywords: data?.meta_keywords || "",
    url: canonical,
  };

  if (!data) {
    return notFound();
  }

  const tags = data.meta_keywords?.split(",").filter(Boolean) || [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {earthquakeData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(earthquakeData) }}
        />
      )}

      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <Breadcrumb
          breadcrumbCategory={"Haberler"}
          breadcrumbCategoryLink={`${SITE_URL}/haberler`}
          breadcrumbPostUrl={canonical}
          breadcrumbPostTitle={data.title}
        />
      </div>

      <section className="py-6 md:py-8 bg-white dark:bg-gray-950">
        <div className="relative">
          {/* Sol Sidebar - Share Buttons (Desktop) - Container dışında, absolute */}
          <div className="hidden md:block absolute top-0" style={{ left: 'max(1rem, calc((100vw - 1152px) / 2 - 80px))' }}>
            <div className="sticky top-24">
              <ShareLeftSide canonical={canonical} title={data.title} />
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
                      {data.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <i className="far fa-calendar-alt text-primary"></i>
                        <time dateTime={data.created_at} className="font-medium">
                          {dayjs(data.created_at).format("DD MMMM YYYY")}
                        </time>
                        <span className="text-gray-400 dark:text-gray-600">•</span>
                        <time dateTime={data.created_at} className="font-medium">
                          {dayjs(data.created_at).format("HH:mm")}
                        </time>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <PiEyesFill className="text-lg text-primary" />
                        <span className="font-medium">{data.views} Okuma</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <FaRegCommentDots className="text-lg text-primary" />
                        <span className="font-medium">0 Yorum</span>
                      </div>
                    </div>
                  </div>

                  {/* Görsel */}
                  <div className="relative w-full bg-gray-100 dark:bg-gray-700 overflow-hidden cursor-zoom-in">
                    <div className="max-h-96 md:max-h-[400px] lg:max-h-[450px] overflow-hidden">
                      <Zoom>
                        <Image
                          src={generateImageUrl(data?.image_map)}
                          alt={data.title}
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

                  {/* İçerik */}
                  <div className="px-6 md:px-8 py-6 md:py-8">
                    <div
                      className="prose prose-base dark:prose-invert max-w-none
                      prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-bold
                      prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                      prose-a:text-primary dark:prose-a:text-primary-400 prose-a:font-medium
                      prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-bold
                      prose-img:rounded-lg prose-img:shadow-md prose-img:my-6
                      prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-800 prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-lg
                      prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-ul:my-4
                      prose-ol:text-gray-700 dark:prose-ol:text-gray-300 prose-ol:my-4
                      prose-li:my-1"
                      dangerouslySetInnerHTML={{
                        __html: data.content,
                      }}
                    />

                    {/* Deprem Bilgileri */}
                    {data?.earthquake && (
                      <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-5">
                          Deprem Bilgileri
                        </h3>
                        <EarthquakeDataTableMini earthquake={data?.earthquake} />
                      </div>
                    )}
                  </div>

                  {/* Alt Kısım - Tags ve Share */}
                  <div className="px-6 md:px-8 py-5 md:py-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      {/* Tags */}
                      {tags.length > 0 && (
                        <div className="flex-1">
                          <div className="flex flex-wrap gap-2">
                            {tags.map((tag: string, i: number) => (
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
                        <ShareBottomSide canonical={canonical} title={data.title} />
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
