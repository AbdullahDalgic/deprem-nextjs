import { ApiUrlPrepare } from "../helpers/api";
import API from "../api/apiConfig";
import { ApiParams, LaravelPaginationType } from "../interfaces/api";

export interface Device {
  id: number;
  device_id: string;
  platform: string;
  model: string;
  version: string;
  created_at: string;
}

export const apiGetDevices = async <T extends ApiParams>(params: T) => {
  const url = ApiUrlPrepare({ params, url: `/admin/device` });
  return API.get<LaravelPaginationType<Device>>(url);
};
