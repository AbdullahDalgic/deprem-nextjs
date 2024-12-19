"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    document.title = "Bir hata oluştu - Deprem Wiki";
  }, []);
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
          src="/assets/img/others/500.svg"
          alt="error"
          width={400}
          height={300}
          style={{ width: "auto", height: "300px", marginBottom: "50px" }}
        />
        <Typography variant="h3" gutterBottom>
          Bir hata oluştu
        </Typography>
        <Typography variant="body1">
          {error.message ||
            "Bir hata oluştu. Lütfen daha sonra tekrar deneyin."}
        </Typography>
        <Link href="/" legacyBehavior>
          <a className="btn default-btn">Anasayfaya Dön</a>
        </Link>
      </Box>
    </Container>
  );
}
