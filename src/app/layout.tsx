import { Roboto } from "next/font/google";
import Layout from "@/components/theme/Layout";
import Hydration from "@/components/Hydration";

import "./globals.css";
import "../../public/assets/css/fontawesome-all.min.css";
import "../../public/assets/css/main.css";
import "react-medium-image-zoom/dist/styles.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={roboto.className}>
        <Layout footerClass="black-bg" logoWhite={true}>
          {children}
        </Layout>
        <Hydration />
      </body>
    </html>
  );
}
