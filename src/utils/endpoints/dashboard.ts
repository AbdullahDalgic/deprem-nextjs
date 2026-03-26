import API from "../api/apiConfig";

export interface DashboardData {
  groupByVersion: { app_version: string; count: number }[];
  groupByDeviceType: { device_type: string; count: number }[];
  groupByBrand: { device_brand: string; count: number }[];
  groupByOS: { device_os: string; device_os_version: string; count: number }[];
  groupByCountry: { country: string; count: number }[];
  activeByHour: { hour: number; count: number }[];
  downloadByDaily: { date: string; count: number }[];
}

export const apiGetDashboard = async () => {
  const url = `/admin/dashboard`;
  return API.get<DashboardData>(url);
};
