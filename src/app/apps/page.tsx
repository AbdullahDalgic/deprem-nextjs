import {
  Container,
  Grid2,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Divider,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import SeoData from "@/utils/helpers/seo";
import { APP_LINKS } from "@/utils/constants/links";
import { APPS } from "@/utils/constants";

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
          <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
            Deprem Wiki Uygulamaları
          </Typography>

          <Grid2 container spacing={4}>
            {/* Mobil Uygulama - Android & iOS */}
            <Grid2 size={12}>
              <Card elevation={2} sx={{ mb: 2 }}>
                <CardContent sx={{ p: 4 }}>
                  <Grid2 container spacing={3}>
                    <Grid2 size={{ xs: 12, md: 8 }}>
                      <Typography variant="h4" component="h2" gutterBottom>
                        Deprem Wiki Mobil Uygulama
                      </Typography>
                      <Typography variant="body1" paragraph>
                        Türkiye'deki depremleri anlık olarak takip etmek artık
                        çok kolay! Mobil uygulamamız, güvenilir kaynaklardan
                        aldığı verilerle, meydana gelen depremler hakkında hızlı
                        ve doğru bilgilendirme sağlar.
                      </Typography>

                      <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" gutterBottom>
                          Öne Çıkan Özellikler:
                        </Typography>
                        <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                          <li>
                            <strong>Anlık Bildirimler:</strong> Depremlerle
                            ilgili güncel bilgileri anında alın.
                          </li>
                          <li>
                            <strong>Kişiselleştirilebilir Ayarlar:</strong>{" "}
                            Bildirim tercihlerinizi özelleştirin.
                          </li>
                          <li>
                            <strong>Kullanıcı Dostu Arayüz:</strong> Herkes için
                            kolay kullanım.
                          </li>
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          component={Link}
                          href={APPS.android}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ minWidth: 180 }}
                        >
                          Google Play'den İndir
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          component={Link}
                          href={APPS.apple}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ minWidth: 180 }}
                        >
                          App Store'dan İndir
                        </Button>
                      </Box>
                    </Grid2>
                  </Grid2>
                </CardContent>
              </Card>
            </Grid2>

            {/* Chrome Extension */}
            <Grid2 size={12}>
              <Card elevation={2}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Deprem Wiki Browser Eklentisi
                  </Typography>

                  <Grid2 container spacing={3}>
                    <Grid2 size={{ xs: 12, md: 8 }}>
                      <Typography variant="body1" paragraph>
                        Chrome, Edge tarayıcınıza anlık deprem uyarıları sunan güçlü
                        bir araçtır! Artık Türkiye depremleri anlık olarak takip etmek çok kolay.
                      </Typography>

                      <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" gutterBottom>
                          Özellikler:
                        </Typography>
                        <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                          <li>
                            <strong>Anlık Bildirimler:</strong> Uygulama,
                            Türkiye içinde meydana gelen depremler hakkında
                            anlık bildirimler gönderir, böylece kullanıcılar acil
                            durumlarda hızlı bir şekilde bilgilendirilir.
                          </li>
                          <li>
                            <strong>Kişiselleştirilmiş Ayarlar:</strong>{" "}
                            Kullanıcılar, hangi büyüklükteki depremler için
                            bildirim almak istediklerini ve nasıl bildirim
                            alacaklarını kolayca ayarlayabilirler.
                          </li>
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          component={Link}
                          href={APPS.chrome}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Deprem Wiki Chrome Eklentisi"
                        >
                          Chrome Eklentisini İndir
                        </Button>


                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          component={Link}
                          href={APPS.edge}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Deprem Wiki Chrome Eklentisi"
                        >
                          Edge Eklentisini İndir
                        </Button>
                      </Box>
                    </Grid2>
                  </Grid2>

                  <Divider sx={{ my: 4 }} />

                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                      <Zoom>
                        <Image
                          src={"/assets/img/apps/extension/extension-img-1.png"}
                          style={{ width: "100%", height: "auto" }}
                          width={600}
                          height={600}
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          alt="Deprem Wiki Chrome Eklentisi"
                        />
                      </Zoom>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                      <Zoom>
                        <Image
                          src={"/assets/img/apps/extension/extension-img-2.png"}
                          style={{ width: "100%", height: "auto" }}
                          width={600}
                          height={600}
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          alt="Deprem Wiki Chrome Eklentisi"
                        />
                      </Zoom>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                      <Zoom>
                        <Image
                          src={"/assets/img/apps/extension/extension-img-3.png"}
                          style={{ width: "100%", height: "auto" }}
                          width={400}
                          height={400}
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          alt="Deprem Wiki Chrome Eklentisi"
                        />
                      </Zoom>
                    </Grid2>
                  </Grid2>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </Container>
      </section>
      {/* </Layout> */}
    </>
  );
}
