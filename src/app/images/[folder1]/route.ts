import { NextResponse, NextRequest } from "next/server";

// images/depremler/20833/web.png
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ [key: string]: string }> }
) {
  const { url } = request;

  try {
    const imageName = url.split("images/")?.[1] || "";
    const imageUrl = `https://api.deprem.wiki/images/${imageName}`;

    const imageExts = imageName.split(".");
    const imageExt = imageExts[imageExts.length - 1];
    // return NextResponse.json({ imageName });

    const res = await fetch(imageUrl);
    const blob = await res.arrayBuffer();
    const headers = new Headers();
    headers.set("Content-Type", `image/${imageExt}`);
    return new NextResponse(blob, { status: 200, statusText: "OK", headers });
  } catch (error) {
    return NextResponse.json({ error: "bir hata olustu" });
  }
}
