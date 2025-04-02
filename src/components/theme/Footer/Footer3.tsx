import Image from "next/image";
import Link from "next/link";
import { SOCIAL } from "@/utils/constants";
import { Box, Container, Grid2, Typography } from "@mui/material";

interface IFooter3 {
  footerClass: string;
  logoWhite: boolean;
}

export default function Footer3({ footerClass, logoWhite }: IFooter3) {
  return (
    <>
      <footer className={`footer-area ${footerClass}`}>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <div className="footer__logo-wrap">
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Box
                  display={"flex"}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  <Link
                    href="/"
                    className={logoWhite ? "logo-dark" : "logo-light"}
                    title="home"
                  >
                    <Box alignItems={"center"} gap={2} display={"flex"}>
                      <Image
                        src={`/assets/img/logo/${
                          logoWhite ? "logo" : "w_logo"
                        }.png`}
                        alt="Logo"
                        width={50}
                        height={50}
                        priority={false}
                        style={{ width: "auto" }}
                      />

                      <Typography
                        style={{ color: "#fff" }}
                        variant="h5"
                        component={"h1"}
                      >
                        Deprem Wiki - Türkiye
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </Grid2>
              <Grid2
                size={{ xs: 12, md: 6 }}
                display={"flex"}
                justifyContent={{ xs: "center", md: "flex-end" }}
              >
                <div className="footer__social">
                  <ul className="list-wrap">
                    {Object.entries(SOCIAL).map(([key, value], i) => (
                      <li key={i}>
                        <Link href={value} legacyBehavior>
                          <a
                            target="_blank"
                            rel="noreferrer nofollow"
                            aria-label={key}
                          >
                            <i className={`fab fa-${key}`} /> {key}{" "}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Grid2>

              <Grid2 size={{ xs: 12, md: 12 }}>
                <Box display={"flex"} flexDirection={"column"} gap={2}>
                  <Typography variant="body2" component={"p"}>
                    Depremler, yaşamı etkileyen ciddi doğal afetlerdir. Bu
                    nedenle, toplumu bilgilendirmek ve hazırlıklı hale getirmek
                    amacıyla geliştirdiğimiz bu açık kaynak yazılımlar ile,
                    depremler hakkında en güncel ve doğru bilgileri sağlamayı
                    hedeflemektedir. Ayrıca, bu platforma entegre ettiğimiz{" "}
                    <Link href="/apps" legacyBehavior target="_blank">
                      <a style={{ color: "#777777" }}>tarayıcı uzantısı</a>
                    </Link>{" "}
                    sayesinde kullanıcılarımız, deprem haberlerine anlık erişim
                    sağlayabilir.
                  </Typography>

                  <Typography variant="body2" component={"p"}>
                    Sosyal medya hesaplarımız (Instagram, Facebook, Twitter)
                    aracılığıyla da topluluk ile etkileşimde bulunarak, deprem
                    güvenliği ve farkındalığı konusunda bilinçlendirme
                    faaliyetleri yürütmekteyiz. Amacımız, her bireyin bu konuda
                    bilgi sahibi olması ve olası bir deprem durumuna karşı
                    hazırlıklı olmasını sağlamak.
                  </Typography>

                  <Typography variant="body2" component={"p"}>
                    Birlikte hareket ederek daha güvenli bir toplum oluşturmayı
                    umuyoruz. Projemiz hakkında daha fazla bilgi almak veya
                    katkıda bulunmak isterseniz, lütfen sosyal medya
                    hesaplarımızı takip edin veya iletişime geçin.
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>
          </div>
          <div className="footer__copyright">
            <Grid2 container spacing={2}>
              <Grid2
                size={{ xs: 12, md: 4 }}
                display={"flex"}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Typography variant="body2" component={"p"}>
                  © {new Date().getFullYear()}{" "}
                  <Link href="https://deprem.wiki" legacyBehavior>
                    <a style={{ color: "#777777" }}>deprem.wiki</a>
                  </Link>{" "}
                  - Tüm Hakları Saklıdır.
                </Typography>
              </Grid2>
              <Grid2
                size={{ xs: 12, md: 8 }}
                display={"flex"}
                justifyContent={{ xs: "center", md: "flex-end" }}
              >
                <div className="copyright__menu">
                  <ul className="list-wrap">
                    <li>
                      <Link href="/sayfalar/gizlilik-politikasi">
                        Gizlilik Politikası
                      </Link>
                    </li>
                    <li>
                      <Link href="/sayfalar/kullanim-kosullari">
                        Kullanım Koşulları
                      </Link>
                    </li>
                    <li>
                      <Link href="/iletisim">İletişim</Link>
                    </li>
                    <li>
                      <Link href="/gelistiriciler">Geliştiriciler</Link>
                    </li>
                  </ul>
                </div>
              </Grid2>
            </Grid2>

            <Typography sx={{ fontSize: 12 }}>
              Bu uygulama{" "}
              <Link href={"https://abdullahdalgic.com.tr"} legacyBehavior>
                <a
                  target="_blank"
                  title="Abdullah Dalgıç | Yazılım Geliştirme & Danışmanlık"
                >
                  Abdullah Dalgıç | Yazılım Geliştirme & Danışmanlık
                </a>
              </Link>{" "}
              tarafından hazırlandı.
            </Typography>
          </div>
        </Container>
      </footer>
    </>
  );
}
