import Head from "next/head";
import { Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import SeoData from "@/utils/helpers/seo";

export async function generateMetadata() {
  return SeoData({
    title: "Uygulamalar",
    description: "Deprem Wiki uygulamaları hakkında bilgi alabilirsiniz.",
    image: "https://deprem.wiki/assets/img/apps/extension/extension-img-1.png",
  });
}

export default function Apps() {
  return (
    <>
      {/* <Layout breadcrumbPostTitle="Uygulamalar"> */}
      <section>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <article>
                <Typography variant="h2" gutterBottom>
                  Deprem Wiki Chrome Eklentisi
                </Typography>

                <Grid2 container spacing={2}>
                  <Grid2 size={{ xs: 12, md: 12 }}>
                    <Typography variant="body1" gutterBottom>
                      Chrome tarayıcınıza anlık deprem uyarıları sunan güçlü bir
                      araçtır! Artık Türkiye depremleri anlık olarak takip etmek
                      çok kolay.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                      Türkiye'deki kullanıcılar için anlık deprem bilgilerini
                      sağlayan güvenilir bir araçtır. Bu uygulama sayesinde,
                      depremler hakkında güncel bilgilere hızlıca erişebilir ve
                      olası risklere karşı hazırlıklı olabilirsiniz.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                      Özellikler: Anlık Bildirimler: Uygulama, Türkiye içinde
                      meydana gelen depremler hakkında anlık bildirimler
                      gönderir, böylece kullanıcılar acil durumlarda hızlı bir
                      şekilde bilgilendirilir.
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                      Kişiselleştirilmiş Ayarlar: Kullanıcılar, hangi
                      büyüklükteki depremler için bildirim almak istediklerini
                      ve nasıl bildirim alacaklarını kolayca ayarlayabilirler.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Eklentiyi indirmek için{" "}
                      <Link
                        href="https://api.deprem.wiki/eklenti"
                        aria-label="Deprem Wiki Chrome Eklentisi"
                        target="_blank"
                      >
                        buraya tıklayın
                      </Link>
                      .
                    </Typography>
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 4 }}>
                    <Zoom>
                      <Image
                        src={"/assets/img/apps/extension/extension-img-1.png"}
                        style={{ width: "auto", height: "auto" }}
                        width={600}
                        height={600}
                        loading="lazy"
                        sizes="(max-width: 100vw) 100vw, 600px"
                        alt="Deprem Wiki Chrome Eklentisi"
                      />
                    </Zoom>
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 4 }}>
                    <Zoom>
                      <Image
                        src={"/assets/img/apps/extension/extension-img-2.png"}
                        style={{ width: "auto", height: "auto" }}
                        width={600}
                        height={600}
                        loading="lazy"
                        sizes="(max-width: 100vw) 100vw, 600px"
                        alt="Deprem Wiki Chrome Eklentisi"
                      />
                    </Zoom>
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 4 }}>
                    <Zoom>
                      <Image
                        src={"/assets/img/apps/extension/extension-img-3.png"}
                        style={{ width: "auto", height: "auto" }}
                        width={400}
                        height={400}
                        loading="lazy"
                        sizes="(max-width: 100vw) 100vw, 400px"
                        alt="Deprem Wiki Chrome Eklentisi"
                      />
                    </Zoom>
                  </Grid2>
                </Grid2>
              </article>
            </Grid2>
          </Grid2>
        </Container>
      </section>
      {/* </Layout> */}
    </>
  );
}
