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
      {/* <Script
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
      </Script> */}

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
          console.log('loaded google analytics');
        `}
      </Script>

      <Script strategy="lazyOnload" id="pixel">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '526062079923527');
        fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=526062079923527&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  );
};

export default Scripts;
