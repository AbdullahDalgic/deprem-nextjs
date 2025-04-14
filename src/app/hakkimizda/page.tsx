import Breadcrumb from "@/components/theme/Breadcrumb";
import { Container, Grid2, Typography } from "@mui/material";
import SeoData from "@/utils/helpers/seo";
import {
  APP_NAME,
  AUTHOR,
  LOGO,
  META,
  SITE_URL,
  SOCIAL,
} from "@/utils/constants";
import CustomLink from "@/components/elements/CustomLink";

export const generateMetadata = async () => {
  return SeoData({
    title: "Hakkımızda",
    url: `${SITE_URL}/hakkimizda`,
    description:
      "Deprem Wiki, tamamen ücretsiz olarak sunulan, deprem haberlerine anlık erişim sağlayan ve deprem güvenliğini artırmayı amaçlayan sosyal sorumluluk projesidir.",
  });
};

export default function Contact() {
  const jsonTld = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: APP_NAME,
    operatingSystem: "Web, Android, iOS, Browser Extensions",
    applicationCategory: "NewsApplication",
    description: META.description,
    image: LOGO.white,
    url: "https://deprem.wiki",
    datePublished: "2025-04-14",
    creator: {
      "@type": "Person",
      name: AUTHOR,
      url: "https://abdullahdalgic.com.tr",
    },
    isAccessibleForFree: true,
    license: "https://opensource.org/licenses",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY",
    },
    inLanguage: "tr",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1000+",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://deprem.wiki/ara?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Breadcrumb
        breadcrumbPostTitle="Hakkımızda"
        breadcrumbPostUrl="/hakkimizda"
      />

      <section>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <article>
                <Typography variant="h2" gutterBottom>
                  Hakkımızda
                </Typography>

                <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
                  Depremler, yaşamı derinden etkileyen ciddi doğal afetlerdir.
                  Bu bilinçle hayata geçen <strong>Deprem Wiki</strong>, deprem
                  haberlerini anlık ve doğru şekilde sunan; web sitesi, sosyal
                  medya hesapları, mobil uygulamalar ve tarayıcı uzantıları
                  aracılığıyla toplumu bilgilendiren yenilikçi bir platformdur.
                </Typography>

                <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
                  İlk yayını <strong>Temmuz 2023</strong>'te gerçekleştiren
                  projemiz, Hatay’da depremden etkilenen bir depremzede olan
                  yazılımcı{" "}
                  <CustomLink
                    href="https://abdullahdalgic.com.tr"
                    target="_blank"
                    doFollow={true}
                  >
                    Abdullah Dalgıç
                  </CustomLink>
                  'ın önderliğinde, deprem bilincini toplumda artırmak ve
                  güvenli yaşam alanları oluşturmak amacıyla hayata
                  geçirilmiştir.
                </Typography>

                <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
                  Abdullah Dalgıç, yaşadığı acıyı toplumla paylaşarak, deprem
                  güvenliğine dair farkındalığı artırmak ve her bireyin
                  hazırlıklı olmasını sağlamak için bu projeyi sosyal sorumluluk
                  ruhuyla geliştirmiştir. Projemiz, en güncel deprem haberlerine
                  ve gelişmelere ulaşmanızı sağlarken;{" "}
                  <CustomLink title="Instagram" href={SOCIAL.instagram} />,
                  <CustomLink title="Facebook" href={SOCIAL.facebook} />,{" "}
                  <CustomLink title="Twitter" href={SOCIAL.twitter} />, gibi
                  sosyal medya platformları üzerinden de sizlere destek
                  olmaktadır.
                </Typography>

                <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
                  Amacımız; birlikte hareket ederek, toplumun her kesiminin
                  deprem konusunda bilgi sahibi olmasını ve olası risklere karşı
                  hazırlıklı olmasını sağlamaktır. Daha fazla bilgi almak,
                  projeye katkıda bulunmak veya destek olmak için{" "}
                  <CustomLink href="https://deprem.wiki">
                    web sitemiz
                  </CustomLink>{" "}
                  ve{" "}
                  <CustomLink
                    href="https://abdullahdalgic.com.tr"
                    target="_blank"
                  >
                    kişisel web sayfamız
                  </CustomLink>{" "}
                  üzerinden bizlere ulaşabilirsiniz.
                </Typography>
              </article>
            </Grid2>
          </Grid2>
        </Container>
      </section>

      <script type="application/ld+json">{JSON.stringify(jsonTld)}</script>
    </>
  );
}
