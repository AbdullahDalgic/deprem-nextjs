import { Box, Container, Divider, Grid2, Typography } from "@mui/material";
import React from "react";
import dayjs from "dayjs";
import { FaCalendarAlt } from "react-icons/fa";
import { pink } from "@mui/material/colors";
import { APP_LINKS, APP_SOCIALS } from "@/utils/constants/links";
import ImageButton from "@/components/elements/ImageButton";

export default function HeaderTop() {
  return (
    <Box sx={{ width: "100%", bgcolor: "#111111" }}>
      <Container maxWidth="lg">
        <Grid2 container>
          <Grid2 size={{ md: 6, sm: 6, xs: 6 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FaCalendarAlt color={pink[500]} />
              <Typography variant="body1" color={"#fff"}>
                {dayjs().format("MMMM D, YYYY")}
              </Typography>
            </Box>
          </Grid2>

          <Grid2 size={{ md: 6, sm: 6, xs: 0 }}>
            <Box
              sx={{
                height: "100%",
                display: {
                  xs: "none",
                  md: "flex",
                },
                justifyContent: "flex-end",
                gap: 1,
              }}
            >
              {APP_SOCIALS.map((a, k) => (
                <ImageButton key={k} {...a} />
              ))}
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ borderColor: "#efefef" }}
              />
              {APP_LINKS.map((a, k) => (
                <ImageButton key={k} {...a} />
              ))}
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
