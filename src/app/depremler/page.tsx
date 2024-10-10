// import Layout from "@/components/layout/Layout";
import API from "@/utils/api/apiConfig";
import EarthquakeTable from "@/components/elements/EarthquakeTable";
import SectionTitle from "@/components/elements/SectionTitle";
import { Container, Grid2 } from "@mui/material";
import Breadcrumb from "@/components/theme/Breadcrumb";
import { SITE_URL } from "@/utils/constants";
import SeoData from "@/utils/helpers/seo";
import { IEarthquake } from "@/utils/interfaces/earthquakes";
import { unstable_noStore as noStore } from "next/cache";

export async function generateMetadata() {
  return SeoData({
    title: "Depremler",
    url: `${SITE_URL}/depemler`,
  });
}

export default async function Earthquakes() {
  noStore();
  const { data } = await API.get("/earthquakes");
  const earthquakes: IEarthquake[] = data || [];

  if (!data) return null;

  return (
    <>
      <Breadcrumb
        breadcrumbPostTitle="Depremler"
        breadcrumbPostUrl={`${SITE_URL}/depremler`}
      />

      <section>
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <SectionTitle title="Son Depremler" />
            </Grid2>

            <Grid2 size={12}>
              <EarthquakeTable earthquakes={earthquakes} pagination={true} />
            </Grid2>
          </Grid2>
        </Container>
      </section>
    </>
  );
}
