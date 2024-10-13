"use client";
import React from "react";
import Script from "next/script";

const Scripts = () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 100);
  }, []);

  if (!loading) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NX6P3CKR55"
        strategy="lazyOnload"
        id="google-analytics-script"
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NX6P3CKR55');
        `}
      </Script>

      <Script
        strategy="lazyOnload"
        id="google-news"
        src="https://news.google.com/swg/js/v1/swg-basic.js"
      />
      <Script strategy="lazyOnload" id="google-news-script">
        {`
          (self.SWG_BASIC = self.SWG_BASIC || []).push( basicSubscriptions => {
            basicSubscriptions.init({
              type: "NewsArticle",
              isPartOfType: ["Product"],
              isPartOfProductId: "CAowkNq1DA:openaccess",
              clientOptions: { theme: "light", lang: "tr" },
            });
          });
        `}
      </Script>
    </>
  );
};

export default Scripts;
