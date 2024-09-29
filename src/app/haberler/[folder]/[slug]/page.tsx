import { API_URL, SITE_URL } from "@/utils/constants";
import Link from "next/link";
import API from "@/utils/api/apiConfig";
import dayjs from "dayjs";
import Image from "next/image";
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

interface INewsPage {
  params: {
    folder: string;
    slug: string;
  };
}

export const generateMetadata = async (props: INewsPage) => {
  const { folder, slug } = props.params;
  const { data }: { data: INews } = await API.get(`/news/${folder}/${slug}`);

  return SeoData({
    title: data?.title,
    description: data?.meta_description,
    image: `${API_URL}${data?.image}`,
    url: `${SITE_URL}/haberler/${folder}/${slug}`,
  });
};

export default async function NewsDetail(props: INewsPage) {
  const { folder, slug } = props.params;
  const { data }: { data: INews } = await API.get(`/news/${folder}/${slug}`);

  const canonical = `${SITE_URL}/haberler/${folder}/${slug}`;
  const metaImage = `${API_URL}${data?.image}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: data?.title || "",
    datePublished: data?.created_at || "",
    image: metaImage,
    articleBody: data?.content || "",
    author: {
      "@type": "Person",
      name: "Admin",
    },
    publisher: {
      "@type": "Organization",
      name: "Deprem Wiki",
    },
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

      <Breadcrumb
        breadcrumbCategory={"Depremler"}
        breadcrumbCategoryLink={`${SITE_URL}/depremler`}
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
                      <Image
                        src={`${API_URL}${data.image_map}`}
                        alt={data.title}
                        style={{ width: "100%", objectFit: "cover" }}
                        width={700}
                        height={700}
                        loading="lazy"
                        sizes="(max-width: 700px) 100vw, 700px"
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
                                <Link href="#">{tag}</Link>
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
