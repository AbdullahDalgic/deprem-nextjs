import API from "@/utils/api/apiConfig";
import SectionTitle from "@/components/elements/SectionTitle";
import BoxItem from "@/components/elements/news/BoxItem";
import { Container, Grid2 } from "@mui/material";
import { SITE_URL } from "@/utils/constants";
import SeoData from "@/utils/helpers/seo";
import Breadcrumb from "@/components/theme/Breadcrumb";
import { INews } from "@/utils/interfaces/news";

export const generateMetadata = async () => {
  return SeoData({
    title: "Haberler",
    description:
      "Deprem haberleri, son depremler ve deprem ile ilgili güncel haberler",
    url: `${SITE_URL}/haberler`,
  });
};

export default async function News() {
  const { data } = await API.get("/news");
  const news: INews[] = data?.data || [];

  if (!data) return null;

  return (
    <>
      <Breadcrumb
        breadcrumbPostUrl={"/haberler"}
        breadcrumbPostTitle={"Haberler"}
      />

      <section>
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <SectionTitle title="Son Deprem Haberleri" />
            </Grid2>

            {!!news?.length &&
              news.map((newsData, i) => (
                <Grid2 key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                  <BoxItem news={newsData} index={i} />
                </Grid2>
              ))}
          </Grid2>
        </Container>
      </section>
    </>
  );
}
