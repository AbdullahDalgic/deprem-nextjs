import { SITE_URL } from "@/utils/constants";
import Link from "next/link";
import API from "@/utils/api/apiConfig";
import dayjs from "dayjs";
import { Box, Container, Grid2 } from "@mui/material";
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
import { headers } from "next/headers";

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
  const headersList = await headers();
  const isMobile = headersList.get("x-device_type")
    ? headersList.get("x-device_type") === "mobile"
    : false;

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
        text: `${data?.earthquake?.location || ""} bölgesinde ${
          data?.earthquake?.magnitude || ""
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

      <Breadcrumb
        breadcrumbCategory={"Haberler"}
        breadcrumbCategoryLink={`${SITE_URL}/haberler`}
        breadcrumbPostUrl={canonical}
        breadcrumbPostTitle={data.title}
      />

      <section className="blog-datas-area pt-5 pb-100">
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Grid2 container spacing={2}>
            <Grid2
              size={{ lg: 1, md: 1, sm: 0, xs: 0 }}
              display={{ md: "flex", sm: "none", xs: "none" }}
              className="blog-details-social"
            >
              <ShareLeftSide canonical={canonical} title={data.title} />
            </Grid2>
            <Grid2 size={{ lg: 8, md: 8, sm: 12 }}>
              <div className="blog-details-wrap">
                <article>
                  <h1 className="title">{data.title}</h1>

                  <ul className="tgbanner__content-meta list-wrap">
                    <li>
                      <time dateTime={data.created_at}>
                        {dayjs(data.created_at).format("DD MMMM YYYY")}
                      </time>{" "}
                      tarihinde, saat{" "}
                      <time dateTime={data.created_at}>
                        {dayjs(data.created_at).format("HH:mm")}
                      </time>
                      'de yayımlandı.
                    </li>
                    <li>0 Yorum</li>
                    <li>{data.views} Okuma</li>
                  </ul>

                  <figure
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      maxHeight: "300px",
                      width: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <Zoom>
                      <img
                        src={generateImageUrl(data?.image_map)}
                        alt={data.title}
                        style={{
                          maxWidth: isMobile ? "500px" : "700px",
                          maxHeight: isMobile ? "300px" : "700px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        loading="eager"
                      />
                      <figcaption>{data.title}</figcaption>
                    </Zoom>
                  </figure>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.content,
                    }}
                  />

                  <Box sx={{ mt: 5 }}>
                    <h3>Deprem Bilgileri</h3>
                    <EarthquakeDataTableMini earthquake={data?.earthquake} />
                  </Box>
                </article>
                <div className="blog-details-bottom">
                  <Grid2 container spacing={2}>
                    <Grid2
                      size={{ lg: 8, md: 8, sm: 12 }}
                      sx={{
                        display: "flex",
                        flexDirection: { md: "row", sm: "column" },
                        gap: 2,
                      }}
                    >
                      <div className="blog-details-tags">
                        <ul className="list-wrap mb-0">
                          {data.meta_keywords
                            .split(",")
                            .map((tag: string, i: number) => (
                              <li key={i}>
                                <Link href={generateSearchLink(tag)}>
                                  {tag}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </Grid2>
                    <Grid2 size={{ lg: 4, md: 4, sm: 12 }}>
                      <ShareBottomSide
                        canonical={canonical}
                        title={data.title}
                      />
                    </Grid2>
                  </Grid2>
                </div>
              </div>
            </Grid2>
            <Grid2 size={{ lg: 3, md: 3, sm: 12 }}>
              <LastNewsRightBar />
            </Grid2>
          </Grid2>
        </Container>
      </section>
    </>
  );
}
