import { Roboto } from "next/font/google";
import Layout from "@/components/theme/Layout";
import Hydration from "@/components/Hydration";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import "./globals.css";
import "../../public/assets/css/fontawesome-all.min.css";
import "../../public/assets/css/main.css";
import "react-medium-image-zoom/dist/styles.css";
import "dayjs/locale/tr";

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
  dayjs.locale("tr");
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Europe/Istanbul");
  process.env.TZ = "Europe/Istanbul";

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
