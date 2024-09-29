import React from "react";
import Container from "@mui/material/Container";
import SectionTitle from "@/components/elements/SectionTitle";
import EarthquakeTable from "@/components/elements/EarthquakeTable";
import { INews } from "@/utils/interfaces/news";
import { IEarthquake } from "@/utils/interfaces/earthquakes";

interface IHome {
  last_earthquakes: IEarthquake[];
  news: INews[];
}

const HomeComponent = ({ last_earthquakes }: IHome) => {
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

      {/* <NewsComponent news={news} /> */}
    </>
  );
};

export default HomeComponent;
