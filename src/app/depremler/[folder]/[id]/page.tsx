import { SITE_URL } from "@/utils/constants";
import Link from "next/link";
import API from "@/utils/api/apiConfig";
import dayjs from "dayjs";
import LastNewsRightBar from "@/components/elements/news/LastNewsRightBar";
import { Box, Container, Grid2 } from "@mui/material";
import EarthquakeDataTableMini from "@/components/elements/earthquake/EarthquakeDetailTableMini";
import SeoData from "@/utils/helpers/seo";
import ShareLeftSide from "@/components/elements/share/ShareLeftSide";
import ShareBottomSide from "@/components/elements/share/ShareBottomSide";
import Breadcrumb from "@/components/theme/Breadcrumb";
import { notFound } from "next/navigation";
import {
  generateEarthquakeLink,
  generateSearchLink,
} from "@/utils/helpers/urls";
import {
  earthquakeDescription,
  earthquakeMetaImage,
  earthquakeTitle,
} from "@/utils/helpers/earthquakeHelper";

interface IEarthquakePage {
  params: {
    folder: string;
    id: string;
  };
}

export async function generateMetadata({ params }: IEarthquakePage) {
  const { id, folder } = params;
  const { data } = await API.get(`/earthquakes/${folder}/${id}`);

  if (!data) return notFound();

  return SeoData({
    title: earthquakeTitle(data),
    description: earthquakeDescription(data),
    url: generateEarthquakeLink(data),
  });
}

export default async function EarthquakeData({ params }: IEarthquakePage) {
  const { id, folder } = params;
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

      <Breadcrumb
        breadcrumbCategory={"Depremler"}
        breadcrumbCategoryLink={`${SITE_URL}/depremler`}
        breadcrumbPostUrl={canonical}
        breadcrumbPostTitle={title}
      />
      <section className="blog-details-area pt-5 pb-100">
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Grid2 container spacing={2}>
            <Grid2
              size={{ lg: 1, md: 1, sm: 0, xs: 0 }}
              display={{ md: "flex", sm: "none", xs: "none" }}
              className="blog-details-social"
            >
              <ShareLeftSide canonical={canonical} title={title} />
            </Grid2>
            <Grid2 size={{ lg: 8, md: 8, sm: 12 }}>
              <div className="blog-details-wrap">
                <article>
                  <h1 className="title">{title}</h1>

                  <ul className="tgbanner__content-meta list-wrap">
                    <li>
                      <time dateTime={data?.eventDate}>
                        {dayjs(data?.eventDate).format("DD MMMM YYYY")}
                      </time>{" "}
                      tarihinde, saat{" "}
                      <time dateTime={data?.eventDate}>
                        {dayjs(data?.eventDate).format("HH:mm")}
                      </time>
                      'de yayımlandı.
                    </li>
                    <li>0 Yorum</li>
                    <li>{data?.views} Okuma</li>
                  </ul>

                  <p>{description}</p>

                  <Box sx={{ mt: 5 }}>
                    <h3>Deprem Bilgileri</h3>
                    <EarthquakeDataTableMini earthquake={data} />
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
                          {data?.meta_keywords
                            ?.split(",")
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
                      <ShareBottomSide canonical={canonical} title={title} />
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
