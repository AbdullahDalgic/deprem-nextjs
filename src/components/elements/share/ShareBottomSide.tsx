"use client";
import React from "react";
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

const ShareBottomSide = (props: IShareLeftSide) => {
  const { canonical, title } = props;

  return (
    <div className="blog-details-share">
      <h6 className="share-title">Paylaş:</h6>
      <ul className="list-wrap mb-0">
        <li>
          <FacebookShareButton
            url={canonical}
            // quote={title}
            hashtag="#deprem"
            aria-label="Facebook'ta Paylaş"
          >
            <i className="fab fa-facebook-f" />
          </FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton
            url={canonical}
            title={title}
            hashtags={["deprem"]}
            aria-label="Twitter'da Paylaş"
          >
            <i className="fab fa-twitter" />
          </TwitterShareButton>
        </li>
        <li>
          <LinkedinShareButton
            url={canonical}
            title={title}
            aria-label="Linkedin'de Paylaş"
          >
            <i className="fab fa-linkedin-in" />
          </LinkedinShareButton>
        </li>
        <li>
          <WhatsappShareButton
            url={canonical}
            title={title}
            aria-label="Whatsapp'ta Paylaş"
          >
            <i className="fab fa-whatsapp" />
          </WhatsappShareButton>
        </li>
        <li>
          <TelegramShareButton
            url={canonical}
            title={title}
            aria-label="Telegram'da Paylaş"
          >
            <i className="fab fa-telegram" />
          </TelegramShareButton>
        </li>
      </ul>
    </div>
  );
};

export default ShareBottomSide;
