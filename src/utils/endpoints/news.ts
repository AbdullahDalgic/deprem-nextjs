import { ApiUrlPrepare } from "../helpers/api";
import API from "../api/apiConfig";
import {
  ApiDataType,
  ApiParams,
  ApiResponse,
  LaravelPaginationType,
} from "../interfaces/api";
import { INews } from "../interfaces/news";

export const apiGetNews = async <T extends ApiParams>(params: T) => {
  const url = ApiUrlPrepare({ params, url: `/admin/news` });
  return API.get<LaravelPaginationType<INews>>(url);
};

export const apiCreateNews = async (earthquakeId: number) => {
  const url = `/admin/news/createWithId/${earthquakeId}`;
  return API.post<ApiDataType<INews>>(url);
};

export const apiCreateIndex = async (newsId: number) => {
  const url = `/admin/news/createIndex/${newsId}`;
  return API.post<ApiDataType<INews>>(url);
};

export const apiGetNewsDetail = async (id: string | number) => {
  const url = `/admin/news/${id}`;
  return API.get<ApiDataType<INews>>(url);
};

export const apiImageJob = async (id: string | number) => {
  const url = `/admin/quick_jobs/image_job/${id}`;
  return API.get<ApiResponse>(url);
};

export const apiSendToInstagram = async (id: string | number) => {
  const url = `/admin/quick_jobs/send_to_instagram_job/${id}`;
  return API.get<ApiResponse>(url);
};
