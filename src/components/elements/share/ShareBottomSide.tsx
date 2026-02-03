"use client";
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

interface IShareBottomSide {
  canonical: string;
  title: string;
}

const ShareBottomSide = (props: IShareBottomSide) => {
  const { canonical, title } = props;

  const shareButtons = [
    {
      Component: FacebookShareButton,
      icon: "fab fa-facebook-f",
      label: "Facebook'ta Paylaş",
      props: { url: canonical, hashtag: "#deprem" },
      color: "hover:bg-blue-600",
    },
    {
      Component: TwitterShareButton,
      icon: "fab fa-twitter",
      label: "Twitter'da Paylaş",
      props: { url: canonical, title, hashtags: ["deprem"] },
      color: "hover:bg-blue-400",
    },
    {
      Component: LinkedinShareButton,
      icon: "fab fa-linkedin-in",
      label: "Linkedin'de Paylaş",
      props: { url: canonical, title },
      color: "hover:bg-blue-700",
    },
    {
      Component: WhatsappShareButton,
      icon: "fab fa-whatsapp",
      label: "Whatsapp'ta Paylaş",
      props: { url: canonical, title },
      color: "hover:bg-green-500",
    },
    {
      Component: TelegramShareButton,
      icon: "fab fa-telegram",
      label: "Telegram'da Paylaş",
      props: { url: canonical, title },
      color: "hover:bg-blue-500",
    },
  ];

  return (
    <div className="blog-details-share flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <p className="text-sm font-bold text-gray-700 dark:text-gray-300 whitespace-nowrap uppercase tracking-wide">
        Paylaş:
      </p>
      <ul className="flex items-center gap-3 flex-wrap">
        {shareButtons.map(({ Component, icon, label, props, color }, index) => (
          <li key={index}>
            <Component {...props} aria-label={label}>
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 ${color} hover:text-white hover:border-transparent hover:scale-110 cursor-pointer shadow-md hover:shadow-xl`}>
                <i className={`${icon} text-lg`} />
              </div>
            </Component>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShareBottomSide;
