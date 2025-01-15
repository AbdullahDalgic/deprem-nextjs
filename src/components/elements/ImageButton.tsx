import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IImageButton {
  link: string;
  image: string;
  title: string;
}

export default function ImageButton(props: IImageButton) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Link href={props.link} legacyBehavior>
        <a target="_blank" rel="noreferrer">
          <Image src={props.image} alt={props.title} width={25} height={25} />
        </a>
      </Link>
    </Box>
  );
}
