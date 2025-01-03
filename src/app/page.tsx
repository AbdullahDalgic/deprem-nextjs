import React from "react";
import API from "@/utils/api/apiConfig";
import Container from "@mui/material/Container";
import SectionTitle from "@/components/elements/SectionTitle";
import EarthquakeTable from "@/components/elements/EarthquakeTable";
import { Grid2 } from "@mui/material";
import Link from "next/link";
import BoxItem from "@/components/elements/news/BoxItem";
import SeoData from "@/utils/helpers/seo";
import { IEarthquake } from "@/utils/interfaces/earthquakes";
import { INews } from "@/utils/interfaces/news";
import { unstable_noStore as noStore } from "next/cache";
import { generateImageUrl } from "@/utils/helpers/urls";

export async function generateMetadata() {
  noStore();
  const { data = [] } = await API.get("/news_home");
  // 3 item
  const preloadImages = data?.news
    ?.slice(0, 3)
    .map((item: INews) => generateImageUrl(`${item?.image}`));
  return SeoData({
    preload: preloadImages,
  });
}

export default async function Home() {
  noStore();
  const { data } = await API.get("/news_home");
  const last_earthquakes: IEarthquake[] = data?.last_earthquakes || [];
  const news: INews[] = data?.news || [];

  return (
    <>
      <section className="tgbanner__area-one">
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <SectionTitle
            title="Son Depremler"
            link="/depremler"
            linkText="Daha Fazla Deprem Listele"
          />
          <EarthquakeTable earthquakes={last_earthquakes} pagination={false} />
        </Container>
      </section>

      <section className="latest-post-area">
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12 }}>
              <SectionTitle
                title="Son Deprem Haberleri"
                link="/haberler"
                linkText="Daha Fazla Haber"
              />
            </Grid2>
            {news &&
              news.map((item, i) => (
                <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={i}>
                  <BoxItem news={item} index={i} />
                </Grid2>
              ))}
          </Grid2>
          <div className="latest__post-more text-center">
            <Link href="/haberler" id="loadMore" className="btn">
              <span className="text">Daha Fazlası</span>{" "}
              <i className="far fa-plus" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
