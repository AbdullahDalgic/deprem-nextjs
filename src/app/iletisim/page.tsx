import SectionTitle from "@/components/elements/SectionTitle";
import Breadcrumb from "@/components/theme/Breadcrumb";
import { Box, Container, Grid2 } from "@mui/material";
import ShowMail from "@/components/pages/Contact/ShowMail";
import SeoData from "@/utils/helpers/seo";
import { SITE_URL } from "@/utils/constants";

export const generateMetadata = async () => {
  return SeoData({
    title: "İletişim",
    description: "Deprem.wiki iletişim sayfası",
    url: `${SITE_URL}/iletisim`,
    robots: false,
  });
};

export default function Contact() {
  return (
    <>
      <Breadcrumb
        breadcrumbPostTitle="İletişim"
        breadcrumbPostUrl="/iletisim"
      />

      <Container maxWidth="lg">
        <Grid2 container spacing={2} sx={{ minHeight: "70vh" }}>
          <Grid2 size={12}>
            <SectionTitle title="İletişim" />
          </Grid2>

          <Grid2 size={12}>
            <Box sx={{ mb: 10, mt: 5 }}>
              <h3>İletişim Bilgileri</h3>
              <p>
                <strong>E-posta:</strong>
                <ShowMail />
              </p>

              <p className="mt-40 mb-80">
                Bizimle iletişime geçmek için yukarıdaki e-posta adresine mail
                atabilirsiniz.
              </p>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
}
