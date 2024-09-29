import { SITE_URL } from "@/utils/constants";
import SeoData from "@/utils/helpers/seo";
import { Box, Container } from "@mui/material";

export const generateMetadata = async () => {
  return SeoData({
    title: "Gizlilik Politikası",
    description: "Deprem.wiki gizlilik politikası",
    url: `${SITE_URL}/gizlilik-politikasi`,
  });
};

export default function PrivacyPolicy() {
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
