import { SITE_URL } from "@/utils/constants";
import SeoData from "@/utils/helpers/seo";
import { Box, Container } from "@mui/material";

export const generateMetadata = async () => {
  return SeoData({
    title: "Kullanım Koşulları",
    description: "Deprem.wiki kullanım koşulları",
    url: `${SITE_URL}/kullanim-kosullari`,
  });
};

export default function TermsOfUse() {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          display={"flex"}
          gap={2}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ minHeight: "80vh" }}
        >
          Bu sayfa yapım aşamasındadır.
        </Box>
      </Container>
    </>
  );
}
