import API from "@/utils/api/apiConfig";
import { INews } from "@/utils/interfaces/news";
import { IPagination } from "@/utils/interfaces/pagination";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const params = new URL(request.url).searchParams;
  const { page = 1, limit = 10 } = Object.fromEntries(params);

  try {
    const url = `/news?page=${Number(page) + 1}&limit=${limit}`;
    const { data } = await API.get(url);

    const responseData: IPagination<INews> = {
      data: data?.data,
      current_page: data?.current_page,
      last_page: data?.last_page,
      per_page: data?.per_page,
      from: data?.from,
      to: data?.to,
      total: data?.total,
    };

    return NextResponse.json(responseData);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
