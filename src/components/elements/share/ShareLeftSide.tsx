"use client";
import React from "react";
import { List, ListItem } from "@mui/material";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

interface IShareLeftSide {
  canonical: string;
  title: string;
}

const ShareLeftSide = (props: IShareLeftSide) => {
  const { canonical, title } = props;
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: { md: "column", sm: "row" },
        gap: 1,
      }}
    >
      <ListItem sx={{ width: "85px" }}>
        <FacebookShareButton
          url={canonical}
          // quote={title}
          hashtag="#deprem"
          aria-label="Facebook'ta Paylaş"
        >
          <i className="fab fa-facebook-f" />
        </FacebookShareButton>
      </ListItem>
      <ListItem sx={{ width: "85px" }}>
        <TwitterShareButton
          url={canonical}
          title={title}
          hashtags={["deprem"]}
          aria-label="Twitter'da Paylaş"
        >
          <i className="fab fa-twitter" />
        </TwitterShareButton>
      </ListItem>
      <ListItem sx={{ width: "85px" }}>
        <LinkedinShareButton
          url={canonical}
          title={title}
          aria-label="Linkedin'de Paylaş"
        >
          <i className="fab fa-linkedin-in" />
        </LinkedinShareButton>
      </ListItem>
      <ListItem sx={{ width: "85px" }}>
        <WhatsappShareButton
          url={canonical}
          title={title}
          aria-label="Whatsapp'ta Paylaş"
        >
          <i className="fab fa-whatsapp" />
        </WhatsappShareButton>
      </ListItem>
      <ListItem sx={{ width: "85px" }}>
        <TelegramShareButton
          url={canonical}
          title={title}
          aria-label="Telegram'da Paylaş"
        >
          <i className="fab fa-telegram" />
        </TelegramShareButton>
      </ListItem>
    </List>
  );
};

export default ShareLeftSide;
