"use client";
import React from "react";
import Script from "next/script";

const Scripts = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return null;

  return (
    <>
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
