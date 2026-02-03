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

const ShareLeftSide = (props: IShareLeftSide) => {
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
    <div className="flex flex-col gap-3 items-center">
      {shareButtons.map(({ Component, icon, label, props, color }, index) => (
        <Component key={index} {...props} aria-label={label}>
          <div className={`w-11 h-11 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 transition-all duration-200 ${color} hover:text-white hover:border-transparent hover:scale-105 cursor-pointer shadow-sm hover:shadow-md`}>
            <i className={`${icon} text-base`} />
          </div>
        </Component>
      ))}
    </div>
  );
};

export default ShareLeftSide;
