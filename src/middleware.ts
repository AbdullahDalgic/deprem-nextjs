import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import API from "./utils/api/apiConfig";
import { generateEarthquakeLink } from "./utils/helpers/urls";
import UAParser from "ua-parser-js";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl || {};

  if (!pathname.startsWith("/_next/") && !pathname.startsWith("/api/")) {
    try {
      const userAgent = request.headers.get("user-agent") || "";
      const parser = new UAParser(userAgent);
      const result = parser.getResult();

      if (result) {
        return NextResponse.next({
          ...request,
          headers: {
            ...request.headers,
            "x-device": result.device.model || "Unknown",
            "x-device_type": result.device.type || "Unknown",
          },
        });
      }
    } catch (error) {}
  }

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
