// import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import SeoData from "@/utils/helpers/seo";

export async function generateMetadata() {
  return SeoData({
    title: "404 Sayfa Bulunamadı",
    description: "Aradığınız sayfa bulunamadı.",
    image: "/assets/img/others/404.png",
  });
}

export default function Error404() {
  return (
    <Container maxWidth="lg">
      <Box
        display={"flex"}
        gap={2}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ minHeight: "80vh" }}
      >
        <Image
          src="/assets/img/others/404.png"
          alt="error"
          width={400}
          height={300}
          style={{ width: "auto", marginBottom: "50px" }}
        />
        <Typography variant="h3" gutterBottom>
          Oops! Sayfa Bulunamadı!
        </Typography>
        <Typography variant="body1">
          Aradığınız sayfa silinmiş olabilir, adı değiştirilmiş olabilir veya
          geçici olarak kullanılamayabilir.
        </Typography>
        <Link href="/" legacyBehavior>
          <a className="btn default-btn">Anasayfaya Dön</a>
        </Link>
      </Box>
    </Container>
  );
}
