import { SITE_URL } from "@/utils/constants";
import SeoData from "@/utils/helpers/seo";
import { Box, Container } from "@mui/material";

export const generateMetadata = async () => {
  return SeoData({
    title: "Geliştiriciler",
    description: "Deprem.wiki geliştiriciler sayfası",
    url: `${SITE_URL}/gelistiriciler`,
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
