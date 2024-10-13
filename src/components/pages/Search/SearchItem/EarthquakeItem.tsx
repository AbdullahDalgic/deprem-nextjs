import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import dayjs from "dayjs";
import { IEarthquake } from "@/utils/interfaces/earthquakes";
import {
  earthquakeMetaImage,
  earthquakeTitle,
} from "@/utils/helpers/earthquakeHelper";
import { generateEarthquakeLink } from "@/utils/helpers/urls";

interface ISearchItem {
  earthquake: IEarthquake;
}

const EarthquakeItem = ({ earthquake }: ISearchItem) => {
  const url = generateEarthquakeLink(earthquake);

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Box width={50} height={50}>
        <Link href={url}>
          <Image
            src={earthquakeMetaImage()}
            alt={earthquakeTitle(earthquake)}
            style={{ width: "auto", height: "auto" }}
            width={50}
            height={50}
            loading="lazy"
          />
        </Link>
      </Box>
      <Box
        style={{
          paddingLeft: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" sx={{ fontSize: 10, color: "#888888" }}>
          {dayjs(earthquake?.created_at).format("DD MMMM YYYY")}
        </Typography>
        <Link href={url}>
          <Typography variant="h5" sx={{ fontWeight: 500, fontSize: 12 }}>
            {earthquakeTitle(earthquake)}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default EarthquakeItem;
