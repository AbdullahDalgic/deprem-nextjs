import UAParser from "ua-parser-js";
import { Reader } from "@maxmind/geoip2-node";
import API from "@/utils/api/apiConfig";
import path from "path";
import { NextResponse, NextRequest } from "next/server";

const dbPath = path.resolve("./src/utils/db/GeoLite2-City.mmdb");

export async function GET(request: NextRequest) {
  const ipAddress: string =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for") ||
    request.ip ||
    "";
  const userAgent = request.headers.get("user-agent") || "";
  const referrer =
    request.headers.get("referer") || request.headers.get("referrer") || "";

  try {
    const parser = new UAParser(userAgent);
    const result = parser.getResult();

    const reader = await Reader.open(dbPath);
    const { city, country } = reader.city(ipAddress);

    const data = {
      ip_address: ipAddress,
      user_agent: userAgent,
      referrer: referrer,
      browser: result?.browser?.name || "Unknown",
      browser_version: result?.browser?.version || "Unknown",
      engine: result?.engine?.name || "Unknown",
      engine_version: result?.engine?.version || "Unknown",
      os: result?.os?.name || "Unknown",
      os_version: result?.os?.version || "Unknown",
      device: result?.device?.model || "Unknown",
      device_type: result?.device?.type || "Unknown",
      device_vendor: result?.device?.vendor || "Unknown",
      cpu_architecture: result?.cpu?.architecture || "Unknown",
      city: city?.names["en"] || "Unknown",
      country: country?.names?.["en"] || "Unknown",
    };

    // Laravel API'sine ziyaretçi verilerini gönderme
    const response = await API.post("/visitor-log", data);
    if (!response) {
      throw new Error("Failed to log visitor data.");
    }

    return NextResponse.json({ message: "Visitor data logged successfully." });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
