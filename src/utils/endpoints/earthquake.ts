import { ApiUrlPrepare } from "../helpers/api";
import API from "../api/apiConfig";
import { ApiDataType, ApiParams, LaravelPaginationType } from "../interfaces/api";
import { IEarthquake } from "../interfaces/earthquakes";

export const apiGetEarthquake = async <T extends ApiParams>(
  earthquakeId: number,
  params: T,
) => {
  const url = ApiUrlPrepare({
    params,
    url: `/admin/earthquake/${earthquakeId}`,
  });
  return API.get<ApiDataType<IEarthquake>>(url);
};

export const apiGetEarthquakes = async <T extends ApiParams>(params: T) => {
  const url = ApiUrlPrepare({ params, url: `/admin/earthquake` });
  return API.get<LaravelPaginationType<IEarthquake>>(url);
};
