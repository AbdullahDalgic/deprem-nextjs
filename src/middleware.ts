import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import API from "./utils/api/apiConfig";
import dayjs from "dayjs";
import { generateEarthquakeLink } from "./utils/helpers/urls";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl || {};
  if (pathname.startsWith("/deprem/") || pathname.startsWith("/depremler/")) {
    const id = pathname.split("/")[2];
    if (id == Number(id).toString()) {
      const { data } = await API.get(`/earthquakes/${id}`);
      if (data) {
        const url = generateEarthquakeLink(data);
        return NextResponse.redirect(new URL(url, request.url), 302);
      }
    }
  }

  if (pathname.startsWith("/kurumsal/gizlilik-sozlesmesi")) {
    const url = "/sayfalar/gizlilik-politikasi";
    return NextResponse.redirect(new URL(url, request.url), 302);
  }

  if (pathname === "/eklenti") {
    return NextResponse.redirect(new URL("/apps", request.url), 302);
  }
}
