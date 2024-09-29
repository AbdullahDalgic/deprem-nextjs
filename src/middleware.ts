import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import API from "./utils/api/apiConfig";
import dayjs from "dayjs";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/deprem/")) {
    const id = request.nextUrl.pathname.split("/")[2];
    if (id) {
      const { data } = await API.get(`/earthquakes/${id}`);
      if (data) {
        const folder = dayjs(data.eventDate).format("YYYY-MM-DD");
        const url = `/depremler/${folder}/${data.eventId}`;
        return NextResponse.redirect(new URL(url, request.url), 302);
      }
    }
  }

  if (request.nextUrl.pathname.startsWith("/kurumsal/gizlilik-sozlesmesi")) {
    const url = "/sayfalar/gizlilik-politikasi";
    return NextResponse.redirect(new URL(url, request.url), 302);
  }

  if (request.nextUrl.pathname === "/eklenti") {
    return NextResponse.redirect(new URL("/apps", request.url), 302);
  }
}
