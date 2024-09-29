import { Box, Grid2, Typography } from "@mui/material";
import Link from "next/link";

interface ISectionTitle {
  title: string;
  link?: string;
  linkText?: string;
}

export default function SectionTitle({ title, link, linkText }: ISectionTitle) {
  return (
    <Box className="section__title-wrap" sx={{ mb: 2, mt: 1 }}>
      <Grid2
        container
        justifyContent={"space-between"}
        alignItems={"end"}
        rowSpacing={0}
        columnSpacing={5}
      >
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="h3" sx={{ mb: 0, fontSize: 35 }}>
            {title}
          </Typography>
        </Grid2>
        {linkText && (
          <Grid2
            size={{ xs: 12, md: 6 }}
            display={"flex"}
            justifyContent={"flex-end"}
          >
            <div className="section__read-more">
              <Link href={link || "#"}>
                {linkText} <i className="far fa-long-arrow-right" />
              </Link>
            </div>
          </Grid2>
        )}
      </Grid2>
    </Box>
  );
}
