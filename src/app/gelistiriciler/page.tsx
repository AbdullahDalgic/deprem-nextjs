import SectionTitle from "@/components/elements/SectionTitle";
import Breadcrumb from "@/components/theme/Breadcrumb";
import { EMAIL, SITE_URL } from "@/utils/constants";
import SeoData from "@/utils/helpers/seo";
import { Grid2, Container, Typography, Box } from "@mui/material";

export const generateMetadata = async () => {
  return SeoData({
    title: "Geliştiriciler",
    description: "Deprem.wiki geliştiriciler sayfası",
    url: `${SITE_URL}/gelistiriciler`,
  });
};

export default function PrivacyPolicy() {
  return (
    <>
      <Breadcrumb
        breadcrumbPostTitle="Geliştiriciler"
        breadcrumbPostUrl="/gelistiriciler"
      />

      <Container maxWidth="lg" sx={{ mt: "2rem", mb: "4rem" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography variant="h3" component="h1">
            Geliştiriciler Hakkında
          </Typography>
          <Typography variant="body1">
            <strong>Yürürlük Tarihi:</strong> 30 Eylül 2024
          </Typography>

          <Typography variant="body1">
            Açık kaynak yazılımlar, teknoloji dünyasında birlikte çalışmanın ve
            bilgi paylaşımının en önemli örneklerinden biridir. Bu projeye
            destek vermek isteyen geliştiriciler, katkıda bulunarak deprem
            bilgilerini daha erişilebilir hale getirmek için büyük bir fırsata
            sahiptir.
          </Typography>

          <Typography variant="body1">
            Deprem verilerine erişmek isteyen geliştiriciler, API ve webhook
            talepleri ile bizimle iletişime geçebilir. Bu sayede, kendi
            uygulamalarında bu değerli bilgileri kullanabilirler. Birlikte, daha
            güvenli bir toplum oluşturmak için iş birliği yapalım!
          </Typography>
        </Box>
      </Container>
    </>
  );
}
