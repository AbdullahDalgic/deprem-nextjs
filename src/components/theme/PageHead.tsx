import Head from "next/head";

const PageHead = ({ headTitle }: any) => {
  return (
    <Head>
      <title>{headTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Deprem bilgileri ve son depremler hakkında güncel bilgiler."
      />
      <meta
        name="keywords"
        content="deprem, son depremler, deprem bilgileri, deprem nedir, deprem haritası"
      />
      <meta name="author" content="deprem.wiki" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="google" content="notranslate" />
      <meta name="google" content="max-snippet:-1" />
      <meta name="google" content="max-image-preview:large" />
    </Head>
  );
};

export default PageHead;
